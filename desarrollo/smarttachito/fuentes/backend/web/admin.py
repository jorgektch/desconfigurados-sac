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

class AsignacionCargoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in AsignacionCargo._meta.fields]
    ordering = ('empleado', 'cargo',)

class ResiduoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Residuo._meta.fields]
    ordering = ('nombre',)

class ContenedorAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Contenedor._meta.fields]
    ordering = ('producto', 'residuo',)

class PaisAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Pais._meta.fields]
    ordering = ('nombre',)

class CiudadAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Ciudad._meta.fields]
    ordering = ('nombre',)

class UbicacionAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Ubicacion._meta.fields]
    ordering = ('ciudad', 'direccion',)

class EstadoEntregaAdmin(admin.ModelAdmin):
    list_display = [field.name for field in EstadoEntrega._meta.fields]
    ordering = ('nombre',)

class EntregaAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Entrega._meta.fields]
    ordering = ('ubicacion', 'empleado', 'fecha_entrega',)

class PagoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Pago._meta.fields]
    ordering = ('fecha_pago', 'monto',)

class EstadoOrdenAdmin(admin.ModelAdmin):
    list_display = [field.name for field in EstadoOrden._meta.fields]
    ordering = ('nombre',)

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(TipoDocumento, TipoDocumentoAdmin)
admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Cargo, CargoAdmin)
admin.site.register(Empleado, EmpleadoAdmin)
admin.site.register(AsignacionCargo, AsignacionCargoAdmin)
admin.site.register(Residuo, ResiduoAdmin)
admin.site.register(Contenedor, ContenedorAdmin)
admin.site.register(Pais, PaisAdmin)
admin.site.register(Ciudad, CiudadAdmin)
admin.site.register(Ubicacion, UbicacionAdmin)
admin.site.register(EstadoEntrega, EstadoEntregaAdmin)
admin.site.register(Entrega, EntregaAdmin)
admin.site.register(Pago, PagoAdmin)
admin.site.register(EstadoOrden, EstadoOrdenAdmin)