# TP PWA REACT GRUPO 14

## Integrantes

Salto, Tomas Agustin FAI-3635\
Salazar Daniel FAI-962\
Julian Tolosa fai-3182

## Documentación

### Index.js

En el script index.js se utiliza el método introducido en React18 `ReactDOM.createRoot` el cual inicializa el árbol de componentes. Este método permite la coexistencia de múltiples raíces de React en la misma página.

`root.render` es el método que efectivamente renderiza tu aplicación React en el DOM. Es un componente de React que ayuda a detectar prácticas problemáticas en tu código y las advertirá en el modo de desarrollo.

`reportWebVitals` este es un script que te proporciona información sobre el rendimiento de tu aplicación.

[![image.png](https://i.postimg.cc/C17975qr/image.png)](https://postimg.cc/CBZvLFJb)

### App.js

[![image.png](https://i.postimg.cc/Qd57TTLD/image.png)](https://postimg.cc/3k8WMWJf)

En este script se importan tanto los styles del archivo `App.css` tanto como el componente `TodoWrapper` encargado de encapsular a los componentes más pequeños/simples que podrían reutilizarse en otro lado de la aplicación.

Se crea una function `App` encargada de retornar el componente principal de la aplicación.

### Index.css

[![image.png](https://i.postimg.cc/vmFb9RfJ/image.png)](https://postimg.cc/v4zJFNPh)

En las primeras 3 líneas de codigo `@tailwind base`, `@tailwind components` y `@tailwind utilities` son directivas de PostCSS que indican al compilador de Tailwind debe incluir los estilos base, componentes y utilidades de Tailwind en tu hoja de estilos.

Luego se decalaran los estilos globales en la etiqueta `body` y se establece una fuente específica para los elementos `code` de mi página.

### Package.json

[![image.png](https://i.postimg.cc/8k6mDcSd/image.png)](https://postimg.cc/nMnDGHMM)

[![image.png](https://i.postimg.cc/FzrSjrYz/image.png)](https://postimg.cc/2bt3YfFN)

En este archivo se establece la configuaración del proyecto.

Elijo el nombre del proyecto `"name": "pwa"`,
`"version": "0.1.0"` indica la versión actual del proyecto.

Las dependencias son los paquetes que tu proyecto necesita para funcionar correctamente.
`FontAwesome` para los iconos, `Testing Library` realiza pruebas en React, `Flowbite y Flowbite-react` es una libreria de React para crear componentes, `React y React DOM` es la biblioteca fundamental de React, `UUID` genera id únicos y `Web Vitals` para medir las métricas de rendimiento web

En la sección de los scripts se definen comandos que se pueden ejecutar y realizar acciones como `npm start` que levantara el servidor de la aplicación.

La configuraciones proporcionan un entorno de desarrollo sólido para la aplicación web con React. En este caso se usan `ESLint` y `Browserslist` ayudan a mantener un código limpio y garantizar la compatibilidad con navegadores. `Autoprefixer` y `PostCSS` se encargan de procesar y optimizar tu CSS y `Tailwind CSS` es el framework que estás utilizando para estilizar tu aplicación de manera rápida y eficiente.

Por último estan las dependencias de desarrollo del usuario, `autoprefixer` y `postcss` y `tailwindcss`.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
