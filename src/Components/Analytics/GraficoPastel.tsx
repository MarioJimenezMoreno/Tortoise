import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  Chart,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

interface DataElement {
  username: string;
  name: string;
  duration: number;
  color_code: string;
}
const RESPUESTA_2 = [
  {
    username: "Quim",
    name: "Sport",
    duration: 10,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    name: "Sport",
    duration: 20,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    name: "Work",
    duration: 10,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    name: "Work",
    duration: 30,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    name: "Entertainment",
    duration: 50,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    name: "Cook",
    duration: 30,
    color_code: "#66aaf9",
  },
];

// para el grafico de PASTEL Y CATEGORIA
let resultado_2 = RESPUESTA_2.reduce(function (
  acumulador: DataElement[],
  elemento
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

/*********-reorganiza el array de mayor a menor-*********/
function compararMayorMenor(a: DataElement, b: DataElement) {
  return b.duration - a.duration;
}
resultado_2.sort(compararMayorMenor);

// Datos para el gráfico
let color: string[] = [];
let dataset: number[] = [];
let categories: string[] = [];
resultado_2.forEach((element) => {
  color.push(element.color_code);
  dataset.push(element.duration);
  categories.push(element.name);
});

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
  }[];
}

export interface ChartOptions {
  scales: {
    y: LinearScale[];
  };
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      position: string;
      labels: {
        color: string;
      };
    };
  };
}

export const data: ChartData = {
  labels: categories,
  datasets: [
    {
      label: "Label",
      data: dataset,
      backgroundColor: color,
      borderColor: "#1B262C",
      borderWidth: 1,
    },
  ],
};

export const options: ChartOptions = {
  scales: {
    y: [
      {
        beginAtZero: true,
      },
    ],
  },
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: undefined,
      },
    },
  },
};

function GraficoPastel() {
  return <Doughnut data={data} options={options} height={340} />;
}

export default GraficoPastel;

// import { Doughnut } from "react-chartjs-2";
// import { ArcElement, Tooltip, Legend, Chart } from "chart.js";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { ChartData, ChartOptions, DataElement } from "../../types";
// import DarkModeToggle from "../Header/DarkModeToggle";

// Chart.register(ArcElement, Tooltip, Legend);

// const GraficoPastel = () => {
//   const [tasks, setTasks] = useState<DataElement[]>([]);
//   const [colors, setColors] = useState<string[]>([]);
//   const [datasets, setDatasets] = useState<number[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const body = document.body;
//   let backgroundColor;

//   const hardcodedResponse = [
//     {
//       username: "Quim",
//       name: "Libre",
//       duration: 10,
//       color_code: "#74dfa2",
//     },
//     {
//       username: "Quim",
//       name: "Libre",
//       duration: 20,
//       color_code: "#74dfa2",
//     },
//     {
//       username: "Quim",
//       name: "Trabajo",
//       duration: 36,
//       color_code: "#f9c97c",
//     },
//     {
//       username: "Quim",
//       name: "Trabajo",
//       duration: 106,
//       color_code: "#f9c97c",
//     },
//     {
//       username: "Quim",
//       name: "Ocio",
//       duration: 80,
//       color_code: "#f871a0",
//     },
//     {
//       username: "Quim",
//       name: "Deporte",
//       duration: 30,
//       color_code: "#66aaf9",
//     },
//   ];

//   function compararMayorMenor(a: DataElement, b: DataElement) {
//     return b.duration - a.duration;
//   }

//   let resultado = tasks.reduce(function (acumulador: DataElement[], elemento) {
//     let elementoExistente = acumulador.find(function (item) {
//       return item.name === elemento.name;
//     });

//     if (elementoExistente) {
//       elementoExistente.duration += elemento.duration;
//     } else {
//       acumulador.push(elemento);
//     }

//     return acumulador;
//   }, []);

//   resultado.sort(compararMayorMenor);

//   // Faltaría implementar setColors setDatasets setCategories
//   resultado.forEach((element) => {
//     colors.push(element.color_code);
//     datasets.push(element.duration);
//     categories.push(element.name);
//   });

//   const fetchTasks = () => {
//     axios
//       .get("http://localhost:8080/api/stats", {
//         params: {
//           // Aquí tus parámetros de consulta
//           username: "QUIM", //MODIFICAR
//         },
//       })
//       .then((response) => {
//         // Manejar la respuesta del servidor
//         console.log("Respuesta:", response.data);
//         setTasks(response.data);
//       })
//       .catch((error) => {
//         // Manejar errores
//         console.error("Error:", error);
//         setTasks(hardcodedResponse);
//         console.log("Hardcoded: " + tasks);
//       });
//   };

//   const changeGraphColors = () => {
//     if (body.classList.contains("dark")) {
//       backgroundColor = "#000";
//     } else if (body.classList.contains("light")) {
//       backgroundColor = "#fff";
//     } else {
//       backgroundColor = "#fff";
//     }
//   };

//   const data: ChartData = {
//     labels: categories,
//     datasets: [
//       {
//         label: "Label",
//         data: datasets,
//         backgroundColor: colors,
//         borderColor: "#1B262C",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options: ChartOptions = {
//     scales: {
//       y: [
//         {
//           beginAtZero: true, // no existe pero si funciona ok
//         },
//       ],
//     },
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       legend: {
//         position: "right",
//         labels: {
//           color: backgroundColor,
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     setTasks([]);
//     fetchTasks();
//     changeGraphColors();
//   }, [DarkModeToggle]);

//   return <Doughnut data={data} options={options} height={300} />;
// };

// export default GraficoPastel;
