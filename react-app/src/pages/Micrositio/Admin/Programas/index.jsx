import Header from "../../components/Header";
import Main from "../../components/Main";
import Table from "../../components/Table";
import TablaPosgradosTipo from "../components/TablaPosgradosTipo";
import TablaPosgradosTotal from "../components/TablaPosgradosTotal";
import { useProgramas } from "../../../../hooks/useProgramas";
import { useNavigate, Link } from "react-router-dom";
import Filter from "../../components/Filter";
import { useState } from "react";

const headers = [
  "E/F",
  "Grado",
  "Programa",
  "Código",
  "Sede",
  "Tipo",
  "Modalidad",
  "Duración",
  "Créditos",
  "Año de inicio",
  "# materias",
  "# materias ingles",
  "rvoe",
  "fecha",
];

const escuelas = [
  "Gobierno y Economía",
  "Bellas Artes",
  "Derecho",
  "Empresariales",
  "ESDAI",
  "Filosofía",
  "Ingeniería",
  "Comunicación",
  "Pedagogía",
  "Empresariales Santa Fe",
  "Ciencias de la Salud",
];

const sedes = [
  "Mixcoac",
  "Santa Fe"
]

export default function Programas() {
  const { loading, programas } = useProgramas("Todos");
  const [filteredEscuelas, setFilteredEscuelas] = useState([]);
  const [filterSede, setFilterSede] = useState([]);
  const [filteredGrado, setFilteredGrado] = useState([]);
  const navigate = useNavigate();

  const filterProgramas = (programa) => {
    if (filteredEscuelas.length === 0 && filterSede.length === 0 && filteredGrado.length === 0) return true;
    if (filteredGrado.length === 0){
      if (filteredEscuelas.length === 0) return filterSede.includes(programa.campus);
      if (filterSede.length === 0) return filteredEscuelas.includes(programa.escuela);
      return filterSede.includes(programa.campus) && filteredEscuelas.includes(programa.escuela);
    }
    if(filteredEscuelas.length === 0 && filterSede.length === 0) return filteredGrado.includes(programa.grado);
    return filteredEscuelas.includes(programa.escuela) && filterSede.includes(programa.campus) && filteredGrado.includes(programa.grado);
  }
  return (
    <div className="w-full flex flex-col relative h-screen">
      <Header title="Programas">
        <Link
          to="/micrositio/admin/programas/new"
          className="bg-primary text-center flex items-center text-white rounded-lg px-3"
        >
          Nuevo
        </Link>
        <input
          placeholder="Buscar"
          className="rounded-lg px-3 py-1 border border-grayborder justify-self-end"
        ></input>
        <Filter title={"Escuela"} filtered={filteredEscuelas} setFiltered={setFilteredEscuelas} options={escuelas}/>
        <Filter title={"Sede"} filtered={filterSede} setFiltered={setFilterSede} options={sedes}/>
        <Filter title={"Grado"} filtered={filteredGrado} setFiltered={setFilteredGrado} options={["Maestría", "Doctorado","Especialidad"]}/>
      </Header>
      <Main>
        <article className="flex w-full justify-between mb-14">
          <TablaPosgradosTotal escuelas={filteredEscuelas.length>0?filteredEscuelas:escuelas} />
          <TablaPosgradosTipo escuelas={filteredEscuelas.length>0?filteredEscuelas:escuelas} />
        </article>
        <Table headers={headers} loading={loading}>
        {programas.filter(filterProgramas).map((programa, index) => 
            <tr
              className="border-b border-grayborder hover:bg-grayborder cursor-pointer transition-all ease-in-out duration-300"
              key={index}
              onClick={() => {
                navigate(`/micrositio/admin/programas/${programa.programa}`);
              }}
            >
              <td className="px-2 py-1">{programa.escuela}</td>
              <td className="px-2 py-1">{programa.grado}</td>
              <td className="px-2 py-1">{programa.programa}</td>
              <td className="px-2 py-1">{programa.codigo}</td>
              <td className="px-2 py-1">{programa.campus}</td>
              <td className="px-2 py-1">{programa.tipo}</td>
              <td className="px-2 py-1">{programa.modalidad}</td>
              <td className="px-2 py-1">{programa.duracion}</td>
              <td className="px-2 py-1">{programa.creditos}</td>
              <td className="px-2 py-1">{programa.year_inicio}</td>
              <td className="px-2 py-1">{programa.num_materias}</td>
              <td className="px-2 py-1">{programa.num_materias_ingles}</td>
              <td className="px-2 py-1">{programa.rvoe}</td>
              <td className="px-2 py-1">
                {programa.fecha_rvoe?.substring(0, 10)}
              </td>
            </tr>)}
        </Table>
      </Main>
    </div>
  );
}
