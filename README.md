# Sistema de Grid y Utilidades CSS - Documentación

 > Este sistema proporciona un conjunto completo de utilidades CSS para crear layouts responsivos y flexibles. Combina las mejores características de sistemas como Bootstrap con mejoras modernas.

## Tabla de Contenidos
- [Sistema de Grid y Utilidades CSS - Documentación](#sistema-de-grid-y-utilidades-css---documentación)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Contenedores](#contenedores)
  - [Sistema de Grid](#sistema-de-grid)
  - [Estructura Básica](#estructura-básica)

## Contenedores
Los contenedores centran el contenido y proporcionan un ancho máximo responsivo.

`html`
<!-- Contenedor estándar centrado -->
<div class="container container--centered">
  <!-- Contenido -->
</div>

<!-- Contenedor fluido al 100% -->
<div class="container container--fluid">
  <!-- Contenido -->
</div>

| Clase               | Descripción                                      |
|---------------------|--------------------------------------------------|
| `.container`        | Contenedor base con padding lateral             |
| `.container--centered` | Centrado con ancho máximo (1200px por defecto) |
| `.container--fluid` | Ocupa el 100% del ancho disponible              |

## Sistema de Grid
Sistema de 12 columnas con soporte para CSS Grid y Flexbox.

## Estructura Básica
```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-6 col-xl-4">
      <!-- Contenido -->
    </div>
    <!-- Más columnas... -->
  </div>
</div>

