const botonBuscador=document.getElementById('icono-buscar');
const buscador=document.getElementById('buscador-desplegar');


botonBuscador.addEventListener("click", function() {
    buscador.classList.toggle("mover-buscador");
});