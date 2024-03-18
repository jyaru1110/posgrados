export default function Form({ children, title }) {
  return (
    <form className="p-5 w-full bg-white rounded-lg border border-grayborder space-y-3">
      <input className="w-full font-bold text-2xl mb-4" defaultValue={title}></input>
      <div className="w-full grid grid-cols-8 gap-y-4">{children}</div>
    </form>
  );
}
