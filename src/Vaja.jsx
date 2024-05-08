import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Vaja() {
  const [number, setNumber] = useState(1);
  const [numbers, setNumbers] = useState([1, 2, 3]);
  return (
    <div>
      <p>
        vrednost za "number" je <strong>{number}</strong>
      </p>
      <p>seznam števila v "numbers": </p>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </div>
  );
}
