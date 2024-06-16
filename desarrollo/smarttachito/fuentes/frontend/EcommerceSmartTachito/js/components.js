document.addEventListener("DOMContentLoaded", function () {
    // Funcion para cargar  un componente html
    function loadComponent(elementId, url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network responde was not ok.");
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation: ', error);
            });
    }

    // cargar los componentes
    loadComponent("header-placeholder", "../components/header.html");
    loadComponent("footer-placeholder", "../components/footer.html");
});