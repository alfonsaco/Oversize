const texto=document.querySelector(".cambiar-tema p");
const boton=document.querySelector(".boton-cambiar-tema");
const bola=document.querySelector(".boton-cambiar-tema > div");

let valor=true;

boton.addEventListener("click", function() {
    bola.classList.toggle("mover-bola");
    boton.classList.toggle("cambiar-color");
    if(valor==true) {
        texto.textContent="Modo claro";
        valor=false;
    } else {
        texto.textContent="Modo oscuro";
        valor=true;
    }
    document.body.classList.toggle("dark-mode");
});