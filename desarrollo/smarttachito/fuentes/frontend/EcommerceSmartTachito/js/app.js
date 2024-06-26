import { loadComponent } from './utils/loadComponents.js';

const loadSection = async (section) => {
	const sectionE = section;
	const rect = sectionE.getBoundingClientRect();

	if (!sectionE.classList.contains('loaded') && rect.top >= 0 && rect.bottom <= window.innerHeight) {
		const contentPath = sectionE.dataset.contentPath;
		await loadComponent(sectionE.id, contentPath)
		
		await loadAllScriptInSection(sectionE);

		sectionE.classList.add('loaded');
	}
}

const loadSections = async () => {
	const sections = document.querySelectorAll('section');
	for (const section of sections) {
		await loadSection(section);
	}
}

const loadAllScriptInSection = async (sectionE) => {
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
	await loadSections();

	// Manejador de click para la navegación en el header
	document.getElementById('header-placeholder').addEventListener('click', async (event) => {
		
		if (event.target.tagName === 'A' && event.target.dataset.section) {
			event.preventDefault();

			const sectionId = event.target.dataset.section;
			const section = document.getElementById(sectionId);

			await loadSection(section);

			section.scrollIntoView({ behavior: 'smooth' });
		}
	});

	// Manejar la carga de contenido dinámico basado en el scroll
	window.addEventListener('scroll', async () => {
		await loadSections();
	});
	
});

