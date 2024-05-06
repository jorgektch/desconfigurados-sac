from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from .models import *
from rest_framework.permissions import AllowAny

class TipoDocumentoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = TipoDocumento.objects.all()
    serializer_class = TipoDocumentoSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['nombre'] # New API filter

class PaisViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = Pais.objects.all()
    serializer_class = PaisSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['nombre'] # New API filter

class CiudadViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['nombre'] # New API filter

class EstadoEntregaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = EstadoEntrega.objects.all()
    serializer_class = EstadoEntregaSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['nombre'] # New API filter

class EstadoOrdenViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = EstadoOrden.objects.all()
    serializer_class = EstadoOrdenSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['nombre'] # New API filter