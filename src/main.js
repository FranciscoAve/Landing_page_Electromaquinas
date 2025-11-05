import './style.css'
import './js/footer.js'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const btnCatalogo = document.getElementById("btnCatalogo");
const btn_menu = document.getElementById("btn_desplegar_menu");
const menu_movil = document.getElementById("menu_movil");
//const contenido = document.createElement('div'); // contenedor dinámico
//document.body.appendChild(contenido);




btnCatalogo.addEventListener("click", () => {
  window.open("/pages/product_catalog.html", "_self");
});


btn_menu.addEventListener("click", () => {
  menu_movil.classList.toggle("btn-open");

  if (menu_movil.classList.contains("hidden")) {
    menu_movil.classList.remove("hidden");
    menu_movil.style.maxHeight = menu_movil.scrollHeight + "px"; // animación desplegable
  } else {
    menu_movil.style.maxHeight = "0px";
    setTimeout(() => menu_movil.classList.add("hidden"), 500); // coincide con duration-500
  }
});




