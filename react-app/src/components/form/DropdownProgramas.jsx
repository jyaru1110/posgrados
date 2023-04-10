import Dropdown from "./Dropdown";
import { usePrograma } from "../../hooks/usePrograma";
import { programas_to_correct_format } from "../../utils/programas_to_correct_format";

export default function DropdownProgramas(props) {
  const programas = usePrograma(props.escuela);
  const options = programas_to_correct_format(programas);
  const label = 'Selecciona un programa';

  const child_to_parent = (child_data) => {
    props.func(child_data);
  };

  return (
    <Dropdown options={options} label={label} child_to_parent = {child_to_parent}/>
  );
}