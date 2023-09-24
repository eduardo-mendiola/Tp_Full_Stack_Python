const elementosMenu = document.querySelectorAll('.menu__link');
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






