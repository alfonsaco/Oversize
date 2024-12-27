window.addEventListener("DOMContentLoaded", function() {
    const contenedor=document.querySelector(".sugerencias-productos");
    contenedor.innerHTML='';
    let cant=contenedor.getAttribute("data-cantidad");
    let cont=0;
    const setProductos=new Set();

    // Se agregarán los productos que el contenedor en cuestión tenga especificado en su
    // atributo "data-cantidad"
    fetch("../Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
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
                    <a href="compraProducto.html?id=${producto.id}">
                        <img src="${producto.ruta}" alt="${producto.descripcion}">
                        <h4 class="nombre-producto">${producto.nombre}</h4>
                        <p>${producto.precio}€</p>
                    <a>
                </div>`;
                contenedor.innerHTML+=contenido;
            }

        } while(cont < cant);        
    });


    // Función de carrusel
    /*
    const botonIzq=this.document.querySelector(".boton-izq");
    const botonDcho=this.document.querySelector(".boton-dcha");
    const productosContenedor=document.querySelectorAll(".item-sugerencia");

    botonIzq.addEventListener("click", function() {
        productosContenedor.forEach(div => {
            div.style.transform="translateX(-100%)";
        });
    });

    botonDcho.addEventListener("click", function() {
        productosContenedor.forEach(div => {
            div.style.transform="translateX(100%)";
        });
    });
    */
});