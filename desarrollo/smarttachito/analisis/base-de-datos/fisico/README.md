# Modelo Físico
![Modelo Fisico](./ModeloFisico.png)

## Diccionario de datos
A continuación se presenta el diccionario de datos de las tablas del modelo físico de la BBDD

### Usuario
| Campo | Tipo de dato | Tamaño | Formato | PK | FK | NN | AI | U | Default | Descripción |
| ----- | ------------ | ------ | ------- | --- | --- | --- | --- | --- | ------- | ----------- |
| idUsuario | INT | - | - | SI | - | SI | SI | SI | - | Identificador primario del usuario |
| Nombres | VARCHAR | 100 | - | - | - | SI | - | - | - | Nombres del usuario |
| ApellidoP | VARCHAR | 100 | - | - | - | SI | - | - | - | Apellido paterno del usuario |
| ApellidoM | VARCHAR | 100 | - | - | - | SI | - | - | - | Apellido materno del usuario |
| Email | VARCHAR | 100 | example@domain.com | - | SI | - | - | SI | - | Email del usuario |
| Contrasenha | VARCHAR | 100 | - | - | - | SI | - | - | - | Contraseña del usuario |
| TipoDocumento | INT | - | - | - | - | SI | - | - | 1 | Tipo de documento: (1 - DNI) / (2 - Carnet de extranjería) |
| Documento | VARCHAR | 50 | - | - | - | SI | - | SI | - | Nº de documento del usuario |
| Telefono | VARCHAR | 50 | - | - | - | SI | - | SI | - | Nº de teléfono del usuario |

### Empleado
| Campo | Tipo de dato | Tamaño | Formato | PK | FK | NN | AI | U | Default | Descripción |
| ----- | ------------ | ------ | ------- | --- | --- | --- | --- | --- | ------- | ----------- |
| idEmpleado | INT | - | - | SI | - | SI | SI | SI | - | Identificador primario del empleado |
| FechaContrato | DATE | - | dd/mm/aaaa | - | - | SI | - | - | - | Fecha de contrato del empleado |
| idUsuario | INT | - | - | - | SI | SI | - | SI | - | Identificador primario del usuario |

### Cliente
| Campo | Tipo de dato | Tamaño | Formato | PK | FK | NN | AI | U | Default | Descripción |
| ----- | ------------ | ------ | ------- | --- | --- | --- | --- | --- | ------- | ----------- |
| idCliente | INT | - | - | SI | - | SI | SI | SI | - | Identificador primario del cliente |
| FechaCreacion | DATE | - | dd/mm/aaaa | - | - | SI | - | - | - | Fecha de creación del usuario del cliente |
| idUsuario | INT | - | - | - | SI | SI | - | SI | - | Identificador primario del usuario |

### Cargo
| Campo | Tipo de dato | Tamaño | Formato | PK | FK | NN | AI | U | Default | Descripción |
| ----- | ------------ | ------ | ------- | --- | --- | --- | --- | --- | ------- | ----------- |
| idCargo | INT | - | - | SI | - | SI | SI | SI | - | Identificador primario del cargo |
| Nombre | VARCHAR | 100 | - | - | - | SI | - | SI | - | Nombre del cargo |
| Descripcion | VARCHAR | 500 | - | - | - | - | - | - | - | Descipción del cargo |

### EmpleadoCargo
| Campo | Tipo de dato | Tamaño | Formato | PK | FK | NN | AI | U | Default | Descripción |
| ----- | ------------ | ------ | ------- | --- | --- | --- | --- | --- | ------- | ----------- |
| idCargo | INT | - | - | - | SI | SI | - | - | - | Identificador foráneo del cargo |
| idEmpleado | INT | - | - | - | SI | SI | - | - | - | Identificador foráneo del empleado |

### Categoria
| Campo | Tipo de dato | Tamaño | Formato | PK | FK | NN | AI | U | Default | Descripción |
| ----- | ------------ | ------ | ------- | --- | --- | --- | --- | --- | ------- | ----------- |
| idCategoria | INT | - | - | SI | - | SI | SI | SI | - | Identificador primario de la categoría |
| Nombre | VARCHAR | 100 | - | - | - | SI | - | SI | - | Nombre de la categoría |
| Descripcion | VARCHAR | 500 | - | - | - | - | - | - | - | Descipción de la categoría |
| Imagen | VARCHAR | 500 | - | - | - | - | - | - | - | URL de la imagen de la categoría |

### Residuo
| Campo | Tipo de dato | Tamaño | Formato | PK | FK | NN | AI | U | Default | Descripción |
| ----- | ------------ | ------ | ------- | --- | --- | --- | --- | --- | ------- | ----------- |
| idResiduo | INT | - | - | SI | - | SI | SI | SI | - | Identificador primario de la residuo |
| Nombre | VARCHAR | 100 | - | - | - | SI | - | SI | - | Nombre del residuo |
| Descripcion | VARCHAR | 500 | - | - | - | - | - | - | - | Descipción del residuo |
| Imagen | VARCHAR | 500 | - | - | - | - | - | - | - | URL de la imagen del residuo |



