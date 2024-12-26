// Contenido del HTML de la búsqueda realizada
window.addEventListener("DOMContentLoaded", function() {
    const URL=new URLSearchParams(window.location.search);
    const resultado=URL.get('busqueda');    

    fetch("../Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
        // Buscamos el producto en cuestión dentro del JSON
        const producto=data.find(p => p.nombre.has(resultado));

        if(producto) {
            document.querySelector(".busqueda-realizada").textContent=`Mostrando resultados para "${resultado}"`;

        } else {
            document.querySelector(".busqueda-realizada").textContent=`No se ha encontrado ningún resultado para "${resultado}"`;
        }
    });
    
});