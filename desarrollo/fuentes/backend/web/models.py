from django.db import models

class Categoria(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    descripcion = models.CharField("Descripción", max_length=500)
    imagen = models.ImageField("Imagen", upload_to="imagen/")
    def __str__(self):
        return self.name
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
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"