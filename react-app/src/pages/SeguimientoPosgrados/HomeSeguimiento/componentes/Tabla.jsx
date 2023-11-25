import { useEffect } from "react";
import ProgressCircle from "./ProgressCircle";
import ProgressStatus from "./ProgressStatus";
import axios from "axios";
const url_api = import.meta.env.VITE_URL_API;

export default function Tabla(props) {
  const procesos = props.procesos;
  const loading = props.loading;

  const onDateChange = (e, id) => {
    const data = {
      [e.target.id]: e.target.value,
    };
    axios
      .patch(url_api + "/proceso/" + id, data, { withCredentials: true })
      .then((res) => {
        props.setProcesos((prev) => {
          return prev.map((proceso) => {
            if (proceso.id == res.data.proceso[1][0].id) {
              res.data.proceso[1][0].programa = proceso.programa;
              res.data.proceso[1][0].etapas = proceso.etapas;
              return res.data.proceso[1][0];
            } else {
              return proceso;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const threeYearsLater = (date) => {
    if (date) {
      const dateObj = new Date(date);
      dateObj.setFullYear(dateObj.getFullYear() + 3);
      return dateObj.toLocaleDateString();
    } else {
      return null;
    }
  };

  return (
    <div className="w-11/12 flex flex-col items-start flex-1 overflow-auto mt-5">
      <table className="font-seravek font-light text-sm w-full">
        <thead>
          <tr className="text-secondary border-y border-secondary text-center space-x-5">
            <td className="py-3 text-left">Nombre del programa</td>
            <td>Siglas</td>
            <td>Campus</td>
            <td>Escuela</td>
            <td>Tipo</td>
            <td className="w-36">Modalidad</td>
            <td>Duración</td>
            <td>Etapa 1</td>
            <td>Etapa 2</td>
            <td>Etapa 3</td>
            <td>Etapa 4</td>
            <td>Etapa 5</td>
            <td>Etapa 6</td>
            <td>Estatus</td>
            <td>Inicio trámite</td>
            <td>Aprobación SEP</td>
            <td>Próxima actualización</td>
          </tr>
        </thead>
        <tbody>
          {loading ? null : (
            <>
              {procesos.length > 0
                ? procesos.map((proceso) => {
                    return (
                      <tr
                        className="border-b border-secondary"
                        key={proceso.id}
                      >
                        <td className="py-3 w-60 leading-tight">
                          {proceso.programa.programa}
                        </td>
                        <td className="text-center w-20">
                          {proceso.programa.codigo}
                        </td>
                        <td className="text-center w-20">Mixcoac</td>
                        <td className="text-center w-28">
                          {proceso.programa.escuela}
                        </td>
                        <td className="text-center w-24">{proceso.tipo}</td>
                        <td className="text-center w-24">
                          {proceso.programa.modalidad}
                        </td>
                        <td className="text-center w-16">
                          {proceso.programa.duracion} meses
                        </td>
                        <td className="w-[70px]">
                          <ProgressCircle
                            porcentaje={
                              proceso.etapas[0].etapaProceso.porcentaje
                            }
                          />
                        </td>
                        <td className="w-[70px]">
                          <ProgressCircle
                            porcentaje={
                              proceso.etapas[1].etapaProceso.porcentaje
                            }
                          />
                        </td>
                        <td className="w-[70px]">
                          <ProgressCircle
                            porcentaje={
                              proceso.etapas[2].etapaProceso.porcentaje
                            }
                          />
                        </td>
                        <td className="w-[70px]">
                          <ProgressCircle
                            porcentaje={
                              proceso.etapas[3].etapaProceso.porcentaje
                            }
                          />
                        </td>
                        <td className="w-[70px]">
                          <ProgressCircle
                            porcentaje={
                              proceso.etapas[4].etapaProceso.porcentaje
                            }
                          />
                        </td>
                        <td className="w-[70px] text-center">
                          {proceso.tipo == "Nuevo" ? (
                            <ProgressCircle
                              porcentaje={
                                proceso.etapas[5].etapaProceso.porcentaje
                              }
                            />
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td className="w-[70px]">
                          <ProgressStatus porcentaje={proceso.porcentaje} />
                        </td>
                        <td className="text-center px-2">
                          <input
                            type="date"
                            id="fecha_inicio_sep"
                            defaultValue={proceso.fecha_inicio_sep?.substring(
                              0,
                              10
                            )}
                            onChange={(e) => onDateChange(e, proceso.id)}
                          ></input>
                        </td>
                        <td className="text-center px-2">
                          <input
                            type="date"
                            id="fecha_aprobacion"
                            value={proceso.fecha_aprobacion?.substring(0, 10)}
                            onChange={(e) => onDateChange(e, proceso.id)}
                          ></input>
                        </td>
                        <td className="text-center px-2">
                          {threeYearsLater(proceso.fecha_aprobacion)}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
