from rest_framework import serializers

from .models import *

class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Categoria
        fields = ['nombre', 'descripcion', 'imagen']

class ProductoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Producto
        fields = ['nombre', 'descripcion_breve', 'descripcion_extendida', 'precio', 'imagen_principal', 'imagen_secundaria_1', 'imagen_secundaria_2', 'imagen_secundaria_3', 'imagen_360', 'categoria', 'stock']

class ResiduoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Residuo
        fields = ['nombre', 'descripcion', 'imagen']

class ContenedorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contenedor
        fields = ['producto', 'residuo']
