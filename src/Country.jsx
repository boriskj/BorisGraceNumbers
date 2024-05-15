import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Country(props) {
  const { flag, name, flags, capital } = props.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {flag}
          {name.common}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img src={flags.png}></img>
      </CardContent>
      <CardFooter>
        <div>
          <p>glavno mesto</p>
          <ul>
            {capital.map((c) => {
              c;
            })}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
}
