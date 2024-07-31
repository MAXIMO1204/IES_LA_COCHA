function seleccionar(event) {
    // Prevenir el comportamiento por defecto del enlace
    event.preventDefault();

    // Obtener el ID del enlace que ha sido clickeado
    var id = event.target.getAttribute("href").substring(1);

    // Obtener la sección correspondiente
    var section = document.getElementById(id);

    // Hacer scroll a la sección correspondiente
    section.scrollIntoView({ behavior: "smooth" });
}

// Añadir evento de scroll para detectar la sección visible
document.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("#nav a");

    sections.forEach(function(section, index) {
        var top = section.offsetTop - 50; // Ajusta según el tamaño de tu menú fijo
        var bottom = top + section.clientHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(function(link) {
                link.style.color = ""; // Reinicia todos los colores
            });
            navLinks[index].style.color = "#c00606;" // Colorea el enlace activo
        }
    });
});
