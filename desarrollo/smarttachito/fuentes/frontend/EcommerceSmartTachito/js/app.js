import { loadComponent } from './utils/loadComponents.js';

const loadContentIfNotLoad = async (sectionId) => {
	const sectionE = document.getElementById(sectionId);

	if (!sectionE.classList.contains('loaded')) {
		const contentPath = sectionE.dataset.contentPath;
		await loadComponent(sectionId, contentPath)
		
		await loadAllScriptInSection(sectionE);

		sectionE.classList.add('loaded');
	}
}

const loadAllScriptInSection = async (sectionE) => {
	console.log(sectionE)
	console.log(sectionE.querySelectorAll('script'));
	sectionE.querySelectorAll('script').forEach(script => {
		const newScript = document.createElement('script');
		newScript.src = script.src;
		newScript.type = script.type || 'text/javascript';
		document.body.appendChild(newScript);
	});
}

document.addEventListener("DOMContentLoaded", async function () {
	// cargar header y footer
	await loadComponent("header-placeholder", "./html/components/header.html")
	await loadComponent("footer-placeholder", "./html/components/footer.html");
	await loadComponent("landing-seccion", "./html/landing.html");

	// Manejador de click para la navegación en el header
	document.getElementById('header-placeholder').addEventListener('click', async (event) => {
		console.log(event.target.tagName);
		if (event.target.tagName === 'A' && event.target.dataset.section) {
			console.log('click');
			event.preventDefault();

			const sectionId = event.target.dataset.section;
			const section = document.getElementById(sectionId);

			await loadContentIfNotLoad(sectionId);

			section.scrollIntoView({ behavior: 'smooth' });
		}
	});

	// Manejar la carga de contenido dinámico basado en el scroll
	window.addEventListener('scroll', async () => {
		const sections = document.querySelectorAll('section');
		for ( const section of sections) {
			const rect = section.getBoundingClientRect();
			
			if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
				await loadContentIfNotLoad(section.id);
			}
		}
	});
	
});

