export default function Random(props) {
  const { text, number } = props.fact;
  return (
    <div className="flex items-center rounded-sm bg-cyan-500 p-1">
      <div className="drop-shadow-mda rounded-sm bg-sky-200 p-2 text-2xl">
        {number}
      </div>
      <div className="text-sm text-xl italic"> {text}</div>
    </div>
  );
}
