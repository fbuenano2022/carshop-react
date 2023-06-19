from django import forms
from datetime import datetime
from car.models import  Clientes

class ClientesForm(forms.ModelForm):
    class Meta:
        model = Clientes
        fields = '__all__'