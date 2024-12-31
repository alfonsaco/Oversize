// Función para desplegar el buscador
const botonBuscador=document.getElementById('icono-buscar');
const divBuscador=document.getElementById('buscador-desplegar');
const botonBorrar=document.getElementById("borrar-busqueda");
const buscador=document.getElementById("buscador");

// Borrar el contenido del buscador
botonBorrar.addEventListener("click", function() {
    buscador.value='';
});
botonBuscador.addEventListener("click", function(e) {
    e.preventDefault();
    divBuscador.classList.toggle("mover-buscador");
});


// Función para desplegar el nav
const rayas=document.getElementById("header-barritas");
const nav=document.getElementById("nav-desplegable");
const fondoBlur=document.getElementById("efecto-oscurecer-nav");

fondoBlur.addEventListener("click", function() {
    nav.classList.toggle("mostrar-nav");

    fondoBlur.style.visibility='hidden';
        fondoBlur.style.opacity='0';
});

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