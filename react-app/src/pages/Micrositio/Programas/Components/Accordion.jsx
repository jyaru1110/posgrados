import { useState } from "react";
export default function Accordion({ header, children, style, arrowColor}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${style} py-6 px-8 h-auto rounded-lg transition-all flex flex-col`}
    >
      <div
        className={`cursor-pointer flex items-center justify-between w-full`}
        onClick={() => setOpen(!open)}
      >
        {header}
        <svg className={`rotate-180 transition-transform ${open && "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" width="17.572" height="9.599" viewBox="0 0 17.572 9.599">
          <path d="M3040.993,122.59l-7.485,7.671,7.485,8.544" transform="translate(139.464 -3032.146) rotate(90)" fill="none" stroke={arrowColor} stroke-width="2"/>
        </svg>
      </div>
      {open && <div className="mt-5 h-auto space-y-4">{children}</div>}
    </div>
  );
}
