export default function Dropdown(props) {
    const { options, name, label, child_to_parent, value} = props;

    const handleChange = (e) => {
        child_to_parent(options[e.target.value].name);
    };

    return (
      <div className="flex flex-col">
        <label className="font-poppins text-sm ml-1 mb-2 font-thin" htmlFor={name}>{label}</label>
        <select className="font-poppins text-sm w-auto h-7 bg-primarylight text-gray1 rounded-md px-2.5 mb-4" onChange={handleChange}>
          {
            options == undefined ? <option>No hay opciones</option> :
            options.map(option => (
                <option key={option._id} value={option._id} selected={value==option.name}>
                  {option.name}
                </option>
            ))
          }
        </select>
      </div>
    );
  }