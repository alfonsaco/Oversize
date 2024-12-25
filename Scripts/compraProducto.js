window.addEventListener("DOMContentLoaded", function() {
    // Para obtener el contenido después del ? del href="" del producto (JS agregarProductos.js)
    // Cone sto, obtenemos los detalles del producto mediante su ID
    const URL=new URLSearchParams(window.location.search);
    const idProducto=URL.get('id');    
    
    fetch("../Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
        // Buscamos el producto en cuestión dentro del JSON
        const producto=data.find(p => p.id === Number(idProducto));

        // Pondremos los datos edl producto en el HTML compraProducto.html
        // También cambiaré el título
        if(producto) {
            document.getElementById("nombre-producto-compra").textContent=producto.nombre;
            document.getElementById("imagen-producto-compra").src=producto.ruta;
            document.querySelector("title").textContent="Oversize Studios - "+producto.nombre;
            document.getElementById("descripcion-producto-compra").textContent=producto.descripcion;
            document.getElementById("detalles-producto-compra").innerHTML=producto.detalles;
            document.getElementById("precio-producto-compra").textContent=producto.precio+'€';
        }
    });


    // Estilos para los botones de las tallas
    const divs=document.querySelectorAll(".tallas div");

    divs.forEach(div => {    
        div.addEventListener("click", function() {
            divs.forEach(d => {
                d.style.borderColor='#cccccc';
            });

            div.style.borderColor='#000';
        });
    });
});