export function loadComponent(elementId, url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById(elementId).innerHtml = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation: ', error);
    });
}