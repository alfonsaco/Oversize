// Con este JS, creo un enlace para buscar el producto, al pulsar en el botón de búsqueda.
// El contenido del HTML de los resultados de búsqueda está en "productoBuscado.js"
window.addEventListener("DOMContentLoaded", function() {
    const botonBuscar=document.getElementById("buscador-boton");
    const buscador=document.getElementById("buscador");

    // Búsqueda
    botonBuscar.addEventListener("click", function(e) {
        // Para evitar que el <button> recargue la página, ya que su comportamiento
        // por defecto hace eso
        e.preventDefault();
        let busqueda=buscador.value;

        if(busqueda != "" && busqueda != null) {
            const enlaceClick=document.createElement("a");    
            enlaceClick.href=`Páginas/buscar.html?busqueda=${busqueda}`;
            enlaceClick.style.display="none";
            
            document.body.appendChild(enlaceClick);
            enlaceClick.click();
            document.body.removeChild(enlaceClick);
        }
    });
});