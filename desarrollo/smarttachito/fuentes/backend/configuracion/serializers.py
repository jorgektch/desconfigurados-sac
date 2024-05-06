from rest_framework import serializers
from .models import *

class TipoDocumentoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TipoDocumento
        fields = ['nombre', 'descripcion']

class PaisSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pais
        fields = ['nombre']

class CiudadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ciudad
        fields = ['pais', 'nombre']

class EstadoEntregaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EstadoEntrega
        fields = ['nombre', 'descripcion']

class EstadoOrdenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EstadoOrden
        fields = ['nombre', 'descripcion']
