# Plan de Gestión de Configuración del Software (SCMP)
## Introducción 
### Situación de la empresa
Los Desconfigurados SAC es una empresa de gestión de configuración de software dedicada a aliviar las cargas tecnológicas de empresas y particulares. En los dos años transcurridos desde su creación, nuestra empresa se ha caracterizado por su enfoque innovador y su compromiso con la excelencia en cada proyecto que emprendemos.

Nuestra experiencia se refleja en los diversos proyectos que hemos realizado hasta la fecha. Desde un sistema de control de plagas llamado APIS, un revolucionario sistema de seguridad inteligente Billy, hasta el inteligente sistema de selección de residuos, SmartTachito, cada iniciativa ha sido un testimonio de nuestra capacidad para transformar ideas en realidades tangibles. Estos proyectos no solo han ampliado nuestro alcance, sino que también han consolidado nuestra reputación en la aplicación de tecnologías emergentes para abordar desafíos del mundo real.

| Proyectos | Descripción |
| --------- | ----------- |
| Apis | Anti-pigeon intelligence system (APIS) es un sistema para control de plagas de aves en los tejados de la facultad de Ingeniería de Sistemas e Informática. |
| Bily | Sistema de seguridad inteligente basado en inteligencia artificial e internet de las cosas para la detección de armas o situaciones de riesgo con una cámara. |
| Smart Tachito | Contenedor de basura inteligente con la capacidad de segregar la basura de acuerdo al tipo de residuo. |
| Campusmap | Sistema de mapeo de la facultad de Ingeniería de Sistemas e Informática para facilitar la búsqueda de salones a los estudiantes y docentes. |
| Teslab | Analizador sintáctico multipropósito para facilitar la resolución de problemas de matemática o matemática discreta a través de lenguaje natural. |
| Smart Tachito E-commerce | Plataforma de e-commerce o tienda virtual para la venta de los productos de Smart Tachito. |

### Problemática
Aunque en Los Desconfigurados SAC hemos demostrado nuestro valor en la gestión de configuración de software y en la reducción de las cargas tecnológicas para empresas y particulares, enfrentamos varios desafíos que requieren una atención estratégica.

Una de las principales problemáticas es la resistencia al cambio por parte de algunos clientes. Muchas empresas y particulares pueden estar acostumbrados a sus procesos y sistemas existentes, y pueden mostrar reticencia a adoptar nuevas soluciones de gestión de configuración de software. Convencer a los clientes de los beneficios de nuestra tecnología requiere de un enfoque y comunicación cuidadoso y persuasivo.

Otro desafío que enfrentamos es la rápida evolución del panorama tecnológico. Con constantes actualizaciones de software, nuevos estándares y metodologías emergentes, mantenernos al día con los últimos avances y adaptar nuestras soluciones para satisfacer las necesidades cambiantes del mercado es crucial. Esto puede requerir inversiones significativas en investigación y desarrollo, así como una capacidad ágil para ajustar nuestras estrategias según sea necesario.

### Objetivo
El SCMP tiene como objetivos:

- Establecer un proceso estructurado para identificar, controlar y gestionar la configuración del software.
- Controlar los cambios realizados en el software para asegurar la consistencia e integridad del producto.
- Facilitar la colaboración entre los miembros del equipo de desarrollo y garantizar la reproducibilidad de versiones específicas del software.
- Cumplir con los estándares de calidad y seguridad del software.

## Gestión de la SCM 
### Definición de roles

| Nombre del rol | Persona asignada | Responsabilidades | Nivel de autoridad |
| -------------- | ---------------- | ----------------- | ------------------ |
| Project Manager | JJQV | Supervisar el funcionamiento de la Gestión de la Configuración. | Toda autoridad sobre el proyecto y sus funciones. |
| Gestor de configuración | JLLTR | Ejecutar todas las tareas de la Gestión de la Configuración. | Autoridad para operar las funciones de Gestión de la Configuración. | 
| Inspector de aseguramiento de calidad | HSAM | Auditar la Gestión de la Configuración. | Auditar la Gestión de la Configuración según indique el project manager. | 
| Miembros del equipo de proyecto | Varios | Consultar la información de la Gestión de la Configuración según sus niveles de autoridad. | Depende de cada miembro, se especifica para cada artefacto y cada CI (ítem de configuración). | 

