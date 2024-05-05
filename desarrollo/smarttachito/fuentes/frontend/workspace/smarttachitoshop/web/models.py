from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(auto_now_add=True) #autonow indica que se coloca la fecha automaticamente

   #este metodo ayuda cuando instancio un objeto de la clase categoria por defecto me devuelva el nombre
    def __str__(self) -> str:
        return self.nombre
    
class Producto(models.Model):
    #El foreingKey(clave foranea) se usa para relacionar una tabla con otra la relacion es de una a muchos
    #on_delete=models.RESTRICT cuando alguien borre categoria no le permita si tiene productos creados(Integridad referencial)
    categoria=models.ForeignKey(Categoria, on_delete=models.RESTRICT) # () significa hacia la clase categoria
    nombre=models.CharField(max_length=200) #Un campo charfield tiene 255 caract equivalente a varchar(255)
    #por defecto me permita nulos porque no pueden tener descripcion
    descripcion=models.TextField(null=True) #Un campo textfield es equivalente a un campo text en mysql + de 255 caracte
    precio = models.DecimalField(max_digits=9, decimal_places=2) #Un campo decimal es equivalente a un campo decimal en mysql
    fecha_registro = models.DateTimeField(auto_now_add=True) #autonow indica que se coloca la fecha automaticamente
    imagen = models.ImageField(upload_to='productos', blank=True) #Un campo imagefield es equivalente a un campo blob en mysql
    
    def __str__(self) -> str:
        return self.nombre