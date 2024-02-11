// //------------------------------------//
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// // Definir la interfaz para los elementos en RESPUESTA_1
// interface RespuestaItem {
//   username: string;
//   date: number;
//   name: string;
//   duration: number;
//   color_code: string;
// }

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const RESPUESTA_1: RespuestaItem[] = [
//   {
//     username: "Quim",
//     date: -1,
//     name: "Vídeo",
//     duration: 6,
//     color_code: "#74dfa2",
//   },
//   {
//     username: "Quim",
//     date: -1,
//     name: "Juego",
//     duration: 1,
//     color_code: "#f871a0",
//   },
//   {
//     username: "Quim",
//     date: -1,
//     name: "Estudio",
//     duration: 14,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -1,
//     name: "Estudio",
//     duration: 12,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -1,
//     name: "Sport",
//     duration: 5,
//     color_code: "#66aaf9",
//   },
//   {
//     username: "Quim",
//     date: -2,
//     name: "Vídeo",
//     duration: 7,
//     color_code: "#74dfa2",
//   },
//   {
//     username: "Quim",
//     date: -2,
//     name: "Juego",
//     duration: 3,
//     color_code: "#f871a0",
//   },
//   {
//     username: "Quim",
//     date: -2,
//     name: "Estudio",
//     duration: 15,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -2,
//     name: "Sport",
//     duration: 4,
//     color_code: "#66aaf9",
//   },
//   {
//     username: "Quim",
//     date: -3,
//     name: "Vídeo",
//     duration: 8,
//     color_code: "#74dfa2",
//   },
//   {
//     username: "Quim",
//     date: -3,
//     name: "Juego",
//     duration: 5,
//     color_code: "#f871a0",
//   },
//   {
//     username: "Quim",
//     date: -3,
//     name: "Estudio",
//     duration: 10,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -3,
//     name: "Sport",
//     duration: 3,
//     color_code: "#66aaf9",
//   },
//   {
//     username: "Quim",
//     date: -4,
//     name: "Vídeo",
//     duration: 5,
//     color_code: "#74dfa2",
//   },
//   {
//     username: "Quim",
//     date: -4,
//     name: "Juego",
//     duration: 6,
//     color_code: "#f871a0",
//   },
//   {
//     username: "Quim",
//     date: -4,
//     name: "Estudio",
//     duration: 9,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -4,
//     name: "Sport",
//     duration: 6,
//     color_code: "#66aaf9",
//   },
//   {
//     username: "Quim",
//     date: -5,
//     name: "Vídeo",
//     duration: 9,
//     color_code: "#74dfa2",
//   },
//   {
//     username: "Quim",
//     date: -5,
//     name: "Juego",
//     duration: 7,
//     color_code: "#f871a0",
//   },
//   {
//     username: "Quim",
//     date: -5,
//     name: "Estudio",
//     duration: 11,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -5,
//     name: "Sport",
//     duration: 2,
//     color_code: "#66aaf9",
//   },
//   {
//     username: "Quim",
//     date: -6,
//     name: "Vídeo",
//     duration: 3,
//     color_code: "#74dfa2",
//   },
//   {
//     username: "Quim",
//     date: -6,
//     name: "Juego",
//     duration: 8,
//     color_code: "#f871a0",
//   },
//   {
//     username: "Quim",
//     date: -6,
//     name: "Estudio",
//     duration: 8,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -6,
//     name: "Sport",
//     duration: 7,
//     color_code: "#66aaf9",
//   },
//   {
//     username: "Quim",
//     date: -7,
//     name: "Vídeo",
//     duration: 2,
//     color_code: "#74dfa2",
//   },
//   {
//     username: "Quim",
//     date: -7,
//     name: "Juego",
//     duration: 6,
//     color_code: "#f871a0",
//   },
//   {
//     username: "Quim",
//     date: -7,
//     name: "Estudio",
//     duration: 15,
//     color_code: "#f9c97c",
//   },
//   {
//     username: "Quim",
//     date: -7,
//     name: "Sport",
//     duration: 3,
//     color_code: "#66aaf9",
//   },
// ];

// //------------------------------------//

// // para el grafico de BARRAS
// let resultado: RespuestaItem[] = RESPUESTA_1.reduce(function (
//   acumulador,
//   elemento
// ) {
//   let elementoExistente = acumulador.find(function (item) {
//     return item.date === elemento.date && item.name === elemento.name;
//   });

//   if (elementoExistente) {
//     elementoExistente.duration += elemento.duration;
//   } else {
//     acumulador.push(elemento);
//   }

//   return acumulador;
// },
// []);

// //------------------------------------//

// // Obtener un objeto con días únicos
// const diasUnicos: number[] = [...new Set(resultado.map((item) => item.date))];

// // Preparar un objeto para los datos del gráfico
// export const data = {
//   labels: diasUnicos.map((date) => `Día ${date}`),
//   datasets: resultado.reduce((datasets, item) => {
//     const datasetIndex = datasets.findIndex((ds) => ds.label === item.name);
//     if (datasetIndex !== -1) {
//       datasets[datasetIndex].data.push(item.duration);
//       datasets[datasetIndex].backgroundColor.push(item.color_code);
//     } else {
//       datasets.push({
//         label: item.name,
//         data: [item.duration],
//         backgroundColor: [item.color_code],
//       });
//     }
//     return datasets;
//   }, [] as { label: string; data: number[]; backgroundColor: string[] }[]),
// };

// // Configuración del gráfico
// export const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       labels: {
//         color: undefined,
//       },
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       ticks: {
//         color: undefined, // Cambiar color del eje Y
//       },
//       grid: {
//         /* color: "#000" // Cambiar color de la grilla */
//       },
//     },
//     y: {
//       stacked: true,
//       beginAtZero: true,
//       max: 24,

//       ticks: {
//         stepSize: 6,
//         color: undefined, // Cambiar color del eje Y
//       },
//       grid: {
//         /* color: "#000" // Cambiar color de la grilla */
//       },
//     },
//   },
// };

// function GraficoBarras() {
//   return (
//     <div>
//       <Bar options={options} data={data} height={340} />
//     </div>
//   );
// }

// export default GraficoBarras;Juego

//------------------------------------//
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { DataElement, RespuestaItem } from "../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const hardcodedResponse = [
  {
    username: "Quim",
    date: -1,
    name: "Vídeo",
    duration: 6,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -1,
    name: "Juego",
    duration: 1,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -1,
    name: "Estudio",
    duration: 3,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -1,
    name: "Estudio",
    duration: 5,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -1,
    name: "Sport",
    duration: 5,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -2,
    name: "Vídeo",
    duration: 3,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -2,
    name: "Juego",
    duration: 3,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -2,
    name: "Estudio",
    duration: 6,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -2,
    name: "Sport",
    duration: 4,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -3,
    name: "Vídeo",
    duration: 3,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -3,
    name: "Juego",
    duration: 5,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -3,
    name: "Estudio",
    duration: 6,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -3,
    name: "Sport",
    duration: 3,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -4,
    name: "Vídeo",
    duration: 5,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -4,
    name: "Juego",
    duration: 6,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -4,
    name: "Estudio",
    duration: 4,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -4,
    name: "Sport",
    duration: 2,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -5,
    name: "Vídeo",
    duration: 4,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -5,
    name: "Juego",
    duration: 7,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -5,
    name: "Estudio",
    duration: 3,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -5,
    name: "Sport",
    duration: 2,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -6,
    name: "Vídeo",
    duration: 3,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -6,
    name: "Juego",
    duration: 2,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -6,
    name: "Estudio",
    duration: 8,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -6,
    name: "Sport",
    duration: 4,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -7,
    name: "Vídeo",
    duration: 2,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -7,
    name: "Juego",
    duration: 6,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -7,
    name: "Estudio",
    duration: 5,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -7,
    name: "Sport",
    duration: 3,
    color_code: "#66aaf9",
  },
];

function GraficoBarras() {
  const [tasks, setTasks] = useState<DataElement[]>([]);
  const fetchTasks = () => {
    axios
      .get("http://localhost:8080/api/stats", {
        params: {
          // Aquí tus parámetros de consulta
          username: "QUIM", //MODIFICAR
        },
      })
      .then((response) => {
        // Manejar la respuesta del servidor
        console.log("Respuesta:", response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error:", error);
        setTasks(hardcodedResponse);
      });
  };

  let resultado: RespuestaItem[] = tasks.reduce(function (
    acumulador,
    elemento
  ) {
    let elementoExistente = acumulador.find(function (item) {
      return item.date === elemento.date && item.name === elemento.name;
    });

    if (elementoExistente) {
      elementoExistente.duration += elemento.duration;
    } else {
      acumulador.push(elemento);
    }

    return acumulador;
  },
  []);

  //------------------------------------//

  // Obtener un objeto con días únicos
  const diasUnicos: number[] = [...new Set(resultado.map((item) => item.date))];

  // Preparar un objeto para los datos del gráfico
  const data = {
    labels: diasUnicos.map((date) => `Día ${date}`),
    datasets: resultado.reduce((datasets, item) => {
      const datasetIndex = datasets.findIndex((ds) => ds.label === item.name);
      if (datasetIndex !== -1) {
        datasets[datasetIndex].data.push(item.duration);
        datasets[datasetIndex].backgroundColor.push(item.color_code);
      } else {
        datasets.push({
          label: item.name,
          data: [item.duration],
          backgroundColor: [item.color_code],
        });
      }
      return datasets;
    }, [] as { label: string; data: number[]; backgroundColor: string[] }[]),
  };

  // Configuración del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#fff", // Cambiar color del eje Y
        },
        grid: {
          /* color: "#000" // Cambiar color de la grilla */
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 24,

        ticks: {
          stepSize: 6,
          color: "#fff", // Cambiar color del eje Y
        },
        grid: {
          /* color: "#000" // Cambiar color de la grilla */
        },
      },
    },
  };

  useEffect(() => {
    setTasks([]);
    fetchTasks();
  }, []);

  return (
    <div>
      <Bar options={options} data={data} height={340} />
    </div>
  );
}

export default GraficoBarras;
