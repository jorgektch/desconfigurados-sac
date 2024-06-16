import {loadComponent} from './utils/loadComponents.js'

document.addEventListener("DOMContentLoaded", function () {
    // cargar los componentes
    loadComponent("header-placeholder", "../html/components/header.html");
    loadComponent("footer-placeholder", "../html/components/footer.html");
});