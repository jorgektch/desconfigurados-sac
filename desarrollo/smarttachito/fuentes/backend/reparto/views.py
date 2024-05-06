from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from .models import *
from rest_framework.permissions import AllowAny

class UbicacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = Ubicacion.objects.all()
    serializer_class = UbicacionSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['ciudad'] # Nuevo API filter

class EntregaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Universities to be viewed or edited.
    """
    queryset = Entrega.objects.all()
    serializer_class = EntregaSerializer
    permission_classes = [AllowAny]  # Cambiamos IsAuthenticated por AllowAny
    filterset_fields = ['ubicacion'] # Nuevo API filter
