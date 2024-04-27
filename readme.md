# Instrucciones para ejecutar el proyecto Monkey Testing v2 con Cypress E2E

Este proyecto utiliza Cypress, un framework de pruebas end to end, en este caso se usa para realizar pruebas de "Monkey Testing" en una aplicación web llamada [losestudiantes](https://losestudiantes.co).

## Requisitos previos

Antes de ejecutar las pruebas, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js y npm: Cypress requiere Node.js y npm para funcionar. Puedes descargar e instalar Node.js desde [aquí](https://nodejs.org/).
- Cypress: Instala Cypress globalmente ejecutando `npm install -g cypress`. Esto te permitirá ejecutar las pruebas desde la línea de comandos.

Las versiones usadas al realizar el proyecto son:
   ```
   Cypress package version: 13.7.1
    Cypress binary version: 13.7.1
    Electron version: 27.1.3
    Bundled Node version: 18.17.1
    Node version: 18.20.0
    NPM version: 10.5.2
   ```


## Configuración del proyecto

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:
   ```
   git clone https://github.com/AlbionDraig/monkeyTesting.git
   ```

2. Navega hasta el directorio del proyecto:
   ```
   cd rutaDirectorio/carpetaDelProyecto
   ```

3. Instala las dependencias del proyecto ejecutando:
   ```
   npm install
   ```

## Ejecución de las pruebas

Una vez se haya configurado el proyecto, se puede ejecutar las pruebas de Monkey Testing con Cypress. Siguiendo estos pasos:

1. Abre una terminal en el directorio del proyecto si aún no se ha hecho.

2. Ejecuta Cypress en modo de línea de comandos con el siguiente comando:
   ```
   cypress run --spec "cypress/e2e/monkey_testing_v2.cy.js"
   ```

   Este comando ejecutará las pruebas en modo de línea de comandos y generará un informe al finalizar.

## Visualización de resultados

Después de que las pruebas se completen, Cypress generará un informe con los resultados en la terminal. Además, si hay algún fallo, se generará una carpeta llamada `screenshots` que contendrá capturas de pantalla de la aplicación en el momento del fallo.