### Herramientas (Benchmarking) 
| Herramienta | Fuente | Características |
| ----------- | ------ | --------------- |
| Git | Open Source | Git es un sistema de control de versiones distribuido que permite a los equipos de desarrollo colaborar de manera eficiente en proyectos de software. Es conocido por su velocidad, eficiencia y flexibilidad. Utiliza ramas para el desarrollo paralelo y permite fusionar cambios de forma sencilla. |
| Mercurial | Open Source | Mercurial es otro sistema de control de versiones distribuido, similar a Git. Permite a los desarrolladores trabajar de forma colaborativa en proyectos de software y cuenta con una interfaz fácil de usar. Sin embargo, ha perdido algo de popularidad en comparación con Git en los últimos años. |
| Apache Subversion | Open Source | Apache Subversion (SVN) es un sistema de control de versiones centralizado que ha sido ampliamente utilizado en proyectos de software durante muchos años. A diferencia de Git y Mercurial, SVN utiliza un modelo centralizado para gestionar el código fuente. |
| Plastic SCM | Propietario | Plastic SCM es una herramienta de control de versiones que combina características de sistemas distribuidos y centralizados. Ofrece una variedad de características avanzadas, como la gestión de ramas y la integración continua, y se adapta bien a proyectos de cualquier tamaño. |
| Monotone | Open Source | Monotone es un sistema de control de versiones distribuido que se enfoca en la integridad y la seguridad de los datos. Utiliza criptografía para garantizar la autenticidad y la integridad de los cambios. Sin embargo, puede ser menos intuitivo de usar en comparación con otras herramientas más populares como Git y Mercurial. |
| CVS server | Open Source | CVS (Concurrent Versions System) es uno de los sistemas de control de versiones más antiguos y fue ampliamente utilizado en la década de 1990 y principios de la década de 2000. Aunque ha sido superado por herramientas más modernas como Git y SVN, todavía se utiliza en algunos proyectos heredados. |

### Diagrama de arquitectura y herramienta elegida 
Para la gestión de la configuración del software en el proyecto actual, se ha seleccionado Git como la herramienta principal. La arquitectura del sistema se basará en un repositorio centralizado en GitHub, que permitirá un control de versiones efectivo y una colaboración eficiente entre los miembros del equipo de desarrollo.

## Actividades de la SCM
### Identificación
#### Clasificación de los Ítems de la Configuración (CI)
Proyecto: Smart Tachito E-commerce
| Tipo </br> (E: evolución </br> F: fuente </br> S: soporte) | Nombre del Ítem (CI) | Extensión | Proyecto |
| ---------------------------------------------------------- | -------------------- | --------- | -------- |
| E | Project Charter | .docx | STE |
| S | Visual Studio Code | .exe | STE |
| E | Doc. de Arquitectura | .docx | STE |
| F | Archivos de modelado de Django | .py | STE |
| F | Archivo de serializador de modelos | .py | STE |
| E | Archivo de la base de datos sqlite | .sqlite3 | STE |
| F | Hojas de estilos de los componentes | .css | STE |
| F | Estructura de componentes | .html | STE |
| F | Funcionalidades de los componentes | .ts | STE |
| S | Librerías de Python | .py | STE |
| S | Dependencias de Node | .js | STE |
| E | Archivo de especificación de requisitos del backend | .txt | STE |

#### Nomenclatura de los Ítems de la Configuración (CI)
Regla N°1 = En la mayoría de los casos usaremos la siguiente nomenclatura

"Acrónimo del proyecto" + "-" + "Acrónimo de ítem"+ext

Ejemplo:
Para identificar el documento de arquitectura del proyecto STE, tenemos: STE-DA.docx.

Regla N°2 = En el caso existan dos o más documentos con el mismo acrónimo de ítem se usará la siguiente nomenclatura

"Acrónimo del proyecto" + "-" + "Tres primeras letras de cada palabra significativa del ítem separadas por guión" + ext

Ejemplo:
Para identificar el documento de arquitectura, y en caso hubiera un documento de análisis del proyecto STE, tenemos los siguientes: STE-DOC-ARQ.docx.
STE-DOC-ANA.docx

Regla N°3 = En el caso de coincidir con el mismo ítem, pero están en diferentes ramas, se usará la siguiente nomenclatura:

“Acrónimo del proyecto” + ”-” + ”R” + ”-” + ”Acrónimo de la rama” + ”-” + ”Acrónimo del ítem” + ext

Ejemplo:
Para identificar el documento de arquitectura del proyecto STE en la rama “Arquitectura diagramas”, tenemos: STE-R-AD-DA.docx.
Y en la rama “Arquitectura especificaciones”, tenemos: STE-R-AE-DA.docx.

Regla N°4: En el caso existan dos o más documentos con el mismo acrónimo de ítem y que pertenecen a la misma rama se usará la siguiente nomenclatura:

"Acrónimo del proyecto" + "-" +”R”+”Acrónimo de la rama”+ "Tres primeras letras de cada palabra significativa del ítem separadas por guión" + ext

Ejemplo:
Para identificar el documento de arquitectura, y en caso hubiera un documento de análisis del proyecto STE que pertenezcan a la rama “Arquitectura diagramas”, tenemos los siguientes: STE-R-AD-DOC-ARQ.docx.
STE-R-AD-DOC-ANA.docx
