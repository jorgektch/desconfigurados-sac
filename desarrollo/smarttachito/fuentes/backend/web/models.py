from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import Group
from django.contrib.auth.hashers import make_password

class Categoria(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    descripcion = models.CharField("Descripción", max_length = 500)
    imagen = models.ImageField("Imagen", upload_to = "imagen/")
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Categoria de productos"
        verbose_name_plural = "Categorias de productos"

class Producto(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    descripcion_breve = models.CharField("Descripción breve", max_length = 100)
    descripcion_extendida = models.CharField("Descripción extendida", max_length = 500)
    precio = models.DecimalField("Precio", max_digits=10 , decimal_places = 2)
    imagen_principal = models.ImageField("Imagen principal", upload_to = "imagen/")
    imagen_secundaria_1 = models.ImageField("Imagen secundaria 1", upload_to = "imagen/", blank = True, null = True)
    imagen_secundaria_2 = models.ImageField("Imagen secundaria 2", upload_to = "imagen/", blank = True, null = True)
    imagen_secundaria_3 = models.ImageField("Imagen secundaria 3", upload_to = "imagen/", blank = True, null = True)
    imagen_360 = models.ImageField("Imagen 360", upload_to = "imagen/", blank = True, null = True)
    categoria = models.ForeignKey(Categoria, on_delete = models.CASCADE, verbose_name = "Categoría")
    stock = models.IntegerField("Stock", blank = True, null = True)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

class TipoDocumento(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    descripcion = models.CharField("Descripción", max_length = 500)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Tipo de documento"
        verbose_name_plural = "Tipos de documento"

class UsuarioManager(BaseUserManager):
    def create_user(self, nombres, username, email, password = None):
        if not email:
            raise ValueError("El usuario debe registrar un correo electrónico")
        
        user = self.model(
            nombres = nombres,
            username = username,
            email = self.normalize_email(email),
            password = make_password(password, salt=None, hasher='default')
        )

        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, nombres, username, email, password):
        user = self.create_user(
            nombres = nombres,
            username = username,
            email = email,
            password = password
        )
        user.usuario_administrador = True
        user.save()
        return user

class Usuario(AbstractBaseUser):
    username = models.CharField("Nombre de usuario", max_length = 100, unique = True)
    email = models.EmailField("Correo electrónico", max_length = 254, unique = True)
    nombres = models.CharField("Nombres", max_length = 200)
    apellido_p = models.CharField("Apellido paterno", max_length = 200, blank = True, null = True)
    apellido_m = models.CharField("Apellido materno", max_length = 200, blank = True, null = True)
    tipo_documento = models.ForeignKey(TipoDocumento, on_delete = models.CASCADE, verbose_name = "Tipo de documento", null = True, blank = True)
    numero_documento = models.CharField("Número de documento", max_length=100, null=True, blank=True)
    celular = models.CharField("Celular", max_length = 20, blank = True, null = True)
    
    usuario_activo = models.BooleanField(default = True)
    usuario_administrador = models.BooleanField(default = False)
    objects = UsuarioManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "nombres"]
    
    def __str__(self):
        return f"{self.nombres} {self.apellido_p} {self.apellido_m}"

    def has_perm(self, perm, obj = None):
        return True
    
    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.usuario_administrador

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith(('pbkdf2_sha256$', 'bcrypt$', 'argon2')):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

class Cliente(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete = models.CASCADE, verbose_name = "Usuario asociado")
    fecha_registro = models.DateField("Fecha de registro", auto_now_add = True)
    def __str__(self):
        return self.usuario.username
    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"

"""
class Cargo(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    descripcion = models.CharField("Descripción", max_length = 500)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Cargo"
        verbose_name_plural = "Cargos"
"""
class Empleado(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete = models.CASCADE, verbose_name = "Usuario asociado")
    cargos = models.ManyToManyField(Group)
    #cargos = models.ManyToManyField(Cargo, through = 'AsignacionCargo')
    def __str__(self):
        return f"{self.usuario}"
        #return self.nombre
    class Meta:
        verbose_name = "Empleado"
        verbose_name_plural = "Empleados"
"""
class AsignacionCargo(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete = models.CASCADE, verbose_name = "Empleado")
    cargo = models.ForeignKey(Cargo, on_delete = models.CASCADE, verbose_name = "Cargo asignado")
    fecha_asignacion = models.DateField("Fecha de asignación", auto_now_add = True)
    def __str__(self):
        return f"{self.empleado} {self.cargo}"
    class Meta:
        verbose_name = "Asignación de cargo"
        verbose_name_plural = "Asignaciones de cargo"
"""
class Residuo(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    descripcion = models.CharField("Descripción", max_length = 500)
    imagen = models.ImageField("Imagen", upload_to = "imagen/")
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Residuo"
        verbose_name_plural = "Residuos"

class Contenedor(models.Model):
    producto = models.ForeignKey(Producto, on_delete = models.CASCADE, verbose_name = "Producto")
    residuo = models.ForeignKey(Residuo, on_delete = models.CASCADE, verbose_name = "Tipo de residuo que puede contener")
    def __str__(self):
        return f"{self.producto} {self.residuo}"
    class Meta:
        verbose_name = "Contenedor"
        verbose_name_plural = "Contenedores"

class Pais(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Pais"
        verbose_name_plural = "Paises"

class Ciudad(models.Model):
    pais = models.ForeignKey(Pais, on_delete = models.CASCADE, verbose_name = "País")
    nombre = models.CharField("Nombre", max_length = 100)
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "Ciudad"
        verbose_name_plural = "Ciudades"

class Ubicacion(models.Model):
    ciudad = models.ForeignKey(Ciudad, on_delete = models.CASCADE, verbose_name = "Ciudad")
    direccion = models.CharField("Dirección", max_length = 1000)
    referencia = models.CharField("Referencia", max_length = 500)
    codigo_postal = models.CharField("Código postal", max_length = 20)
    latitud = models.DecimalField("Latitud", max_digits = 12, decimal_places = 8)
    longitud = models.DecimalField("Longitud", max_digits = 12, decimal_places = 8)
    def __str__(self):
        return f"{self.ciudad} {self.direccion}"
    class Meta:
        verbose_name = "Ubicacion"
        verbose_name_plural = "Ubicaciones"

class EstadoEntrega(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    descripcion = models.CharField("Descripción", max_length = 500)
    def __str__(self):
        return f"{self.nombre}"
    class Meta:
        verbose_name = "Estado de la entrega"
        verbose_name_plural = "Estados de la entrega"

class Entrega(models.Model):
    ubicacion = models.ForeignKey(Ubicacion, on_delete = models.CASCADE, verbose_name = "Ubicación de entrega")
    empleado = models.ForeignKey(Empleado, on_delete = models.CASCADE,  blank = True, null = True, verbose_name = "Empleado asignado")
    fechahora_entrega = models.DateTimeField("Fecha y hora de entrega", auto_now_add = True)
    detalles_entrega = models.CharField("Anotaciones del encargado de la entrega", max_length = 1000, blank = True, null = True)
    estado_entrega = models.ForeignKey(EstadoEntrega, on_delete = models.CASCADE, verbose_name = "Estado de la entrega")
    def __str__(self):
        return f"{self.ubicacion} {self.empleado} {self.fechahora_entrega}"
        #return str(self.fecha_entrega)
    class Meta:
        verbose_name = "Entrega"
        verbose_name_plural = "Entregas"

class Pago(models.Model):
    monto = models.DecimalField("Monto total", max_digits = 16 , decimal_places = 2)
    fechahora_pago = models.DateTimeField("Fecha y hora de pago", auto_now_add = True)
    def __str__(self):
        return f"{self.fecha_pago} {self.monto}"
        #return str(self.fecha_pago)
    class Meta:
        verbose_name = "Pago"
        verbose_name_plural = "Pagos"

class EstadoOrden(models.Model):
    nombre = models.CharField("Nombre", max_length = 100)
    descripcion = models.CharField("Descripción", max_length = 500)
    def __str__(self):
        return f"{self.nombre}"
    class Meta:
        verbose_name = "Estado de la orden"
        verbose_name_plural = "Estados de la orden"

class Orden(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete = models.CASCADE, verbose_name = "Cliente")
    fechahora_orden = models.DateTimeField("Fecha y hora de registro del orden", auto_now_add = True)
    estado_orden = models.ForeignKey(EstadoOrden, on_delete = models.CASCADE, verbose_name = "Estado de la orden")
    entrega = models.ForeignKey(Entrega, on_delete = models.CASCADE, blank = True, null = True, verbose_name = "Entrega")
    pago = models.ForeignKey(Pago, on_delete = models.CASCADE, blank = True, null = True, verbose_name = "Pago")
    def __str__(self):
        return f"{self.cliente} {self.fechahora_orden}"
        #return str(self.fecha_pedido)
    class Meta:
        verbose_name = "Orden"
        verbose_name_plural = "Órdenes"

class DetalleOrden(models.Model):
    orden = models.ForeignKey(Orden, on_delete = models.CASCADE, verbose_name = "Orden")
    producto = models.ForeignKey(Producto, on_delete = models.CASCADE, verbose_name = "Producto")
    cantidad = models.IntegerField("Cantidad")
    def __str__(self):
        return f"{self.orden} {self.producto}"
        #return self.orden
    class Meta:
        verbose_name = "Detalle orden"
        verbose_name_plural = "Detalles orden"