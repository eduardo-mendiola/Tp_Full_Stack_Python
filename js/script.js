const elementosMenu = document.querySelectorAll('.menu-desktop__link');
const elementosMenuBurger = document.querySelectorAll('.menu-burger__link');
const opciones = document.querySelectorAll('.options');

console.log(elementosMenuBurger);

function mostrarOpciones(id) {
  opciones.forEach((opcion) => {
    if (opcion.id === id) {
      opcion.style.display = 'flex';
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

elementosMenuBurger.forEach((elemento) => {
  elemento.addEventListener('click', (event) => {
    const targetId = event.currentTarget.getAttribute('data-target');
    mostrarOpciones(targetId);
    console.log(targetId);
  });
});



opciones.forEach((opcion) => {
  opcion.addEventListener('mouseleave', () => {
    ocultarOpciones();
  });
});









// menu burger
const smallScreen = document.getElementById("smallScreen");
const largeScreen = document.getElementById("largeScreen");
const menuToggle = document.getElementById("menuToggle");
const navBurger = document.getElementById("navBurger");

menuToggle.addEventListener("click", () => {
    navBurger.style.display = navBurger.style.display === "flex" ? "none" : "flex";
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
    if (window.innerWidth <= 926) {
        // Si la pantalla es pequeña, muestra el menú hamburguesa y oculta el menú normal
        largeScreen.style.display = "none";
        smallScreen.style.display = "flex";
    } else {
        // Si la pantalla es grande, muestra el menú normal y oculta el menú hamburguesa
        largeScreen.style.display = "flex";
        smallScreen.style.display = "none";
        navBurger.style.display = "none";
        
    }
}

// Ejecuta la función al cargar la página y cuando cambia el tamaño de la ventana
toggleMenu();
window.addEventListener("resize", toggleMenu);


// fin


