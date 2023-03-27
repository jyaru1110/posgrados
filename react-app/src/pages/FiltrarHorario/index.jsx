import DropdownEscuelas from '../../components/form/DropdownEscuelas';
import DropdownDia from '../../components/form/DropdownDia';
import DropdowClase from '../../components/form/DropdownClase';
import Horas from '../../components/form/Horas';
import Fechas from '../../components/form/Fechas';
import { useState, useEffect } from 'react';

export default function FiltrarHorario() {
    const [escuela, setEscuela] = useState('');
    const [dia, setDia] = useState('');
    const [clase, setClase] = useState('');
    const [hora_inicio, setHoraInicio] = useState('');
    const [hora_fin, setHoraFin] = useState('');
    const [fecha_inicio, setFechaInicio] = useState('');
    const [fecha_fin, setFechaFin] = useState('');

    useEffect(() => {
      console.log(fecha_fin);
      console.log(fecha_inicio);
    }, [fecha_fin, fecha_inicio]);


    return (
      <div className="w-11/12 p-0">
        <DropdownEscuelas func = {setEscuela}/>
        <DropdowClase func = {setClase}/>
        <DropdownDia func = {setDia}/>
        <Horas setHoraFin = {setHoraFin} setHoraInicio = {setHoraInicio}/>
        <Fechas setFechaFin = {setFechaFin} setFechaInicio = {setFechaInicio}/>
      </div>
    );
  }