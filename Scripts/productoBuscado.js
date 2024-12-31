// Contenido del HTML de la búsqueda realizada
window.addEventListener("DOMContentLoaded", function() {
    const URL=new URLSearchParams(window.location.search);
    const resultado=URL.get('busqueda');    

    fetch("/Oversize/Imágenes/Ropa/ropa.json").then(response => response.json()).then(data => {
        // Buscamos el producto en cuestión dentro del JSON, lo filtramos
        const producto=data.filter(p => p.nombre.toLowerCase().includes(resultado.toLowerCase()));
        const contenedor=document.querySelector(".contenedor-productos");

        // Si hay existen productos, se agregan
        if(producto.length > 0) {
            document.querySelector(".busqueda-realizada").textContent=`Mostrando resultados para "${resultado}":`;
            document.head.querySelector("title").textContent=`Oversize Studios - Buscar "${resultado}"`;

            producto.forEach(producto => {
                let contenido=`<div class="producto">
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
                contenedor.innerHTML+=contenido;

            });

        } else {
            document.querySelector(".texto-no-hay-resultados").textContent=`No se ha encontrado ningún resultado para "${resultado}"`;
            document.head.querySelector("title").textContent=`Oversize Studios - Buscar "${resultado}"`;
            
            const texto=document.querySelector(".busqueda-realizada");
            texto.textContent=`Mostrando resultados para "${resultado}":`;
            texto.style.top='-190px';

            document.querySelector(".no-hay-resultados").style.display='flex';
        }
    });
    
});