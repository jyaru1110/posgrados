import { useClases } from "../../hooks/useClases";
import {clases_to_correct_format} from "../../utils/clases_to_correct_format";
import React from "react";
import Select from 'react-select';

export default function DropdowClase(props) {
  const label = 'Selecciona un número de clase';
  const clases = useClases();
  const value = props.value||'Todos';
  const options = clases_to_correct_format(clases);

 
  const child_to_parent = (child_data) => {
    child_data = child_data.label;
    props.func(child_data);
  };

  return (
    <>
        <label className="font-poppins text-sm ml-1 mb-2 font-thin">{label}</label>
        <Select options={options} onChange={child_to_parent} defaultValue={{value:0,label:value}}/>
    </>
  );
}