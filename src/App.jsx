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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Vaja from "./Vaja";

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

  const [landlocked, setLandlocked] = useState(true);

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
      "https://restcountries.com/v3.1/all?fields=name,flag,borders,region,flags,landlocked",
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
      <div className="container">
        <h3> izbrana regija: {region} </h3>
        <div className="grid grid-cols-3 gap-2">
          <Card>
            <CardHeader>
              <CardTitle>Regija</CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={(x) => setRegion(x)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="regija" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">vse regije</SelectItem>
                  <SelectItem value="Europe">Europa</SelectItem>
                  <SelectItem value="Asia">Azija</SelectItem>
                  <SelectItem value="Africa">Afrika</SelectItem>
                  <SelectItem value="Americas">Amerika</SelectItem>
                  <SelectItem value="Oceania">Oceanija</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Država nima morja</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <Carousel>
          <CarouselContent>
            {countries
              .filter((country) => region == "all" || country.region == region)
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
