from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from .models import *
from rest_framework.permissions import AllowAny

class ClienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['usuario'] # Nuevo API filter

class PagoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['fechahora_pago'] # Nuevo API filter

class OrdenViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = Orden.objects.all()
    serializer_class = OrdenSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['fechahora_orden'] # Nuevo API filter

class DetalleOrdenViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = DetalleOrden.objects.all()
    serializer_class = DetalleOrdenSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['orden'] # Nuevo API filter
