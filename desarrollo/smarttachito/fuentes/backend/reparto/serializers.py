from rest_framework import serializers
from .models import *

class UbicacionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ubicacion
        fields = ['ciudad', 'direccion', 'referencia', 'codigo_postal', 'latitud', 'longitud']

class EntregaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Entrega
        fields = ['ubicacion', 'empleado', 'fechahora_entrega', 'detalles_entrega', 'estado_entrega']
