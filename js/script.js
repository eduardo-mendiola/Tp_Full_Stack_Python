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









var theToggle = document.querySelector('.menu-toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}



