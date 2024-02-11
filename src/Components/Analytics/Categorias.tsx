/**/
import { FC } from "react";
import { Card } from "@nextui-org/react";

interface Task {
  username: string;
  name: string;
  duration: number;
  color_code: string;
}

const RESPUESTA_2: Task[] = [
  {
    username: "Quim",
    name: "Libre",
    duration: 10,
    color_code: "#FCD8D4",
  },
  {
    username: "Quim",
    name: "Libre",
    duration: 20,
    color_code: "#FCD8D4",
  },
  {
    username: "Quim",
    name: "Trabajo",
    duration: 36,
    color_code: "#FDF6F0",
  },
  {
    username: "Quim",
    name: "Trabajo",
    duration: 106,
    color_code: "#FDF6F0",
  },
  {
    username: "Quim",
    name: "Ocio",
    duration: 80,
    color_code: "#F8E2CF",
  },
  {
    username: "Quim",
    name: "Deporte",
    duration: 30,
    color_code: "#F5C6AA",
  },
];

// Reducción del array RESPUESTA_2
let resultado_2 = RESPUESTA_2.reduce(function (
  acumulador: Task[],
  elemento: Task
) {
  let elementoExistente = acumulador.find(function (item) {
    return item.name === elemento.name;
  });

  if (elementoExistente) {
    elementoExistente.duration += elemento.duration;
  } else {
    acumulador.push(elemento);
  }

  return acumulador;
},
[]);

// Ordenar el array resultado_2
function compararMayorMenor(a: Task, b: Task) {
  return b.duration - a.duration;
}
resultado_2.sort(compararMayorMenor);

const Categories: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <Card
        className="flex-grow p-4 font-bold text-xl text-center bg-danger-300"
        id="categoria_0"
      >
        {"Entertainment"}
        <br />
        {"50"} h
      </Card>
      <Card
        className="flex-grow p-4 ml-4 font-bold text-xl text-center bg-warning-300"
        id="categoria_1"
      >
        {"Work"}
        <br />
        {"40"} h
      </Card>
      <Card
        className="flex-grow p-4 ml-4 font-bold text-xl text-center bg-success-300"
        id="categoria_2"
      >
        {"Cook"}
        <br />
        {resultado_2[2].duration} h
      </Card>
      <Card
        className="flex-grow p-4 ml-4 font-bold text-xl text-center bg-primary-300"
        id="categoria_3"
      >
        {"Sport"}
        <br />
        {resultado_2[3].duration} h
      </Card>
    </div>
  );
};

export default Categories;

//
