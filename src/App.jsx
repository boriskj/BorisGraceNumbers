import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Random from "./Random";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Country from "./Country";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const [region, setRegion] = useState("Europe");

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
        <h3> izbrana regija: {region} </h3>
        <Select onValueChange={(x) => setRegion(x)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Regija" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Europe">Europa</SelectItem>
            <SelectItem value="Asia">Azija</SelectItem>
            <SelectItem value="Africa">Afrika</SelectItem>
            <SelectItem value="Americas">Amerika</SelectItem>
            <SelectItem value="Oceania">Oceanija</SelectItem>
          </SelectContent>
        </Select>

        <Carousel>
          <CarouselContent>
            {countries
              .filter((country) => country.region == region)
              .map((country) => (
                <CarouselItem className="basis-1/3">
                  <Country data={country}></Country>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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
