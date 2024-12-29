// Función que utilizaré para agregar los productos de forma automática. Utiliza el JSON,
// que contiene los datos de cada producto. Según el tipo de producto, se agregará en un
// HTML u en otro.

window.addEventListener("DOMContentLoaded", function () {
    const contenedorRopa=document.querySelector(".contenedor-productos");
    // Variable para coger el tipo de producto
    const tipoProducto=contenedorRopa.getAttribute("data-tipo");

    contenedorRopa.innerHTML="";

    // RUTA LOCAL: "../Imágenes/Ropa/ropa.json"
    fetch("/Oversize/Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {

        if(tipoProducto != "todo") {
            // Filtrar los productos, y seleccionar el producto necesario para cada página
            const tipoDeProducto=data.filter(producto => producto.tipo == tipoProducto);
            tipoDeProducto.forEach(producto => {    
                /* RUTAS PARA LOCAL:
                         a: "../Páginas/compraProducto.html?id=${producto.id}"
                         img: ${producto.ruta}
                */       
                contenido=`<div class="producto">
                                <a href="/Oversize/Páginas/compraProducto.html?id=${producto.id}">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-heart"></i>
                                    <img src="/Oversize/${producto.ruta}" alt="${producto.descripcion}">
                                    <h4 class="nombre-producto">${producto.nombre}</h4>
                                    <div class="productos-datos">
                                        <p>${producto.precio}€</p>
                                        <div style="background: ${producto.color};" class="producto-color"></div>
                                    </div>
                                <a>
                            </div>`;
                contenedorRopa.innerHTML+=contenido;
            });
        } else {
            data.forEach(producto => {
                /* RUTAS PARA LOCAL:
                         a: "../Páginas/compraProducto.html?id=${producto.id}"
                         img: ${producto.ruta}
                */   
                contenido=`<div class="producto">
                                <a href="/Oversize/Páginas/compraProducto.html?id=${producto.id}">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-heart"></i>
                                    <img src="/Oversize/${producto.ruta}" alt="${producto.descripcion}">
                                    <h4 class="nombre-producto">${producto.nombre}</h4>
                                    <div class="productos-datos">
                                        <p>${producto.precio}€</p>
                                        <div style="background: ${producto.color};" class="producto-color"></div>
                                    </div>
                                <a>
                            </div>`;
                contenedorRopa.innerHTML+=contenido;
            });
        }

    }).catch(error => console.error("No se pudieron cargar los productos. ERROR: "+error));

    // Función corazón
    const corazon=document.querySelectorAll("fa-heart");
    corazon.forEach(cora => {
        cora.addEventListener("click", function() {
            if(cora.hasAttribute("fa-solid")) {
                cora.style.dispay="none";
            }
        });
    });
});