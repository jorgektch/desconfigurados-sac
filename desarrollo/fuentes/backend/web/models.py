from django.db import models

class Categoria(models.Model):
    nombre = models.CharField("Nombre", max_length=100)
    descripcion = models.CharField("Descripción", max_length=500)
    imagem = models.ImageField("Imagen reportada", upload_to="frames/")
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"