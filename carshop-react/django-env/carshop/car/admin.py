from django.contrib import admin
from .models import Clientes, Vehiculos, Servicios, DetalleServicios, MaestroTiposServicios, MaestroServicios

admin.site.register(Clientes)
admin.site.register(Vehiculos)
admin.site.register(Servicios)
admin.site.register(DetalleServicios)
admin.site.register(MaestroTiposServicios)
admin.site.register(MaestroServicios)

# Register your models here.
class ClientesAdmin(admin.ModelAdmin):
    list_display = ('Id_Cliente','Nombre_Cliente','Email','telefono','Identificacion','Tipo_Identificacion')
    ordering = ('Id_Cliente', 'Nombre_Cliente', )    
    verbose_name_plural = "Administracion de Artistas"
    list_filter=list_display
    list_display_links = list_display

class VehiculosAdmin(admin.ModelAdmin):
    list_display = ('Id_Vehiculo','Id_Cliente','Marca','Modelo','Placa','Nivel_Combustible','Detalles_vehiculo')
    ordering = ('Id_Vehiculo', 'Marca', 'Modelo')    
    verbose_name_plural = "Administracion de Artistas"
    list_filter=list_display
    list_display_links = list_display

class ServiciosAdmin(admin.ModelAdmin):
    list_display = ('Id_Servicio','Id_Vehiculo','Fecha_Inicio_Trabajo','Fecha_Fin_Trabajo','Estado_Servicio')
    ordering = ('Id_Servicio', 'Tipo_Servicio', 'Nombre_Servicio')    
    verbose_name_plural = "Administracion de Artistas"
    list_filter=list_display
    list_display_links = list_display

class MaestroTiposServiciosAdmin(admin.ModelAdmin):
    list_display = ('Id_MTipoServicio','Nombre_Tipo_Servicio','Estado')
    ordering = ('Id_MTipoServicio', 'Nombre_Tipo_Servicio')    
    verbose_name_plural = "Administracion de Artistas"
    list_filter=list_display
    list_display_links = list_display


class MaestroServiciosAdmin(admin.ModelAdmin):
    list_display = ('Id_MServicio','Id_MTipoServicio','Nombre_Servicio','Estado','Precio')
    ordering = ('Id_MServicio', 'Id_MTipoServicio')    
    verbose_name_plural = "Administracion de Artistas"
    list_filter=list_display
    list_display_links = list_display