// Función para desplegar el buscador
const botonBuscador=document.getElementById('icono-buscar');
const buscador=document.getElementById('buscador-desplegar');

botonBuscador.addEventListener("click", function(e) {
    e.preventDefault();
    buscador.classList.toggle("mover-buscador");
});


// Función para desplegar el nav
const rayas=document.getElementById("header-barritas");
const nav=document.getElementById("nav-desplegable");
const fondoBlur=document.getElementById("efecto-oscurecer-nav");

rayas.addEventListener("click", function() {
    nav.classList.toggle("mostrar-nav");

    if(fondoBlur.style.visibility == 'visible') {
        fondoBlur.style.visibility='hidden';
        fondoBlur.style.opacity='0';
    } else {
        fondoBlur.style.visibility='visible';
        fondoBlur.style.opacity='1';
    }
});