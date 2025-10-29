## Ramas del proyecto

- [Rama base sin cambios (main)](https://github.com/Loisinho/klikin-contact-list-test/tree/main)
- [Rama que contiene el desarrollo (develop)](https://github.com/Loisinho/klikin-contact-list-test/tree/develop)

## Project Setup

```sh
nvm use
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run serve
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint

```sh
npm run lint
```

### Unit Tests (Jest)

```sh
npm run test:unit
```

### E2E Tests (Cypress)

```sh
npm run test:e2e
```

```sh
npm run test:e2e:run
```

## Desarrollo
Crear una aplicación básica de gestión de contactos.

**Servicio para obtener los contactos:**
- [x] Importar el array inicial de contactos de `./assets/contacts.json`.
- [x] Pasar contactos al componente de ContactList como una propiedad.
**Visualización de los contactos:**
- [x] Mostrar listado de usuarios en su totalidad.
- [x] Ordenar inicialmente los contactos por el key `lastname` de forma ascendente.
**Buscador:**
- [x] Añadir un campo de búsqueda (input text) para filtrar el listado de contactos por `name`, `lastname`, `email` y `phone`.
- [x] Iniciar la app con el campo de búsqueda en autofocus.
**Crear y editar contactos:**
- [x] Implementar la creación y actualización de contactos nuevos (validar el campo `email`).
- [ ] Los campos `phone` y `email` serán un array que podrá contener N items.

## Qué se va a valorar
- Limpieza del código y organización.
- El uso de un naming claro y descriptivo en las variables.
- Implementar un layout con criterio en lo referente a UX.
- Uso de sass/stylus/less.
- Seguir la guía de estilo `recomended` de VueJS.
- Uso de mixins de ser necesario.
- El uso de algún `template functional`.
- La creación de componentes de la forma más reutilizable posible.
- Tests unitarios.
- Tests End-to-End.

## Opcionalmente se puede
- Hacer uso de la librería externa que desee.
- Plantear cualquier otra funcionalidad añadida que desee.
- Añadir comentarios en el código.
