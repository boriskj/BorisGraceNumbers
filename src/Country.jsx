export default function Country(props) {
  const { flag, name } = props.data;
  return (
    <div>
      <p>
        {flag}
        {name.common}
      </p>
    </div>
  );
}
