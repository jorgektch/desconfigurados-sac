from django.shortcuts import render

from .models import Categoria,Producto
# Create your views here.
"""VISTAS PARA EL CATALOGO DE PRODUCTOS"""
 

def index(request): # Vista para la pagina principal
    listaCategorias = Categoria.objects.all() # Obtener todas las categorias de la base de datos
    listaProductos = Producto.objects.all() # Obtener todos los productos de la base de datos
   # listaCategorias = Categoria.objets.all()
    # Crear un diccionario con los productos porque la plantilla espera un diccionario  
   
    context={
        'productos':listaProductos, #enviando un diccionario con primarea clave productos cuyo valor tiene un listado que vien dela DB
        'categorias':listaCategorias #enviando un diccionario con primarea clave categorias cuyo valor tiene un listado que vien dela DB
    }
    return render(request, 'index.html',context)    # Mostrar para comprobar las plantillas

def productosPorCategoria(request,categoria_id):
    """ vista para filtrar productos por categoria """
    objCategoria = Categoria.objects.get(pk=categoria_id) # Obtener la categoria por su id
    listaProductos = objCategoria.producto_set.all() # Obtener listado productos de la categoria

    listaCategorias = Categoria.objects.all() # Obtener todas las categorias de la base de datos

    context={  
        'productos':listaProductos, #enviando un diccionario con primarea clave productos cuyo valor tiene un listado que vien dela DB
        'categorias':listaCategorias #enviando un diccionario con primarea clave categorias cuyo valor tiene un listado que vien dela DB
    }

    return render(request, 'index.html',context)    # Mostrar para comprobar las plantillas

def productosPorNombre(request):
    #vendra de un formulario
    """ vista para filtrar productos por nombre """
    nombre = request.POST['nombre'] # Obtener el nombre del producto a buscar capturo
    listaProductos = Producto.objects.filter(nombre__contains=nombre) # Me trae todos los productos que contengan el nombre
    
    listaCategorias = Categoria.objects.all() # Obtener todas las categorias de la base de datos

    context={  
        'productos':listaProductos, #enviando un diccionario con primarea clave productos cuyo valor tiene un listado que vien dela DB
        'categorias':listaCategorias #enviando un diccionario con primarea clave categorias cuyo valor tiene un listado que vien dela DB
    }

    return render(request, 'index.html',context)    # Mostrar para comprobar las plantillas

