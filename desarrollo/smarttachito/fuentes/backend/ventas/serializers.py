from rest_framework import serializers
from .models import *

class ClienteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cliente
        fields = ['usuario']

class PagoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pago
        fields = ['monto', 'fechahora_pago']

class OrdenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Orden
        fields = ['cliente', 'fechahora_orden', 'pago', 'entrega', 'estado_orden']

class DetalleOrdenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DetalleOrden
        fields = ['orden', 'producto', 'cantidad']
