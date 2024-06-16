// scripts/main.js

const contentContainer = document.getElementById('content-container');

const loadContent = async (page) => {
    let pageUrl;
    switch(page) {
        case 'landing':
            pageUrl = "/html/landing.html";
            break;
        case 'catalogo':
            pageUrl = '/html/catalogo.html';
            break;
        case 'novedades':
            pageUrl = '/html/novedades.html';
            break;
        case 'nosotros':
            pageUrl = '/html/nosotros.html';
            break;
        case 'contacto':
            pageUrl = '/html/contacto.html';
            break;
        default:
            pageUrl = '/html/catalogo.html';
            break;
    }
    
    try {
        const response = await fetch(pageUrl);
        if (!response.ok) {
            throw new Error('Error al cargar la página');
        }
        const content = await response.text();
        contentContainer.innerHTML = content;
    } catch (error) {
        contentContainer.innerHTML = '<p>Error al cargar el contenido.</p>';
        console.error('Error:', error);
    }
};

// Cargar la página de inicio por defecto
loadContent('home');
