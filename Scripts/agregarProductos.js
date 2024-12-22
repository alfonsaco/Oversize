window.addEventListener("DOMContentLoaded", function () {
    const contenedorRopa=document.querySelector(".contenedor-productos");
    // Variable para coger el tipo de producto
    const tipoProducto=contenedorRopa.getAttribute("data-tipo");

    contenedorRopa.innerHTML="";

    fetch("../Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {

        // Filtrar los productos, y seleccionar el producto necesario para cada página
        const tipoDeProducto=data.filter(producto => producto.tipo == tipoProducto);
        tipoDeProducto.forEach(producto => {        
            contenido=`<div class="producto">
                    <a href="#">
                        <img src="${producto.ruta}" alt="">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.descripcion}</p>
                        <p>${producto.precio}€</p>
                    <a>
                </div>`;
            contenedorRopa.innerHTML+=contenido;
        });
    }).catch(error => console.error("No se pudieron cargar los productos. ERROR: "+error));

});