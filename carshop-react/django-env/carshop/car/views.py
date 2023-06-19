from django.shortcuts import render,redirect
from .forms import ClientesForm
from django.http import JsonResponse

# Create your views here.
from django.http import JsonResponse

def crear_cliente(request):
    if request.method == 'POST':
        form = ClientesForm(request.POST)
        if form.is_valid():
            request.POST.get('Nombre_Cliente')
            
            form.save()
            return JsonResponse({'message': 'Cliente creado exitosamente'})
        else:
            return JsonResponse({'error': 'Error en los datos del formulario'})
    else:
        form = ClientesForm()
    return render(request, 'crear_cliente.html', {'form': form})
