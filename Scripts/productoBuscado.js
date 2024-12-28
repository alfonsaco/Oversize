// Contenido del HTML de la búsqueda realizada
window.addEventListener("DOMContentLoaded", function() {
    const URL=new URLSearchParams(window.location.search);
    const resultado=URL.get('busqueda');    

    fetch("../Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
        // Buscamos el producto en cuestión dentro del JSON, lo filtramos
        const producto=data.filter(p => p.nombre.toLowerCase().includes(resultado));
        const contenedor=document.querySelector(".contenedor-productos");

        // Si hay existen productos, se agregan
        if(producto.length > 0) {
            document.querySelector(".busqueda-realizada").textContent=`Mostrando resultados para "${resultado}"`;

            producto.forEach(producto => {
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

            }).catch(error => {
                console.error("Error al cargar los productos:", error);
                document.querySelector(".busqueda-realizada").textContent = `Hubo un error al realizar la búsqueda. Por favor, inténtalo de nuevo más tarde.`;
            });

        } else {
            document.querySelector(".busqueda-realizada").textContent=`No se ha encontrado ningún resultado para "${resultado}"`;
        }
    });
    
});