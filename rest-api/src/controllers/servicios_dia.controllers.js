const Servicios_dia = require("../models/Servicios_dia");
const Notificaciones = require("../models/Notificaciones");
const Salon = require("../models/Salon");
const { Op, Sequelize } = require("sequelize");
const sequelize = require("../database/database");
const send = require("../mail/nodemailerprovider");
const Semana = require("../models/Semana");

const get_servicios_fecha = async (req, res) => {
  const rol = req.user.dataValues.rol;
  const fecha = req.params.fecha;
  var query = "";
  if (rol == "Gestor") {
    query =
      "select * from servicios_dia inner join programa on programa.progra = servicios_dia.programa where fecha = '" +
      fecha +
      "' order by hora_inicio asc;";
  } else {
    query =
      "select * from servicios_dia inner join programa on programa.programa = servicios_dia.programa where programa.escuela = '" +
      req.user.dataValues.escuela +
      "' and fecha = '" +
      fecha +
      "' order by hora_inicio asc;";
  }
  try {
    const servicios = await sequelize.query(query);
    res.status(200).send({ servicio: servicios });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const cancelar_servicios = async (req, res) => {
  const rol = req.user.dataValues.rol;
  const servicios = req.body.servicios;
  if (servicios.length == 0 || rol != "Gestor") {
    res.status(500).send({ error: "No se pudo confirmar el servicio" });
    return;
  }
  const servicios_dia = await Servicios_dia.destroy({
    where: {
      id: {
        [Op.in]: servicios,
      },
      estado: "Pendiente",
    },
  });
  const servicios_confirmados = await Servicios_dia.findAll({
    where: {
      id: {
        [Op.in]: servicios,
      },
      estado: "Confirmado",
    },
  });
  if (rol !== "Gestor") {
    for (let i = 0; i < servicios_confirmados.length; i++) {
      const servicio = servicios_confirmados[i];
      const notificacion = await Notificaciones.create({
        id_servicio: servicio.dataValues.id,
        tipo: "Cancelacion",
        salon: servicio.salon_id,
        programa: servicio.programa,
        fecha_inicio: servicio.fecha,
        hora_inicio: servicio.hora_inicio,
        hora_fin: servicio.hora_fin,
        hora_servicio_inicio: servicio.hora_servicio_inicio,
        hora_servicio_fin: servicio.hora_servicio_fin,
        no_clase: servicio.no_clase,
        num_alumnos: servicio.num_servicios,
        id_usuario: req.user.dataValues.id,
        estado: "En proceso",
      });
      await send(
        "mx_eventos@up.edu.mx",
        req.user.dataValues.nombre +
          " ha realizado una solicitud de cancelacion",
        notificacion.dataValues,
        req.user.dataValues.nombre
      );
      await send(
        req.user.dataValues.email,
        "Has realizado una solicitud de cancelacion",
        notificacion.dataValues,
        req.user.dataValues.nombre
      );
    }
  } else {
    const servicios_dia_confirmados = await Servicios_dia.destroy({
      where: {
        id: {
          [Op.in]: servicios,
        },
        estado: "Confirmado",
      },
    });
  }
  res.status(200).send({ servicios: servicios_dia });
};

const confirmar_servicios = async (req, res) => {
  const rol = req.user.dataValues.rol;
  const { fecha_inicio, fecha_fin } = req.body;
  if (rol != "Gestor") {
    res.status(500).send({ error: "No se pudo confirmar el servicio" });
    return;
  }
  const servicios_confirmados = await Servicios_dia.update(
    {
      estado: "Confirmado",
    },
    {
      where: {
        fecha: {
          [Op.between]: [fecha_inicio, fecha_fin],
        },
        estado: "Pendiente",
      },
    }
  );
  await Semana.update(
    {
      inicio_semana: fecha_inicio,
      fin_semana: fecha_fin,
    },
    {
      where: {
        id: 3,
      },
    }
  );
  const query = "select salon.isla,servicios_dia.fecha,sum(servicios_dia.num_servicios) as NoPersonas,STRING_AGG(num_servicios::varchar || ' ' || salon::varchar, ' \n' ) as Observaciones, STRING_AGG(programa.cuenta,'\n') as cuenta from servicios_dia inner join salon on salon.salon = servicios_dia.salon_id inner join programa on programa.programa = servicios_dia.programa WHERE servicios_dia.fecha between '"+ fecha_inicio +"' and '"+fecha_fin+"' group by servicios_dia.fecha,salon.isla order by servicios_dia.fecha asc;";
  const servicios_dia_isla = await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });

  res.status(200).send({ servicios: servicios_dia_isla });
};

