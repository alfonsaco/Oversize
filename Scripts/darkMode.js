window.addEventListener("DOMContentLoaded", function() {
    const texto=document.querySelector(".cambiar-tema p");
    const boton=document.querySelector(".boton-cambiar-tema");
    const bola=document.querySelector(".boton-cambiar-tema > div");

    let textoBoton=true;

        boton.addEventListener("click", function() {
            // Animación del botón y agregar los estilos
            bola.classList.toggle("mover-bola");
            boton.classList.toggle("cambiar-color");
            if(textoBoton==true) {
                texto.textContent="Modo claro";
                textoBoton=false;
            } else {
                texto.textContent="Modo oscuro";
                textoBoton=true;
            }
            document.body.classList.toggle("dark-mode");
            // Condiciones para el localStorage
            if(document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode","enabled");
            } else {
                localStorage.setItem("darkMode","disabled");
            }
        });
    
    // Función para que se guarden las preferencias del usuario cuando hayan activado el modo oscuro
    if(localStorage.getItem("darkMode") == "enabled"){
        bola.classList.add("mover-bola");
        boton.classList.add("cambiar-color");
        document.body.classList.add("dark-mode");
        texto.textContent="Modo claro";
        textoBoton=false;
    }
});