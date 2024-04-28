# Modelo Conceptual
![Modelo Conceptual](./ModeloConceptual.jpg)

## Entidades

### Empleado:
El panel de administración permitirá gestionar información de los empleados, por lo que es necesaria una entidad Empleado
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idEmpleado | integer | Identificador del empleado |
| Nombres | varchar(100) | Nombres del empleado |
| ApellidoP | varchar(100) | Apellido paterno del empleado |
| ApellidoM | varchar(100) | Apellido materno del empleado |
| Email | varchar(100) | Correo electrónico del empleado |
| Contrasenha | varchar(100) | Contraseña del empleado, la cual le permitirá acceder al panel de administración. Este campo debe estar encriptado |
|TipoDocumento | integer | Tipo de documento del empleado, el cual puede ser: 1 - DNI / 2 - Carnet de extranjería |
| Documento | varchar(50) | Numero del documento, el cual debe estar en base al tipo de documento registrado |
| Telefono | varchar(50) | Número telefónico del empleado, con el prefijo correspondiente
| FechaContratacion | date | Fecha de contratación del empleado |

### Cliente:
El panel de administración permitirá gestionar información de los cliente, por lo que es necesaria una entidad Cliente. A su vez, en la página del e-commerce se podrán registrar los clientes para realizar las respectivas compras.
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idCliente | integer | Identificador del cliente |
| Nombres | varchar(100) | Nombres del cliente |
| ApellidoP | varchar(100) | Apellido paterno del cliente |
| ApellidoM | varchar(100) | Apellido materno del cliente |
| Email | varchar(100) | Correo electrónico del cliente |
| Contrasenha | varchar(100) | Contraseña del cliente, la cual le permitirá acceder al panel de administración. Este campo debe estar encriptado |
|TipoDocumento | integer | Tipo de documento del cliente, el cual puede ser: 1 - DNI / 2 - Carnet de extranjería |
| Documento | varchar(50) | Numero del documento, el cual debe estar en base al tipo de documento registrado |
| Telefono | varchar(50) | Número telefónico del cliente, con el prefijo correspondiente
| FechaCreacion | date | Fecha de creación del usuario del cliente |

### Cargo:
Cada empleado tiene uno o mas cargos, por lo que es necesaria una entidad Cargo. Se podrán gestionar los cargos a través del panel de administración
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idCargo | integer | Identificador del cargo |
| Nombre | varchar(100) | Nombre del cargo |
| Descripcion | varchar(500) | Descripción del cargo |

### Producto:
El cliente podrá seleccionar productos del e-commerce, además que la administración y gestión de productos se hará desde el panel de administración, por lo que es necesaria una entidad Producto
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idProducto | integer | Identificador del producto |
| Nombre | varchar(100) | Nombre del cargo |
| DescripcionCorta | varchar(100) | Descripción corta del producto, que será mostrada en la vista rápida del producto |
| Descripcion | varchar(500) | Descripción larga del producto, que será mostrada en la vista de detalle del producto |
| Imagen | image | Imagen del producto |
| Categoria | Categoría del producto |

### Residuo
Los productos, que son los SmartTachitos, seleccionan los residuos. Y cada SmartTachito puede seleccionar 3 o más tipos de residuos, por lo que es necesaria una entidad Residuo para realizar los filtros respectivos en el Frontend
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idResiduo | integer | Identificador primario del residuo |
| Nombre | varchar(100) | Nombre del residuo |
| Descripcion | varchar(500) | Descripción del residuo |
| Imagen | image | Imagen del residuo |

### Pedido
Los empleados pueden realizar pedidos, y cada pedido puede contener uno o más productos, por lo que es necesaria una entidad Pedido
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idPedido | integer | Identificador primario del pedido |
| FechaPedido | date | Fecha del pedido |
| Estado | integer | Estado del pedido, el cual puede ser: (1 - En proceso) / (2 - Pagado) / (3 - Entregado) / (4 - Cancelado) |

### Pago
Cada pedido puede ser pagado, por lo que es necesaria una entidad Pago
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idPago | integer | Identificador primario del pago |
| FechaPago | date | Fecha del pago |
| Estado | integer | Estado del pago, el cual puede ser: (1 - Pagado) / (2 - Cancelado) |

### Entrega
Cada pedido puede ser entregado, por lo que es necesaria una entidad Entrega
#### Atributos
| Atributo | Tipo de dato | Descripcion |
| -------- | ------------ | ----------- |
| idEntrega | integer | Identificador primario de la entrega |
| FechaEntrega | date | Fecha de la entrega |
| Estado | integer | Estado de la entrega, el cual puede ser: (1 - En proceso) / (2 - Entregado) |
| Direccion | varchar(200) | Direccion de la entrega |

