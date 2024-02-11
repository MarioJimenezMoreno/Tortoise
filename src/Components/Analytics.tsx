
import GraficoPastel from "./Analytics/GraficoPastel";
import GraficoBarras from "./Analytics/GraficoBarras";
import Categories from "./Analytics/Categorias";
import Header from "./Header";
import {Card, CardBody} from '@nextui-org/react'
/* const HTML = document.getElementById("html");
const ANCHO = HTML.offsetWidth;
const ALTO = HTML.offsetHeight;
HTML.style.width = "" + ANCHO + "px";
HTML.style.height = "" + ALTO + "px"; */

/*********-hace que el tamaño de fuente siempre sea visible-*********/

/* const FS = document.getElementsByClassName("fs");
const FS2 = document.getElementsByClassName("fs2");

for (let i = 0; i < FS.length; i++) {
  const fs_Style = window.getComputedStyle(FS[i])
  FS[i].style.fontSize = "" + fs_Style.fontSize + "";
  
}
for (let i = 0; i < FS2.length; i++) {
  const fs_Style = window.getComputedStyle(FS2[i])
  FS2[i].style.fontSize = "" + fs_Style.fontSize + "";
  
} */

//------------------------------------//
export default function Estadisticas() {
  return(
    <div className="min-h-screen">
    <Header/>
    
        <Card className="mb-4"><CardBody><Categories/></CardBody></Card>
        <div className="flex justify-between h-96 ">
          <Card className="w-2/3"><CardBody><GraficoBarras/></CardBody></Card>
          <Card className="ml-4 w-1/3"><CardBody><GraficoPastel/></CardBody></Card>
        </div>
                
      
  </div>
)
}