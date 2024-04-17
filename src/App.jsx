import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Random from "./Random";

export default function App() {
  const [fact, setFact] = useState({});
  const [number, setNumber] = useState(0);
  const [countries, setCountries] = useState([]);
  const [colors, setColors] = useState([
    "modra",
    "rumena",
    "rdeca",
    "zelena",
    "oranzna",
  ]);

  async function getRandomFact() {
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    setFact(data);
  }
  async function getNumberFact(number) {
    const response = await fetch("http://numbersapi.com/" + number + "?json");
    const data = await response.json();
    setFact(data);
  }

  async function getCountries() {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,border,region",
    );
    const data = await response.json();
    setCountries(data);
  }

  https: useEffect(() => {
    getRandomFact();
    getCountries();
  }, []);

  useEffect(() => {
    getNumberFact(number);
  }, [number]);

  return (
    <>
      <div className="contanier">
        <h1>Tukaj smo</h1>

        {countries
          .filter((country) => country.region == "Asia")
          .map((country) => (
            <p>{country.name.common}</p>
          ))}
        {colors.map((c) => (
          <p>{c}</p>
        ))}

        <Input
          placeholder="Vnesi število, ki te zanima ..."
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        ></Input>
        <Random fact={fact}></Random>
      </div>
    </>
  );
}
