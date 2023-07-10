export default function AddButton(props) {
  return (
    <div className="grid justify-items-center text-center">
      <div
        className="w-10 min-w-md m-10 p-[10px] 
      rounded-xl bg-zinc-900 text-white 
      hover:cursor-pointer drop-shadow-none hover:drop-shadow-3xl"
        onClick={props.onClick}
      >
        +
      </div>
    </div>
  );
}
