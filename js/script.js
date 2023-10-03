const elementosMenu = document.querySelectorAll('.menu-desktop__link');
const opciones = document.querySelectorAll('.options');

function mostrarOpciones(id) {
  opciones.forEach((opcion) => {
    if (opcion.id === id) {
      opcion.style.display = 'grid';
    } else {
      opcion.style.display = 'none';
    }
  });
}

function ocultarOpciones() {
  opciones.forEach((opcion) => {
    opcion.style.display = 'none';
  });
}

elementosMenu.forEach((elemento) => {
  elemento.addEventListener('mouseover', (event) => {
    const targetId = event.currentTarget.getAttribute('data-target');
    mostrarOpciones(targetId);
  });
});

opciones.forEach((opcion) => {
  opcion.addEventListener('mouseleave', () => {
    ocultarOpciones();
  });
});









// menu burger
const menuToggle = document.getElementById("menuToggle");
const navBurguer = document.getElementById("nav-burger");
const navDesktop = document.getElementById("nav-desktop");

menuToggle.addEventListener("click", () => {
    navBurguer.style.display = navBurguer.style.display === "block" ? "none" : "block";
});

// Lo mismo que mas arriba pero mas desarrollado
// menuToggle.addEventListener("click", () => {
//     // Toggle para mostrar u ocultar el menú hamburguesa cuando se hace clic en él
//     if (navBurguer.style.display === "flex") {
//         navBurguer.style.display = "none";
//     } else {
//         navBurguer.style.display = "flex";
//     }
// });

//fin

// cambio de nav

function toggleMenu() {
    if (window.innerWidth <= 910) {
        // Si la pantalla es pequeña, muestra el menú hamburguesa y oculta el menú normal
        navDesktop.style.display = "none";
        menuToggle.style.display = "flex";
    } else {
        // Si la pantalla es grande, muestra el menú normal y oculta el menú hamburguesa
        navDesktop.style.display = "flex";
        navBurguer.style.display = "none";
        menuToggle.style.display = "none";
        
    }
}

// Ejecuta la función al cargar la página y cuando cambia el tamaño de la ventana
toggleMenu();
window.addEventListener("resize", toggleMenu);


// fin


