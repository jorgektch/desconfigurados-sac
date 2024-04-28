# Modelo Conceptual
![Modelo Conceptual](./ModeloConceptual.jpg)

## Entidades
### Empleado:
El panel de administración permitirá gestionar información de los empleados, por lo que es necesaria una entidad Empleado
#### Atributos
* idEmpleado (integer): Identificador primario del empleado
* Nombres (varchar(100)): Nombres del empleado
* ApellidoP (varchar(100)): Apellido paterno del empleado
* ApellidoM (varchar(100)): Apellido materno del empleado
* Email (varchar(100)): Correo electrónico del empleado
* Contrasenha (varchar(100)): Contraseña del empleado, la cual le permitirá acceder al panel de administración. Este campo debe estar encriptado
* TipoDocumento (integer): Tipo de documento del empleado, el cual puede ser:
    * 1: DNI
    * 2: Carnet de extranjería
* Documento (varchar(50)): Numero del documento, el cual debe estar en base al tipo de documento registrado
* Telefono (varchar(50)): Número telefónico del empleado, con el prefijo correspondiente
* FechaContratacion (date): Fecha de contratación del empleado