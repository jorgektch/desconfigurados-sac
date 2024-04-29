from django.db import models
from django.contrib.auth.models import AbstractUser

class Categoria(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    descripcion = models.CharField("Descripción", max_length=500)
    imagen = models.ImageField("Imagen", upload_to="imagen/")
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

class Producto(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    descripcionBreve = models.CharField("Descripción breve", max_length=100)
    descripcionExtendida = models.CharField("Descripción extendida", max_length=500)
    precio = models.DecimalField("Precio", max_digits=10 , decimal_places=2)
    imagenPrincipal = models.ImageField("Imagen principal", upload_to="imagen/")
    imagenSecundaria1 = models.ImageField("Imagen secundaria 1", upload_to="imagen/")
    imagenSecundaria2 = models.ImageField("Imagen secundaria 2", upload_to="imagen/")
    imagenSecundaria3 = models.ImageField("Imagen secundaria 3", upload_to="imagen/")
    imagen3D = models.ImageField("Imagen 3D", upload_to="imagen/")
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, verbose_name="Categoría")
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

class TipoDocumento(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    descripcion = models.CharField("Descripción", max_length=500)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Tipo de documento"
        verbose_name_plural = "Tipos de documento"

class Usuario(AbstractBaseUser):
    #tipoDocumento = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE, verbose_name="Tipo de documento")
    
    def __str__(self):
        return self._meta.fields.name
    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

class Cliente(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"

class Cargo(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    descripcion = models.CharField("Descripción", max_length=500)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Cargo"
        verbose_name_plural = "Cargos"

class CargoEmpleado(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "CargoEmpleado"
        verbose_name_plural = "CargoEmpleados"

class Residuo(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    descripcion = models.CharField("Descripción", max_length=500)
    imagen = models.ImageField("Imagen", upload_to="imagen/")
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Residuo"
        verbose_name_plural = "Residuos"

class ProductoServicio(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "ProductoServicio"
        verbose_name_plural = "ProductoServicios"

class Pais(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Pais"
        verbose_name_plural = "Paises"

class Ciudad(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Ciudad"
        verbose_name_plural = "Ciudades"

class Direccion(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Direccion"
        verbose_name_plural = "Direcciones"

class Entrega(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Entrega"
        verbose_name_plural = "Entregas"

class Pago(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Pago"
        verbose_name_plural = "Pagos"

class Pedido(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Pedido"
        verbose_name_plural = "Pedidos"

class DetallePedido(models.Model):
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "DetallePedido"
        verbose_name_plural = "DetallePedidos"