import { loadComponent } from './utils/loadComponents.js';

const loadContentIfNotLoad = (sectionId, sectionE) => {
	if (!sectionE.classList.contains('loaded')) {
		const contentPath = sectionE.dataset.contentPath;
		loadComponent(sectionId, contentPath);
		sectionE.classList.add('loaded');
	}
}


document.addEventListener("DOMContentLoaded", function () {
	// cargar header y footer
	loadComponent("header-placeholder", "./html/components/header.html")
	loadComponent("footer-placeholder", "./html/components/footer.html");
	loadComponent("landing-seccion", "./html/landing.html");

	// Manejador de click para la navegación en el header
	document.getElementById('header-placeholder').addEventListener('click', (event) => {
		console.log(event.target.tagName);
		if (event.target.tagName === 'A' && event.target.dataset.section) {
			console.log('click');
			event.preventDefault();

			const sectionId = event.target.dataset.section;
			const sectionElement = document.getElementById(sectionId);

			loadContentIfNotLoad(sectionId, sectionElement);

			sectionElement.scrollIntoView({ behavior: 'smooth' });
		}
	});

	// Manejar la carga de contenido dinámico basado en el scroll
	window.addEventListener('scroll', () => {
		const sections = document.querySelectorAll('section');
		sections.forEach(section => {
			const rect = section.getBoundingClientRect();
			
			if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
				loadContentIfNotLoad(section.id, section);
			}
		})
	});
	
});

