document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const nombre = document.getElementById("nombre");
    let colorIndex = 0;
    const coloresVerdes = ["#0f3d0f", "#1f7a1f", "#2ea62e", "#57c757", "#85e085"];
    
    setInterval(() => {
        nombre.style.color = coloresVerdes[colorIndex];
        colorIndex = (colorIndex + 1) % coloresVerdes.length;
    }, 1000);
    
    nombre.addEventListener("mouseenter", function() {
        this.style.opacity = "0.5";
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
    
    const proyectos = document.querySelectorAll(".proyecto");
    
    proyectos.forEach((proyecto) => {
        proyecto.addEventListener("mouseover", () => {
            proyecto.style.transform = "scale(1.05)";
        });
        
        proyecto.addEventListener("mouseout", () => {
            proyecto.style.transform = "scale(1)";
        });
    });

    const fotoPerfil = document.querySelector(".foto-perfil");
    fotoPerfil.style.opacity = "0";
    fotoPerfil.style.transform = "translateY(20px)";
    setTimeout(() => {
        fotoPerfil.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        fotoPerfil.style.opacity = "1";
        fotoPerfil.style.transform = "translateY(0)";
    }, 500);
});
