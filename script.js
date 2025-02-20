document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const nombre = document.getElementById("nombre");
    let colorIndex = 0;
    const coloresVerdes = ["#0f3d0f", "#1f7a1f", "#2ea62e", "#57c757", "#85e085"];
    
    setInterval(() => {
        nombre.style.color = coloresVerdes[colorIndex];
        colorIndex = (colorIndex + 1) % coloresVerdes.length;
    }, 1000);
    
    nombre.addEventListener("mousedown", function() {
        this.style.opacity = "0";
    });
    
    nombre.addEventListener("mouseup", function() {
        this.style.opacity = "1";
    });
    
    nombre.addEventListener("mouseenter", function() {
        this.style.opacity = "0";
    });
    
    nombre.addEventListener("mouseleave", function() {
        this.style.opacity = "1";
    });
    
    navLinks.forEach(link => {
        link.addEventListener("mousedown", function() {
            this.style.transform = "scale(1.2)";
        });
        
        link.addEventListener("mouseup", function() {
            this.style.transform = "scale(1)";
        });
    });
    
    const sobreImagen = document.querySelector(".foto-perfil");
    const sobreTexto = document.querySelector(".sobre-texto");
    
    function animarElemento(elemento) {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateX(-100%)";
        setTimeout(() => {
            elemento.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
            elemento.style.opacity = "1";
            elemento.style.transform = "translateX(0)";
        }, 500);
        
        elemento.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1) rotate(2deg)";
        });
        
        elemento.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1) rotate(0deg)";
        });
    }
    
    animarElemento(sobreImagen);
    animarElemento(sobreTexto);
});

document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById("nombre");
    const sobreTexto = document.querySelector(".sobre-texto");
    const fotoPerfil = document.querySelector(".foto-perfil");
    const proyectos = document.querySelectorAll(".proyecto");

    // Animación de nombre
    let colors = ["#57a773", "#3a7d44", "#064420"];
    let index = 0;
    setInterval(() => {
        nombre.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);

    nombre.addEventListener("mouseover", () => {
        nombre.style.opacity = "0";
    });

    nombre.addEventListener("mouseout", () => {
        nombre.style.opacity = "1";
    });

    // Animación de sobre mí
    setTimeout(() => {
        sobreTexto.style.opacity = "1";
        sobreTexto.style.transform = "translateX(0)";
        fotoPerfil.style.opacity = "1";
        fotoPerfil.style.transform = "translateX(0)";
    }, 500);

    // Interacción de las tarjetas de proyectos
    proyectos.forEach((proyecto, i) => {
        proyecto.addEventListener("mouseover", () => {
            proyecto.style.transform = "scale(1.1)";
        });
        
        proyecto.addEventListener("mouseout", () => {
            proyecto.style.transform = "scale(1)";
        });
    });
});
