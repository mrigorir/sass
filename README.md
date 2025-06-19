# Sistema de Grid y Breakpoints con Utilities Flex y Grid CSS

 Este sistema proporciona un conjunto completo de utilidades CSS para crear layouts responsivos y flexibles. Combina las mejores características de sistemas como Bootstrap con mejoras modernas.

## Tabla de Contenidos
- [Sistema de Grid y Breakpoints con Utilities Flex y Grid CSS](#sistema-de-grid-y-breakpoints-con-utilities-flex-y-grid-css)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Contenedores](#contenedores)
  - [Sistema de Grid](#sistema-de-grid)
  - [Estructura Básica](#estructura-básica)
  - [Clases de Columnas](#clases-de-columnas)
  - [Offset](#offset)
  - [Efecto Hover](#efecto-hover)
  - [Espaciado (Gaps)](#espaciado-gaps)
- [Controla el espacio entre columnas.](#controla-el-espacio-entre-columnas)
  - [Espaciado (Gaps)](#espaciado-gaps-1)
  - [Utilidades Flex](#utilidades-flex)
  - [Dirección](#dirección)
  - [Clases de Dirección Flex](#clases-de-dirección-flex)
  - [Wrap](#wrap)
  - [Clases de Wrap Flex](#clases-de-wrap-flex)
  - [Grow/Shrink](#growshrink)
  - [Clases de Crecimiento Flex](#clases-de-crecimiento-flex)
  - [Alineación](#alineación)
  - [Justify Content](#justify-content)
  - [Align Items](#align-items)
  - [Align Self](#align-self)
  - [Ordenamiento](#ordenamiento)
  - [Ordenamiento](#ordenamiento-1)
  - [Display Responsivo](#display-responsivo)
    - [Clases de Display](#clases-de-display)
- [Ejemplos Complejos](#ejemplos-complejos)
  - [Grid Responsivo con Hover](#grid-responsivo-con-hover)
  - [Flexbox Responsivo](#flexbox-responsivo)
  - [Dashboard Complejo](#dashboard-complejo)

## Contenedores
Los contenedores centran el contenido y proporcionan un ancho máximo responsivo.

```html
<!-- Contenedor estándar centrado -->
<div class="container container--centered">
  <!-- Contenido -->
</div>

<!-- Contenedor fluido al 100% -->
<div class="container container--fluid">
  <!-- Contenido -->
</div>
```

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
```

## Clases de Columnas

```html
<div class="col-xs-12">12 columnas en móvil</div>
<div class="col-sm-6">6 columnas en sm (≥576px)</div>
<div class="col-md-4">4 columnas en md (≥768px)</div>
<div class="col-lg-3">3 columnas en lg (≥992px)</div>
<div class="col-xl-2">2 columnas en xl (≥1200px)</div>
<div class="col-xxl-1">1 columna en xxl (≥1400px)</div>
```
## Offset

```html
<div class="col-md-6 offset-md-3">Centrado en md</div>
```
## Efecto Hover

```html
<div class="col-md-4 col-hoverable">
  <!-- Se escala al 102% al hacer hover -->
</div>
```

## Espaciado (Gaps)

# Controla el espacio entre columnas.

```html
<div class="row g-2"> <!-- Gap general -->
  <div class="col-md-6">...</div>
</div>

<div class="row gx-3 gy-1"> <!-- Gap específico por eje -->
  <div class="col-md-6">...</div>
</div>
```

## Espaciado (Gaps)

| Clase    | Descripción               |
|----------|---------------------------|
| `.g-0`   | Sin espacio               |
| `.g-1`   | Pequeño (0.5rem)          |
| `.g-2`   | Mediano (1rem)            |
| `.g-3`   | Grande (1.5rem)           |
| `.g-4`   | Extra grande (2rem)       |
| `.g-5`   | Enorme (3rem)             |
| `.gx-{n}`| Espacio horizontal        |
| `.gy-{n}`| Espacio vertical          |

## Utilidades Flex
Controla el comportamiento de los contenedores flex.

## Dirección
```html
<div class="d-flex flex-row">Fila</div>
<div class="d-flex flex-column">Columna</div>
<div class="d-flex flex-md-row flex-column">Responsivo</div>
```
## Clases de Dirección Flex

| Clase | Descripción |
|-------|-------------|
| `.flex-row` | Dirección horizontal |
| `.flex-column` | Dirección vertical |
| `.flex-row-reverse` | Horizontal invertido |
| `.flex-column-reverse` | Vertical invertido |
| `.flex-{breakpoint}-row` | Responsivo (ej: `.flex-md-row`) |

## Wrap

```html
<div class="d-flex flex-wrap">Wrap activado</div>
```
## Clases de Wrap Flex

| Clase | Descripción |
|-------|-------------|
| `.flex-wrap` | Wrap activado |
| `.flex-nowrap` | Sin wrap |
| `.flex-wrap-reverse` | Wrap invertido |
| `.flex-{breakpoint}-wrap` | Versión responsiva (ej: `.flex-md-wrap`) |

## Grow/Shrink

```html
<div class="d-flex">
  <div class="flex-grow-1">Se expande</div>
  <div class="flex-shrink-0">No se reduce</div>
</div>
```
## Clases de Crecimiento Flex

| Clase | Descripción |
|-------|-------------|
| `.flex-grow-0` | No crece |
| `.flex-grow-1` | Crece para llenar espacio |
| `.flex-shrink-0` | No se reduce |
| `.flex-shrink-1` | Se reduce si es necesario |

## Alineación
Controla la alineación de elementos flex/grid.

## Justify Content

```html
<div class="d-flex justify-center">Centrado horizontal</div>
```

| Clase | Descripción |
|-------|-------------|
| `.justify-start` | Inicio (valor por defecto) |
| `.justify-end` | Final |
| `.justify-center` | Centro |
| `.justify-between` | Espacio entre elementos |
| `.justify-around` | Espacio alrededor de elementos |
| `.justify-evenly` | Espacio uniformemente distribuido |
| `.justify-{breakpoint}-center` | Versión responsiva (ej: `.justify-md-center`) |

## Align Items

```html
<div class="d-flex align-center">Centrado vertical</div>
```

| Clase | Descripción |
|-------|-------------|
| `.align-start` | Alinea elementos al inicio |
| `.align-end` | Alinea elementos al final |
| `.align-center` | Centra elementos verticalmente |
| `.align-baseline` | Alinea por línea base de texto |
| `.align-stretch` | Estira elementos para llenar el espacio |
| `.align-{breakpoint}-center` | Versión responsiva (ej: `.align-md-center`) |

## Align Self

```html
<div class="d-flex">
  <div class="self-center">Auto-alineado</div>
</div>
```

| Clase | Descripción |
|-------|-------------|
| `.self-auto` | Comportamiento automático (por defecto) |
| `.self-start` | Alineación individual al inicio |
| `.self-end` | Alineación individual al final |
| `.self-center` | Centrado individual |
| `.self-stretch` | Estirado individual para llenar espacio |
| `.self-baseline` | Alineación individual por línea base |

## Ordenamiento
Cambia el orden visual de los elementos.

```html
<div class="d-flex">
  <div class="order-2">Aparece segundo</div>
  <div class="order-1">Aparece primero</div>
</div>
```
## Ordenamiento

| Clase | Descripción |
|-------|-------------|
| `.order-1` a `.order-12` | Establece orden específico (1-12) |
| `.order-first` | Posiciona primero (equivale a `order: -1`) |
| `.order-last` | Posiciona último (equivale a `order: 13`) |

## Display Responsivo
Controla la visibilidad y tipo de display.

```html
<div class="d-none d-md-block">Visible solo en md+</div>
```
### Clases de Display

| Clase | Descripción |
|-------|-------------|
| `.d-none` | Elemento oculto (display: none) |
| `.d-block` | Display en bloque |
| `.d-flex` | Display flexible (flexbox) |
| `.d-grid` | Display en cuadrícula (CSS Grid) |
| `.d-{breakpoint}-none` | Oculto en breakpoint específico (ej: .d-md-none) |
| `.d-{breakpoint}-flex` | Flexbox en breakpoint específico (ej: .d-lg-flex) |

**Notas:**
- Los breakpoints disponibles son: sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px).
- Todas las clases son responsive y se pueden combinar.

# Ejemplos Complejos

## Grid Responsivo con Hover

```html
<div class="container">
  <div class="row g-3">
    <div class="col-xs-12 col-md-6 col-xl-4 col-hoverable">
      <div class="card">Tarjeta 1</div>
    </div>
    <div class="col-xs-12 col-md-6 col-xl-4">
      <div class="card">Tarjeta 2</div>
    </div>
    <div class="col-xs-12 col-md-6 col-xl-4 col-hoverable">
      <div class="card">Tarjeta 3</div>
    </div>
  </div>
</div>
```

## Flexbox Responsivo

```html
<div class="d-flex flex-column flex-md-row justify-md-between align-center">
  <div>Elemento 1</div>
  <div class="self-md-end">Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

## Dashboard Complejo

```html
<div class="container container--fluid">
  <div class="row g-2">
    <!-- Sidebar -->
    <div class="col-lg-3 d-none d-lg-block">
      <div class="card">Sidebar</div>
    </div>
    
    <!-- Contenido principal -->
    <div class="col-lg-9">
      <div class="d-flex flex-wrap justify-between align-center mb-3">
        <h2>Título</h2>
        <div class="d-flex gx-2">
          <button class="btn btn-primary">Acción 1</button>
          <button class="btn btn-secondary">Acción 2</button>
        </div>
      </div>
      
      <div class="row g-3">
        <div class="col-md-6 col-xl-4">
          <div class="card">Módulo 1</div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">Módulo 2</div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">Módulo 3</div>
        </div>
      </div>
    </div>
  </div>
</div>
```