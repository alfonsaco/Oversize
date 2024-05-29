// Función para desplegar el buscador
const botonBuscador=document.getElementById('icono-buscar');
const buscador=document.getElementById('buscador-desplegar');

botonBuscador.addEventListener("click", function() {
    buscador.classList.toggle("mover-buscador");
});


// Función para desplegar el nav
const rayas=document.getElementById("header-barritas");
const nav=document.getElementById("nav-desplegable");

rayas.addEventListener("click", function() {
    nav.classList.toggle("mostrar-nav");
});