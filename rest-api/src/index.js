require("dotenv").config();
const { send_servicios_confirmados } = require("./mail/nodemailerprovider");
var app = require("./app");
var sequelize = require("./database/database");
const Clase = require("./models/Clase");
const Programa = require("./models/Programa");
const Puesto_programa = require("./models/Puesto_programa");
const Persona = require("./models/Persona");
const Escuela = require("./models/Escuela");
const Puesto_escuela = require("./models/Puesto_escuela");
const Horario = require("./models/Horario");
const receso = require("./models/receso");
const Salon = require("./models/Salon");
const Servicios_dia = require("./models/Servicios_dia");
const Semana = require("./models/Semana");
const Usuario = require("./models/Usuario");
const Notificaciones = require("./models/Notificaciones");
const Etapa = require("./models/Etapa");
const Actividad = require("./models/Actividad");
const Proceso = require("./models/Proceso");
const ActividadProceso = require("./models/ActividadProceso");
const EtapaProceso = require("./models/EtapaProceso");

var port = process.env.PORT || 3900;

//relaciones de las tablas

//notificaciones
Usuario.hasMany(Notificaciones);
Notificaciones.belongsTo(Usuario, {
  foreignKey: "id_usuario",
});
Programa.hasMany(Notificaciones);
Notificaciones.belongsTo(Programa);

//seguimiento de posgrados
Etapa.hasMany(Actividad);
Actividad.belongsTo(Etapa);

Programa.hasMany(Proceso);
Proceso.belongsTo(Programa);

Proceso.belongsToMany(Etapa, { through: EtapaProceso });
Etapa.belongsToMany(Proceso, { through: EtapaProceso });
Proceso.hasMany(EtapaProceso);
EtapaProceso.belongsTo(Proceso);
Etapa.hasMany(EtapaProceso);
EtapaProceso.belongsTo(Etapa);

EtapaProceso.belongsToMany(Actividad, { through: ActividadProceso });
Actividad.belongsToMany(EtapaProceso, { through: ActividadProceso });
EtapaProceso.hasMany(ActividadProceso);
ActividadProceso.belongsTo(EtapaProceso);
Actividad.hasMany(ActividadProceso);
ActividadProceso.belongsTo(Actividad);

//programas y usuarios
Usuario.belongsToMany(Programa, {
  through: "usuario_programa",
  timestamps: false,
});
Programa.belongsToMany(Usuario, {
  through: "usuario_programa",
  timestamps: false,
});

//inicio de la aplicacion
async function init() {
  try {
    await sequelize.authenticate();
    //await sequelize.sync({ alter: true });
    console.log("Conexión a la base de datos establecida correctamente.");
    console.log("All models were synchronized successfully.");
    app.listen(port, () => {
      console.log("Servidor corriendo en http://localhost:" + port);
    });
  } catch (error) {
    console.error("No se ha podido conectar a la base de datos:", error);
  }
}
init();
