# Modelo Lógico
![Modelo Conceptual](./ModeloLogico.jpg)

## Entidades

### Usuario
Tanto los clientes como los empleados tendrán asociado un usuario, el cuál les permitirá acceder a la plataforma. Por lo que es  necesaria una entidad Usuario
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idUsuario | integer | Identificador del usuario |
| Nombres | varchar(100) | Nombres del usuario |
| ApellidoP | varchar(100) | Apellido paterno del usuario |
| ApellidoM | varchar(100) | Apellido materno del usuario |
| Email | varchar(100) | Correo electrónico del usuario |
| Contrasenha | varchar(100) | Contraseña del usuario, la cual le permitirá acceder al panel de administración. Este campo debe estar encriptado |
|TipoDocumento | integer | Tipo de documento del usuario, el cual puede ser: 1 - DNI / 2 - Carnet de extranjería |
| Documento | varchar(50) | Numero del documento, el cual debe estar en base al tipo de documento registrado |
| Telefono | varchar(50) | Número telefónico del usuario, con el prefijo correspondiente |

### Empleado
El panel de administración permitirá gestionar información de los empleados, por lo que es necesaria una entidad Empleado
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idEmpleado | integer | Identificador del empleado |
| FechaContratacion | date | Fecha de contratación del empleado |
| idUsuario | integer | Identificador foráneo del usuario del empleado |

### Cliente
El panel de administración permitirá gestionar información de los cliente, por lo que es necesaria una entidad Cliente. A su vez, en la página del e-commerce se podrán registrar los clientes para realizar las respectivas compras.
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idCliente | integer | Identificador del cliente |
| FechaCreacion | date | Fecha de creacion del usuario del cliente |
| idUsuario | integer | Identificador foráneo del usuario del cliente |

### Cargo:
Cada empleado tiene uno o mas cargos, por lo que es necesaria una entidad Cargo. Se podrán gestionar los cargos a través del panel de administración
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idCargo | integer | Identificador del cargo |
| Nombre | varchar(100) | Nombre del cargo |
| Descripcion | varchar(500) | Descripción del cargo |

### EmpleadoCargo
Tabla intermedia entre Empleado y Cargo
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idCargo | integer | Identificador del cargo |
| idEmpleado | integer | Identificador del empleado |

### Categoria
Cada producto puede tener una categoria, por lo que es necesaria una entidad Categoria
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idCategoria | integer | Identificador del categoría |
| Nombre | varchar(100) | Nombre de la categoría |
| Descripcion | varchar(500) | Descripción de la categoría |
| Imagen | image | Imagen de la categoría |
| Icono | image | Icono o Thumbnail de la categoría |

### Producto:
El cliente podrá seleccionar productos del e-commerce, además que la administración y gestión de productos se hará desde el panel de administración, por lo que es necesaria una entidad Producto
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idProducto | integer | Identificador del producto |
| idCategoria | integer | Identificador foráneo de la categoría |
| Nombre | varchar(100) | Nombre del producto |
| DescripcionCorta | varchar(100) | Descripción corta del producto, que será mostrada en la vista rápida del producto |
| Descripcion | varchar(500) | Descripción larga del producto, que será mostrada en la vista de detalle del producto |
| Precio | decimal(8,2) | Precio unitario del artículo |
| Stock | integer | Stock disponible del artiulo, debe ser entero positivo |
| Imagen 1 | image | Imagen de perspectiva del producto |
| Imagen 2 | image | Imagen superior del producto |
| Imagen 3 | image | Imagen lateral del producto |
| Imagen 4 | image | Imagen frontal del producto |
| Imagen 3D | image | Imagen en 3D del producto |

### Residuo
Los productos, que son los SmartTachitos, seleccionan los residuos. Y cada SmartTachito puede seleccionar 3 o más tipos de residuos, por lo que es necesaria una entidad Residuo para realizar los filtros respectivos en el Frontend
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idResiduo | integer | Identificador primario del residuo |
| Nombre | varchar(100) | Nombre del residuo |
| Descripcion | varchar(500) | Descripción del residuo |
| Imagen | image | Imagen del residuo |
| Icono | image | Icono o Thumbnail del residuo |

### ProductoResiduo
Tabla intermedia entre Producto y Residuo
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idResiduo | integer | Identificador del residuo |
| idProducto | integer | Identificador del producto |