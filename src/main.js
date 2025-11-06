import './style.css'
import './js/footer.js'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const btnCatalogo = document.getElementById("btnCatalogo");

const btn__desplegar_menu = document.getElementById("btn_desplegar_menu");
const menu_movil = document.getElementById("menu_movil");

const lineas = btn__desplegar_menu.querySelectorAll("span");
const enlacesMenu = menu_movil.querySelectorAll("a");
//const contenido = document.createElement('div'); // contenedor dinámico
//document.body.appendChild(contenido);



btnCatalogo.addEventListener("click", () => {
  window.open("/pages/product_catalog.html", "_self");
});


function toggleMenu(){
  if (menu_movil.style.maxHeight && menu_movil.style.maxHeight !== "0px") {
    menu_movil.style.maxHeight = "0"; // colapsa suavemente
    menu_movil.classList.add("opacity-0", "pointer-events-none");
    lineas[0].classList.remove("rotate-45", "translate-y-[7px]");
    lineas[1].classList.remove("opacity-0");
    lineas[2].classList.remove("-rotate-45", "-translate-y-[7px]");
  } else {
    menu_movil.style.maxHeight = menu_movil.scrollHeight + "px"; // expande suavemente
    menu_movil.classList.remove("opacity-0", "pointer-events-none");
    lineas[0].classList.add("rotate-45", "translate-y-[7px]");
    lineas[1].classList.add("opacity-0");
    lineas[2].classList.add("-rotate-45", "-translate-y-[7px]");
  }
}


btn__desplegar_menu.addEventListener("click", toggleMenu);


enlacesMenu.forEach(enlace =>{
  enlace.addEventListener("click", ()=>{
    menu_movil.style.maxHeight = "0";
    menu_movil.classList.add("opacity-0", "pointer-events-none");
    lineas[0].classList.remove("rotate-45", "translate-y-[7px]");
    lineas[1].classList.remove("opacity-0");
    lineas[2].classList.remove("-rotate-45", "-translate-y-[7px]");
  });

});


