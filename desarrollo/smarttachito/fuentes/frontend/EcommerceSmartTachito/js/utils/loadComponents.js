export function loadComponent(elementId, url) {
    return fetch(url)
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
