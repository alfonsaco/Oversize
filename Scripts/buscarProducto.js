// Con este JS, creo un enlace para buscar el producto, al pulsar en el botón de búsqueda.
// El contenido del HTML de los resultados de búsqueda está en "productoBuscado.js"
window.addEventListener("DOMContentLoaded", function() {
    const botonBuscar=document.getElementById("buscador-boton");
    const buscador=document.getElementById("buscador");
    const form=document.querySelector("form");

    function realizarBusqueda() {
        let busqueda=buscador.value;

        if(busqueda != "" && busqueda != null) {
            const enlaceClick=document.createElement("a");    
            enlaceClick.href=`/Oversize/Páginas/buscar.html?busqueda=${busqueda}`;
            enlaceClick.style.display="none";
            
            document.body.appendChild(enlaceClick);
            enlaceClick.click();
            document.body.removeChild(enlaceClick);
        }
    }

    // Evita la recarga de la página, ya que el form tendrá este comportamiento por defecto
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        realizarBusqueda();
    });

    // Búsqueda
    botonBuscar.addEventListener("click", function(e) {
        realizarBusqueda();
    });

    botonBuscar.addEventListener("keypress", function(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            realizarBusqueda();
        }
    });
});