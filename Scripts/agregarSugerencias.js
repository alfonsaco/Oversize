window.addEventListener("DOMContentLoaded", function() {
    const contenedor=document.querySelector(".sugerencias-productos");
    contenedor.innerHTML='';
    let cant=contenedor.getAttribute("data-cantidad");
    let cont=0;

    // Se agregarán los productos que el contenedor en cuestión tenga especificado en su
    // atributo "data-cantidad"
    fetch("../Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
        do {
            cont++;
            let random=Math.floor((Math.random()*40)+1);
            const producto=data.find(p => p.id == random);

            if(producto) {
                let contenido=`<div class="producto">
                    <a href="compraProducto.html?id=${producto.id}">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <img src="${producto.ruta}" alt="${producto.descripcion}">
                        <h4 class="nombre-producto">${producto.nombre}</h4>
                        <div class="productos-datos">
                            <p>${producto.precio}€</p>
                            <div style="background: ${producto.color};" class="producto-color"></div>
                        </div>
                    <a>
                </div>`;
                contenedor.innerHTML+=contenido;
            }

        } while(cont < cant);        
    });

});