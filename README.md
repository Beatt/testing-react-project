# Testing React Project  

## Objetivo
El objetivo principal de este repositorio es presentar una serie
de **casos** ficticiones que nos sirvan de apoyo para mostrar cuando
ejecutar una prueba unitaria, integración o E2E.

## Técnologias
- React 17
- Jest
- Enzyme
- Eslint
- Prettier
- Axios 
- i18next

## Estructura de carpetas
La propuesta de carpeta que se presenta a continuación tiene
por objetivo ser escalable y fácil de entender.

- api
- apps
- assets
- components
- config
- locales
- services
- tests
- utils
- views

### api
Nuestros endpoints.

### apps
Definición de nuestras apps en caso de tener más de una.

### assets
Imágenes, fonts y css globales reutilizables.

### components
Componentes globales reutilizables

### config
Configuraciones globales de bibliotecas de terceros.

### locales
Internalización.

### services
El servicio es una categoría amplia que abarca cualquier valor, 
función o característica que necesite una aplicación. 
Un servicio es típicamente una clase con un propósito 
limitado y bien definido. Debería hacer algo específico y hacerlo bien.

[Más detalle...](https://angular.io/guide/architecture-services)

### tests
Pruebas unitarias y de integración de nuestra app.

Convenciones
- Replicar la misma estructura del componentes que estaremos probando. 

Ejemplo

**views**
- views/Entities/index.js
- views/Entities/EntitiesTable.js

**tests**
- tests/views/Entities/index.test.js
- tests/views/Entities/EntitiesTable.test.js

### utils
Funciones y constantes globales reutilizables.

### views
Vistas principales de nuestra app.

Convenciones

1. Solo debe de existir un index por vista
2. Los componentes que se agreguen dentro de la vista tienen
que estar nombrados por ***NombreDeLaVista+NombreDelComponente***
3. Además de los componentes mencionados en el punto 2, también
   podemos tener los siguientes (se recomienda 
   solo mantener estos tres) 
    - constants.js
    - helpers.js
    - styles.scss
4. Los nombre de las vistas deberán estar en plural. 

Ejemplo

- views/Companies/index.js
- views/Companies/CompaniesTable.js
- views/Companies/CompaniesCard.js
- views/Companies/constants.js
- views/Companies/helpers.js
- views/Companies/styles.scss

## Casos
Una serie de casos ficticiones tomados de Internet con el objetivo
de desarrollar mediante pruebas.

1. #### [Payment link](cases/PaymentLink/README.md)
