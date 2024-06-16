import {loadComponent} from './utils/loadComponent.js'

document.addEventListener("DOMContentLoaded", function () {
    // cargar los componentes
    loadComponent("header-placeholder", "../components/header.html");
    loadComponent("footer-placeholder", "../components/footer.html");
});