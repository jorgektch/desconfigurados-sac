# Modelo Conceptual
![Modelo Conceptual](./ModeloConceptual.jpg)

## Entidades

### Empleado:
El panel de administración permitirá gestionar información de los empleados, por lo que es necesaria una entidad Empleado
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| :------: | :----------: | :---------: |
| idEmpleado | integer | Identificador del empleado |
| Nombres | varchar(100) | Nombres del empleado |
| ApellidoP | varchar(100) | Apellido paterno del empleado |
| ApellidoM | varchar(100) | Apellido materno del empleado |
| Email | varchar(100) | Correo electrónico del empleado |
| Contrasenha | varchar(100) | Contraseña del empleado, la cual le permitirá acceder al panel de administración. Este campo debe estar encriptado |
|TipoDocumento | integer | Tipo de documento del empleado, el cual puede ser:
* 1: DNI
* 2: Carnet de extranjería
|
| Documento | varchar(50) | Numero del documento, el cual debe estar en base al tipo de documento registrado |
| Telefono | varchar(50) | Número telefónico del empleado, con el prefijo correspondiente
| FechaContratacion | date | Fecha de contratación del empleado |

### Cliente:
El panel de administración permitirá gestionar información de los cliente, por lo que es necesaria una entidad Cliente. A su vez, en la página del e-commerce se podrán registrar los clientes para realizar las respectivas compras.
#### Atributos
* idCliente (integer): Identificador primario del cliente
* Nombres (varchar(100)): Nombres del cliente
* ApellidoP (varchar(100)): Apellido paterno del cliente
* ApellidoM (varchar(100)): Apellido materno del cliente
* Email (varchar(100)): Correo electrónico del cliente
* Contrasenha (varchar(100)): Contraseña del cliente, la cual le permitirá acceder al panel de administración. Este campo debe estar encriptado
* TipoDocumento (integer): Tipo de documento del cliente, el cual puede ser:
    * 1: DNI
    * 2: Carnet de extranjería
* Documento (varchar(50)): Numero del documento, el cual debe estar en base al tipo de documento registrado
* Telefono (varchar(50)): Número telefónico del cliente, con el prefijo correspondiente
* FechaCreacion (date): Fecha de creación del cliente

### Cargo:
Cada empleado tiene uno o mas cargos, por lo que es necesaria una entidad Cargo. Se podrán gestionar los cargos a través del panel de administración
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| :------: | :----------: | :---------: |
| idCargo | integer | Identificador del cargo |
| Nombre | varchar(100) | Nombre del cargo |
| Descripcion | varchar(500) | Descripcion del cargo |