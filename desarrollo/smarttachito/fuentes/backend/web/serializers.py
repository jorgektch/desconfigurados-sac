from rest_framework import serializers
from django.contrib.auth.models import Group, User
from .models import *

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
        lookup_field = 'usuario'

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'