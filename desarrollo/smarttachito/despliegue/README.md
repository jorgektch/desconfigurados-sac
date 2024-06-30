# Documentación de Despliegue en DigitalOcean de un Aplicativo en Django

 ## 1. **Introducción** 

### Descripción breve del propósito del documento
 Este documento tiene como propósito proporcionar una guía detallada para el despliegue de una aplicación Django en DigitalOcean utilizando su App Platform. El objetivo principal es exponer los endpoints de la API a un frontend, gestionando también la parte de archivos estáticos. 

### Resumen del proyecto
 El proyecto es una aplicación Django que utiliza Django REST Framework para exponer endpoints RESTful. La aplicación administra información de usuarios, ventas y productos, obtenida de una base de datos. Estas APIs serán consumidas por un frontend para operaciones como registro de usuarios, gestión de ventas y visualización de productos. 

## 2. **Requerimientos Previos**

 ### Listado de herramientas y configuraciones necesarias 
 - Una cuenta en DigitalOcean. - Acceso al repositorio del proyecto (por ejemplo, GitHub). - Docker (si se va a usar para contenedores). ### Credenciales necesarias para el despliegue - Claves SSH para acceder a los servidores de DigitalOcean. - API Token de DigitalOcean. 

## 3. **Configuración del Entorno Local** 
### Instrucciones para clonar el repositorio 
```sh git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git) cd tu-repositorio ``` 
### Configuración del entorno virtual
 ```sh python3 -m venv venv source venv/bin/activate ``` 
 ### Instalación de dependencias con
  `pip` ```sh pip install -r requirements.txt ``` 
### Configuración de las variables de entorno necesarias 
Crear un archivo `.env` con las siguientes variables:
 ``` DATABASE_URL=postgres://usuario:contraseña@localhost:5432/dbname SECRET_KEY=tu_secreto DEBUG=True ALLOWED_HOSTS=localhost, 127.0.0.1 ``` 

## 4. **Configuración de DigitalOcean** 

### Creación de una nueva App Platform en DigitalOcean 

1. Ingresar a DigitalOcean y navegar a App Platform. 

2. Crear una nueva aplicación seleccionando "GitHub" como fuente del repositorio. 

3. Seleccionar el repositorio y la rama a desplegar. 

4. Configurar los detalles de la aplicación incluyendo el nombre, región y tamaño de la máquina: - Región: Elige la más cercana a tus usuarios. - Tamaño de la máquina: $5.00/mo, 512 MB RAM | 1 vCPU | 50 GB bandwidth. 

5. Continuar y crear la aplicación.

 ### Adición del repositorio Git 

6. Vincular la cuenta de GitHub/Bitbucket. 

7. Seleccionar el repositorio y rama adecuados para el despliegue. 

### Configuraciones iniciales para la aplicación 

1. Establece las variables de entorno previamente configuradas en local. 

2. Configura el adaptador de Gunicorn: 
``` gunicorn --worker-tmp-dir /dev/shm backend.wsgi ``` 

## 5. **Configuración del Recurso para Archivos Estáticos** 

### Descripción del recurso creado específicamente para archivos estáticos

 Se ha creado un recurso separado en DigitalOcean App Platform para manejar los archivos estáticos. ### Configuración del recurso en la plataforma DigitalOcean 1. Añadir un recurso "Static Site" a la misma App Platform. 2. Configurar el directorio de salida como `staticfiles`. ### Configurar las variables de entorno en Django para usar este recurso Añadir al 
 `settings.py`: 
 ```python STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles') STATIC_URL = '/static/' ``` 

## 6. **Despliegue de la Aplicación** 

### Pasos para desplegar la aplicación desde la plataforma DigitalOcean 
1. Desde el dashboard de DigitalOcean, navegar a tu aplicación. 

2. Desplegar la aplicación con las configuraciones previas. 

3. Configurar `main.py` (si es necesario). 

### Configuración del archivo `settings.py` para la base de datos en producción
 Asegúrate de tener las configuraciones adecuadas para producción:
  ```python 


DEBUG = False
ALLOWED_HOSTS = ['tu-dominio.com']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

  ``` 


## 7. **Verificación del Despliegue**

 ### Cómo acceder a la aplicación para verificar que todo está funcionando correctamente 

1. Navega a la URL proporcionada por DigitalOcean. 

2. Asegúrate de que la página de inicio de tu aplicación carga correctamente. 

### Verificación de los endpoints desde el frontend 

1. Utiliza herramientas como Postman para verificar que los endpoints funcionan. 

2. Asegúrate de que el frontend puede consumir los servicios. 

### Pruebas básicas de funcionalidad 

1. Registro de usuarios. 

2. Creación de ventas. 

3. Visualización de productos. 

## 8. **Mantenimiento y Actualizaciones** 

### Cómo realizar actualizaciones del código en producción

 1. Realizar cambios en tu repositorio. 

2. Las actualizaciones se desplegarán automáticamente si se configuran los webhooks en GitHub. 

### Gestión de logs 

1. Consultar los logs desde el dashboard de DigitalOcean. 

2. Configurar un sistema de logging más robusto si es necesario. 

### Procesos de rollback en caso de falla en el despliegue 

1. Desde el dashboard de DigitalOcean, revertir a una versión anterior del despliegue. 

## 9. **Solución de Problemas Comunes** 

### FAQ de problemas comunes y cómo resolverlos 

1. **Errores 500**: Revisar los logs para detalles. 

2. **Problemas con archivos estáticos**:
 Asegúrate de que la configuración de `STATIC_ROOT` y `STATIC_URL` son correctas.

3. **Errores de conexión a base de datos**: Verificar las variables de entorno. 

### Recursos adicionales para soporte en DigitalOcean
 - [Documentación de App Platform]([https://docs.digitalocean.com/products/app-platform/](https://docs.digitalocean.com/products/app-platform/)) - [Soporte en la comunidad de DigitalOcean]([https://www.digitalocean.com/community](https://www.digitalocean.com/community)) 
 - ## 10. **Referencias y Recursos** 

### Documentación oficial de Django 
- [Documentación Django]([https://docs.djangoproject.com/en/stable/](https://docs.djangoproject.com/en/stable/)) 

### Enlaces a guías y documentación de DigitalOcean 
- [Guía de Despliegue en DigitalOcean]([https://www.digitalocean.com/docs/app-platform/how-to/deploy-django/](https://www.digitalocean.com/docs/app-platform/how-to/deploy-django/)) ### Cualquier otro recurso adicional útil - [Documentación de Django REST Framework]([https://www.django-rest-framework.org/](https://www.django-rest-framework.org/)) 

