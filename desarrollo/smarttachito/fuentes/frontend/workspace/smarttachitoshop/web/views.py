from django.shortcuts import render

from .models import Categoria,Producto
# Create your views here.
"""VISTAS PARA EL CATALOGO DE PRODUCTOS"""
 

def index(request): # Vista para la pagina principal
    listaProductos = Producto.objects.all() # Obtener todos los productos de la base de datos
    # Crear un diccionario con los productos porque la plantilla espera un diccionario  
    print(listaProductos)
    context={
        'productos':listaProductos #enviando un diccionario con primarea clave productos cuyo valor tiene un listado que vien dela DB
    }
    return render(request, 'index.html',context)    # Mostrar para comprobar las plantillas