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
components.js

// document.addEventListener("DOMContentLoaded", () => {
//     loadHeader();
//     loadFooter();
// });

// const loadHeader = async () => {
//     try {
//         const response = await fetch('/html/header.html');
//         if (response.ok) {
//             const headerContent = await response.text();
//             document.getElementById('header-placeholder').innerHTML = headerContent;
//         } else {
//             console.error('Error al cargar el header');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };

// const loadFooter = async () => {
//     try {
//         const response = await fetch('/html/footer.html');
//         if (response.ok) {
//             const footerContent = await response.text();
//             document.getElementById('footer-placeholder').innerHTML = footerContent;
//         } else {
//             console.error('Error al cargar el footer');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };
