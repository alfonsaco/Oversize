window.addEventListener("DOMContentLoaded", function() {
    const contenedor=document.querySelector(".sugerencias-productos");
    contenedor.innerHTML='';
    let cant=contenedor.getAttribute("data-cantidad");
    let cont=0;
    const setProductos=new Set();

    // Se agregarán los productos que el contenedor en cuestión tenga especificado en su
    // atributo "data-cantidad"
    fetch("/Oversize/Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
        // ruta para local: ../Imágenes/Ropa/ropa.json
        do {
            cont++;
            let random=Math.floor((Math.random()*40)+1);
            // Usaré un while para evitar que haya sugerencias repetidas
            while(setProductos.has(random)) {
                random=Math.floor((Math.random()*40)+1);
            }

            setProductos.add(random);
            const producto=data.find(p => p.id == random);

            if(producto) {
                let contenido=`<div class="producto item-sugerencia">
                    <a href="/Páginas/compraProducto.html?id=${producto.id}">
                        <img src="${producto.ruta}" alt="${producto.descripcion}">
                        <h4 class="nombre-producto">${producto.nombre}</h4>
                        <p>${producto.precio}€</p>
                    <a>
                </div>`;
                contenedor.innerHTML+=contenido;
            }

        } while(cont < cant);        
    });
});