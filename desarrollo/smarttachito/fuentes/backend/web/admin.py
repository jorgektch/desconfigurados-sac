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

class ClienteAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Cliente._meta.fields]
    ordering = ('usuario',)

class CargoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Cargo._meta.fields]
    ordering = ('nombre',)

class EmpleadoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Empleado._meta.fields]
    ordering = ('usuario',)

class EmpleadoCargoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in EmpleadoCargo._meta.fields]
    ordering = ('empleado', 'cargo',)

class ResiduoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Residuo._meta.fields]
    ordering = ('nombre',)

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(TipoDocumento, TipoDocumentoAdmin)
admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Cargo, CargoAdmin)
admin.site.register(Empleado, EmpleadoAdmin)
admin.site.register(EmpleadoCargo, EmpleadoCargoAdmin)
admin.site.register(Residuo, ResiduoAdmin)