import { loadComponent } from './utils/loadComponents.js';

const rutas = {
    "landing"  : "html/landing.html",
    "catalogo" : "html/catalogo.html",
    "novedades": "html/landing.html",
    "nosotros" : "html/landing.html",
    "contacto" : "html/landing.html",
    "inicio-sesion": "html/inicio-sesion.html",
    "registro": "html/registro.html",
    "carrito": "html/carrito.html"
}

document.addEventListener("DOMContentLoaded", function () {
	// cargar header y footer
	loadComponent("header-placeholder", "../html/components/header.html")
        .then(() => {
			// Configurar navegación después de cargar el header
			setupNavigation();
		});

	loadComponent("footer-placeholder", "../html/components/footer.html");

	// cargar contenido inicial
	loadComponent('contenido-principal', rutas['landing']);
});

function setupNavigation() {
	document.addEventListener('click', function (event) {
		const target = event.target.closest('a');

		// verificar si se a clikcleado un elemento a (enlace)
		if (target) {
			// Prevenir la navegación predeterminada
			event.preventDefault();

			// obtener la URL del enlace
			const page_name = target.getAttribute('href');

			const absoluteUrl = location.origin + '/' + page_name;
            console.log(absoluteUrl);

			// cargar el contenido correspondiente en el <main>
			loadComponent('contenido-principal', rutas[page_name]);
			// cambiar la url en la barra de direcciones sin recargar la página
			history.pushState(null, '', absoluteUrl);
		}
	});
}

// Evento para manejar cambios en el historial del navegador
window.addEventListener('popstate', function () {
    const path = location.pathname.replace(/^\/([^\/]*).*$/, '$1');
    loadComponent('contenido-principal', rutas[path]);
});