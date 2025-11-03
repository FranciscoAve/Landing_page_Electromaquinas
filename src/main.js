import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const btnCatalogo = document.getElementById("btnCatalogo");
//const footer = document.createElement("div"); aqui podemos agregar el footer dinamicamente espero
//const contenido = document.createElement('div'); // contenedor dinámico
//document.body.appendChild(contenido);




btnCatalogo.addEventListener("click", () => {
  window.open("/pages/product_catalog.html", "_self");
});



