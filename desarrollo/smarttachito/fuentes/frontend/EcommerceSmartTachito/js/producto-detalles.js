document.addEventListener("DOMContentloaded", function() {

    const productoId = new URLSearchParams(window.location.search).get('id');
    fetch('../data/productos.json')
        .then(response => response.json())
	    .then(data => {
            const producto = data.productos.find(p => p.id === productoId);
            if (producto) {
                cargarDetallesProducto(producto);
            } else {
                console.error("Prodcuto no encontrado");
            }
        })
        .catch(error => console.error("Error al cargar el producto: ", error));

    function cargarDetallesProducto(producto) {
        document.getElementById('imagen-principal').src = producto.imagenPrincipal;
        document.getElementById('titulo-producto').textContent = producto.titulo;
        document.getElementById('descripcion-producto').textConten = producto.descripcion;
        document.getElementById('precio-producto').textContent = producto.precio;
        
        // cargar medidas
        const medidasList = document.getElementById('medidas-prodcuto');
        medidasList.innerHTML = '';
        producto.medidas.forEach(medida => {
            const li = document.createElement('li');
            li.classList.add('producto-detalles__medida-item');
            li.textContent = medida;
            medidasList.appendChild(li);
        });
        
        // cargar iconos de contenedores
        
        const contenedoresDiv = document.getElementById('contenedores-producto');
        contenedoresDiv.innerHTML = '';
        producto.contenedores.forEach(contenedor => {
            const icon = document.createElement('i');
            icon.classList.add('producto-detalles__icono', contenedor.icono);
            contenedoresDiv.appendChild(icon);
        });
        
        // cargar imágenes secundarias
        const contenedorImagenesSecundarias = document.getElementById('imagenes-secundarias');
        contenedorImagenesSecundarias.innerHTML = '';
        producto.imagenesSecundarias.forEach(pathImagen => {
            const elementoImg = document.createElement('img');
            elementoImg.classList.add('producto-imagenes__imagen-secundaria');
            elementoImg.src = pathImagen;
            elementoImg.alt = producto.titulo;
            contenedorImagenesSecundarias.appendChild(elementoImg);
        });
    }
});
	
