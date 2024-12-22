window.addEventListener("DOMContentLoaded", function() {
    const contenedorRopa=document.querySelector(".carrusel-productos");

    contenedorRopa.innerHTML="";
    
    fetch("./Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
        data.forEach(producto => {
            if(producto.carrusel) {
                contenido=`<div class="producto">
                    <a href="#">
                        <img src="${producto.ruta}" alt="">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.descripcion}</p>
                        <p>${producto.precio}€</p>
                    <a>
                </div>`;
                contenedorRopa.innerHTML+=contenido;
            }
        });
    }).catch(error => console.error("No se pudieron cargar los productos. ERROR: "+error));

});