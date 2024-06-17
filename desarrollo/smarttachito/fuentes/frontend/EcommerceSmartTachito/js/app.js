import { loadComponent } from './utils/loadComponents.js';

document.addEventListener("DOMContentLoaded", function () {
	// cargar header y footer
	loadComponent("header-placeholder", "../html/components/header.html")
        .then(() => {
			// Configurar navegación después de cargar el header
			setupNavigation();
		});

	loadComponent("footer-placeholder", "../html/components/footer.html");

	// cargar contenido inicial
	loadComponent('contenido-principal', "../html/landing.html");
});

function setupNavigation() {
	document.addEventListener('click', function (event) {
		const target = event.target;

		// verificar si se a clikcleado un elemento a (enlace)
		if (target.matches('a')) {
			// Prevenir la navegación predeterminada
			event.preventDefault();

			// obtener la URL del enlace
			const url = target.getAttribute('href');

			// cargar el contenido correspondiente en el <main>
			loadComponent('contenido-principal', url);

			// cambiar la url en la barra de direcciones sin recargar la página
			history.pushState(null, '', url);
		}
	});
}

window.addEventListener('popstate', function () {
	// cargar el contenido de la URL actual
	loadComponent('contenido-principal', location.pathname);
});
