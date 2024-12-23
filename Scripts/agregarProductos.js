// Función que utilizaré para agregar los productos de forma automática. Utiliza el JSON,
// que contiene los datos de cada producto. Según el tipo de producto, se agregará en un
// HTML u en otro.

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
                    <a href="compraProducto.html?id=${producto.id}">
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