const get_servicio = async (req, res) => {
  const id = req.params.id;
  try {
    const servicio = await Servicios_dia.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).send({ servicio: servicio });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const get_servicios_isla = async (req, res) => {
  const rol = req.user.dataValues.rol;
  const fecha = req.params.dia;
  var query = "";
  if (rol == "Gestor") {
    query =
      "select sum(servicios_dia.num_servicios) as servicios_totales,salon.isla,programa.codigo as programa from servicios_dia left join salon on servicios_dia.salon_id =  salon.salon inner join programa on programa.programa = servicios_dia.programa where servicios_dia.fecha = '" +
      fecha +
      "' group by salon.isla,programa.codigo";
  } else {
    query =
      "select sum(servicios_dia.num_servicios) as servicios_totales,salon.isla,servicios_dia.programa as programa from servicios_dia left join salon on servicios_dia.salon_id =  salon.salon inner join programa on programa.programa = servicios_dia.programa where programa.escuela = '" +
      req.user.dataValues.escuela +
      "' and servicios_dia.fecha = '" +
      fecha +
      "' group by salon.isla,programa.codigo";
  }
  try {
    const servicios_dia = await sequelize.query(query);
    res.status(200).send({ servicio: servicios_dia });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
};

const get_suma_servicios_dia_isla = async (req, res) => {
  const fecha_inicio = req.params.fecha_inicio;
  const fecha_fin = req.params.fecha_fin;
  const rol = req.user.dataValues.rol;
  var query = "";
  if (rol == "Gestor") {
    query =
      "select sum(servicios_dia.num_servicios) as servicios_totales,salon.isla from servicios_dia left join salon on servicios_dia.salon_id =  salon.salon where servicios_dia.fecha between '" +
      fecha_inicio +
      "' and '" +
      fecha_fin +
      "' group by salon.isla";
  } else {
    query =
      "select sum(servicios_dia.num_servicios) as servicios_totales,salon.isla from servicios_dia left join salon on servicios_dia.salon_id =  salon.salon inner join programa on programa.programa = servicios_dia.programa where servicios_dia.fecha between '" +
      fecha_inicio +
      "' and '" +
      fecha_fin +
      "' and programa.escuela = '" +
      req.user.dataValues.escuela +
      "' group by salon.isla";
  }
  try {
    const servicios_dia = await sequelize.query(query);
    res.status(200).send({ servicio: servicios_dia });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const get_servicios_todos = async (req, res) => {
  const rol = req.user.dataValues.rol;
  var query = "";
  if (rol == "Gestor") {
    query =
      "select * from servicios_dia inner join programa on programa.programa = servicios_dia.programa order by fecha asc,hora_inicio asc";
  } else {
    query =
      "select * from servicios_dia inner join programa on programa.programa = servicios_dia.programa where programa.escuela ='" +
      req.user.dataValues.escuela +
      "'order by servicios_dia.fecha asc,servicios_dia.hora_inicio asc";
  }
  const servicios = await sequelize.query(query);
  res.status(200).send({ servicio: servicios });
};

const get_servicios_pendientes = async (req, res) => {
  const fecha = req.params.fecha;
  const rol = req.user.dataValues.rol;
  var query = "";
  if (rol == "Gestor") {
    query =
      "select * from servicios_dia inner join programa on programa.programa = servicios_dia.programa where not estado = 'Cancelado' and fecha = '" +
      fecha +
      "' order by hora_inicio asc";
  } else {
    query =
      "select * from servicios_dia inner join programa on programa.programa = servicios_dia.programa where programa.escuela ='" +
      req.user.dataValues.escuela +
      "' and not estado = 'Cancelado' and fecha = '" +
      fecha +
      "' order by servicios_dia.hora_inicio asc";
  }
  const servicios = await sequelize.query(query);
  res.status(200).send({ servicio: servicios });
};

const get_proximo_servicio = async (req, res) => {
  const today = new Date();
  const rol = req.user.dataValues.rol;
  const iso_today = today.toISOString().split("T")[0];
  var query = "";
  if (rol == "Gestor") {
    query =
      "select * from servicios_dia inner join programa on programa.programa = servicios_dia.programa where fecha >= '" +
      iso_today +
      "' and not estado = 'Cancelado' order by fecha asc, hora_inicio asc limit 1";
  } else {
    query =
      "select * from servicios_dia inner join programa on programa.programa =  servicios_dia.programa where servicios_dia.fecha >= '" +
      iso_today +
      "' and not servicios_dia.estado = 'Cancelado' and programa.escuela='" +
      req.user.dataValues.escuela +
      "' order by fecha asc, hora_inicio asc limit 1";
  }

  try {
    const servicio = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(servicio);
  } catch (error) {
    res.status(500).send({ error: error });
    console.log(error);
  }
};

const create_servicio = async (req, res) => {
  const {
    fecha,
    hora_inicio,
    hora_fin,
    num_servicios,
    salon_id,
    programa,
    no_clase,
    dia,
  } = req.body;
  try {
    const servicio = await Servicios_dia.create({
      fecha: fecha,
      hora_inicio: hora_inicio,
      hora_fin: hora_fin,
      num_servicios: num_servicios,
      salon_id: salon_id,
      programa: programa,
      no_clase: no_clase,
      dia: dia,
    });
    res.status(200).send({ servicio: servicio });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const update_servicio = async (req, res) => {
  const {
    fecha,
    hora_inicio,
    hora_servicio_fin,
    hora_servicio_inicio,
    hora_fin,
    num_servicios,
    salon_id,
    programa,
    no_clase,
    estado,
  } = req.body;
  const id = req.params.id;
  const rol = req.user.dataValues.rol;
  const servicio = await Servicios_dia.findOne({
    where: {
      id: id,
    },
  });
  const salon_nuevo = await Salon.findOne({
    where: {
      salon: salon_id,
    },
  });
  const salon_viejo = await Salon.findOne({
    where: {
      salon: servicio.salon_id,
    },
  });
  if (
    rol == "Gestor" ||
    servicio.estado !== "Confirmado" ||
    (servicio.num_servicios == num_servicios &&
      servicio.fecha == fecha &&
      salon_nuevo.isla == salon_viejo.isla &&
      servicio.hora_servicio_inicio == hora_servicio_inicio &&
      servicio.hora_servicio_fin == hora_servicio_fin)
  ) {
    try {
      const servicio = await Servicios_dia.update(
        {
          fecha: fecha,
          hora_inicio: hora_inicio,
          hora_fin: hora_fin,
          hora_servicio_inicio: hora_servicio_inicio,
          hora_servicio_fin: hora_servicio_fin,
          num_servicios: num_servicios,
          salon_id: salon_id,
          programa: programa,
          no_clase: no_clase,
          estado: estado,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).send({ servicio: servicio });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  } else {
    try {
      const notificacion = await Notificaciones.create({
        id_servicio: id,
        tipo: "Cambio",
        salon: salon_id,
        salon_actual: servicio.salon_id,
        programa: programa,
        fecha_inicio: fecha,
        fecha_actual: servicio.fecha,
        hora_inicio: hora_inicio,
        hora_fin: hora_fin,
        hora_servicio_inicio: hora_servicio_inicio,
        hora_servicio_inicio_actual: servicio.hora_servicio_inicio,
        hora_servicio_fin: hora_servicio_fin,
        hora_servicio_fin_actual: servicio.hora_servicio_fin,
        no_clase: no_clase,
        num_alumnos: num_servicios,
        num_alumnos_actual: servicio.num_servicios,
        id_usuario: req.user.dataValues.id,
        estado: "En proceso",
      });
      await send(
        "mx_eventos@up.edu.mx",
        req.user.dataValues.nombre +
          " ha creado una solicitud de cambio de servicio",
        notificacion.dataValues,
        req.user.dataValues.nombre
      );
      await send(
        req.user.dataValues.email,
        "Has creado una solicitud de cambio de servicio",
        notificacion.dataValues,
        req.user.dataValues.nombre
      );
      res.status(200).send({ notificacion: notificacion });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }
};

const delete_servicio = async (req, res) => {
  const id = req.params.id;
  const rol = req.user.dataValues.rol;
  const servicio = await Servicios_dia.findOne({
    where: {
      id: id,
    },
  });
  if (servicio.estado !== "Confirmado") {
    const servicio = await Servicios_dia.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({ servicio: servicio });
  } else if (rol == "Gestor") {
    servicio.estado = "Cancelado";
    await servicio.save();
    res.status(200).send({ servicio: servicio });
  } else {
    const notificaciones = await Notificaciones.findAll({
      where: {
        id_servicio: id,
        estado: "En proceso",
      },
    });
    if(notificaciones.length !== 0){
      res.status(200).send({ error: "Solo puede haber una solicitud por servicio" });
      return;
    }
    const notificacion = await Notificaciones.create({
      id_servicio: id,
      tipo: "Cancelacion",
      salon: servicio.salon_id,
      programa: servicio.programa,
      fecha_inicio: servicio.fecha,
      fecha_fin: servicio.fecha,
      hora_inicio: servicio.hora_inicio,
      hora_fin: servicio.hora_fin,
      hora_servicio_inicio: servicio.hora_servicio_inicio,
      hora_servicio_fin: servicio.hora_servicio_fin,
      num_alumnos: servicio.num_servicios,
      no_clase: servicio.no_clase,
      id_usuario: req.user.dataValues.id,
    });
    await send(
      "mx_eventos@up.edu.mx",
      req.user.dataValues.nombre + " ha creado una solicitud de cancelación",
      notificacion,
      req.user.dataValues.nombre
    );
    await send(
      req.user.dataValues.email,
      "Has creado una solicitud de cancelación",
      notificacion,
      req.user.dataValues.nombre
    );
    res.status(200).send({ notificacion: notificacion });
  }
};
module.exports = {
  get_servicios_fecha,
  get_proximo_servicio,
  get_servicios_todos,
  get_servicios_pendientes,
  get_servicios_isla,
  get_suma_servicios_dia_isla,
  create_servicio,
  update_servicio,
  delete_servicio,
  get_servicio,
  cancelar_servicios,
  confirmar_servicios
};
