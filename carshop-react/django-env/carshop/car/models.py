from django.utils import timezone
from django.db import models
from ckeditor.fields import RichTextField
from django.core.validators import MinValueValidator
import datetime

# Create your models here.

class Clientes (models.Model):
    TIPO_ID = [
    ('CEDULA','CEDULA'),
    ('RUC','RUC'),
    ('PASAPORTE','PASAPORTE')
    ]
    Id_Cliente = models.AutoField(primary_key=True, verbose_name='IdCliente')
    Nombre_Cliente = models.CharField(max_length=150, null=True, blank=True, verbose_name='Nombre de Cliente')
    Email =  models.EmailField(max_length=250, null=True, blank=True,verbose_name='email')
    telefono = models.CharField(max_length=12, null=True, blank=True, verbose_name='Número de contacto')
    Identificacion = models.CharField(max_length=15, null=True, blank=True, verbose_name='Identificación ')
    Tipo_Identificacion = models.CharField(max_length=15, verbose_name='Tipo de Identificación', null=False, blank=False, choices=TIPO_ID)
    class Meta:        
            verbose_name_plural = "01 Cliente"

class Vehiculos(models.Model):
    NIVEL = [
        ('BAJO','BAJO'),
        ('MEDIO','MEDIO'),
        ('FULL','FULL')
    ]
    Id_Vehiculo = models.AutoField(primary_key=True, verbose_name='IdVehiculo')
    Id_Cliente = models.ForeignKey('Clientes', on_delete=models.PROTECT, null=False, blank=False, related_name='Cliente', verbose_name='Id del cliente')
    Marca = models.CharField(max_length=150, null=True, blank=True, verbose_name='Marca')
    Modelo = models.CharField(max_length=150, null=True, blank=True, verbose_name='Modelo')
    Placa = models.CharField(max_length=150, null=True, blank=True, verbose_name='Placa')
    Nivel_Combustible = models.CharField(max_length=15, verbose_name='Nivel de Combustible', null=False, blank=False, choices=NIVEL)
    Detalles_vehiculo = RichTextField(null=True, blank=True, verbose_name='Detalles del Vehiculo')
    class Meta:
            verbose_name_plural = "02 Vehículo"


class Servicios(models.Model):
    STADO_TRABAJO = [
        ('PENDIENTE','PENDIENTE'),
        ('EN PROCESO','EN PROCESO'),
        ('TERMINADO','TERMINADO')
    ]
    Id_Servicio = models.AutoField(primary_key=True, verbose_name='IdServicio')
    Id_Vehiculo = models.ForeignKey('Vehiculos', on_delete=models.PROTECT, null=False, blank=False, related_name='Vehiculo', verbose_name='Id del Vehiculo')
    Fecha_Inicio_Trabajo = models.DateTimeField(default=timezone.now, verbose_name='Fecha de Inicio de trabajo')
    Fecha_Fin_Trabajo = models.DateTimeField(  null=False, blank=False,verbose_name='Fecha de Fin de trabajo')    
    Estado_Servicio = models.CharField(max_length=50, default='PENDIENTE', verbose_name='Estado de Servicio', null=False, blank=False, choices=STADO_TRABAJO)
    class Meta:
            verbose_name_plural = "03 Servicio"

class DetalleServicios(models.Model):
    TIPO_SERVICIO = [
        ('MECANICO','MECANICO'),
        ('ELECTROMECANICO','ELECTROMECANICO'),
        ('PINTURA','PINTURA'),
        ('ENDEREZAR','ENDEREZAR'),
        ('MANTENIMIENTO','MANTENIMIENTO')
    ]
    Id_Servicio = models.ForeignKey('Servicios', on_delete=models.PROTECT, null=False, blank=False, related_name='Servicio', verbose_name='Id del Servicio')
    Linea_Detalle = models.IntegerField(verbose_name='Linea de detalle', null=False, blank=False)
    Nombre_Servicio = models.CharField(max_length=150, null=True, blank=True, verbose_name='Nombre del Servicio')
    class Meta:
            verbose_name_plural = "04 Detalle de Servicio"

class MaestroTiposServicios(models.Model):
    ESTADOS = [
    ('ACTIVO','ACTIVO'),
    ('INACTIVO', 'INACTIVO')
    ]
    Id_MTipoServicio = models.AutoField(primary_key=True, verbose_name='IdMTipoServicios')
    Nombre_Tipo_Servicio = models.CharField(max_length=250,  verbose_name='Tipo de servicio', null=False, blank=False)
    Estado = models.CharField(max_length=15, default='ACTIVO', verbose_name='Estado del Servicio', null=False, blank=False, choices=ESTADOS)
    class Meta:
            verbose_name_plural = "05 Maestro de Tipos de Servicio"    

class MaestroServicios(models.Model):
    ESTADOS = [
    ('ACTIVO','ACTIVO'),
    ('INACTIVO', 'INACTIVO')
    ]
    Id_MServicio = models.AutoField(primary_key=True, verbose_name='IdMServicios')
    Id_MTipoServicio = models.ForeignKey('MaestroTiposServicios', on_delete=models.PROTECT, null=False, blank=False, related_name='TipodeServicio', verbose_name='Id del Servicio')
    Nombre_Servicio = models.CharField(max_length=250,  verbose_name='Nombre del servicio', null=False, blank=False)
    Estado = models.CharField(max_length=15, default='ACTIVO', verbose_name='Estado del Servicio', null=False, blank=False, choices=ESTADOS)
    Precio = models.FloatField(validators=[MinValueValidator(0.00)],default=0, verbose_name='Precio del Servicio')
    class Meta:
            verbose_name_plural = "06 Maestro de Servicio"    

