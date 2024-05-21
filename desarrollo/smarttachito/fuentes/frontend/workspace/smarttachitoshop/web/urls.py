
from django.urls import path

from . import views  #from . significa que importame el archivo views

app_name = 'web' #esto para ubicar los enlaces, indicarle en que apliacion esta

#urlpatters es la lista de las rutas
urlpatterns = [
    path('', views.index,name='index'), #significa que cuando se entre a la raiz de la pagina, se ejecute la funcion index
    path ('productosPorCategoria/<int:categoria_id>/',views.productosPorCategoria,name='productosPorCategoria'),
    path ('productosPorNombre/',views.productosPorNombre,name='productosPorNombre')
] 
