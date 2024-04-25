from django.contrib import admin

from .models import *

class CategoriaAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Categoria._meta.fields]
    ordering = ('nombre',)

class ProductoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Producto._meta.fields]
    ordering = ('nombre',)

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)