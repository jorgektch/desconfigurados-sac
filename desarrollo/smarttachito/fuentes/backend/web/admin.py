from django.contrib import admin
from .models import *

class CategoriaAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Categoria._meta.fields]
    ordering = ('nombre',)

class ProductoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Producto._meta.fields]
    ordering = ('nombre',)

class TipoDocumentoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in TipoDocumento._meta.fields]
    ordering = ('nombre',)

class UsuarioAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Usuario._meta.fields]
    ordering = ('username',)

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(TipoDocumento, TipoDocumentoAdmin)
admin.site.register(Usuario, UsuarioAdmin)