from django.contrib import admin

# Register your models here.
from .models import Categoria, Producto


admin.site.register(Categoria)
#admin.site.register(Producto)

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'categoria', 'imagen','fecha_registro') #que quiero que se muestre
    list_editable = ('precio',) #que se puede editar

