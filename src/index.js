import React from 'react'; // Import de React
import ReactDOM from 'react-dom/client'; // Import de ReactDOM para la manipulación del DOM
import './index.css'; // Styles
import App from './App'; // Import funcion App del archivo App.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // Metodo que recibe el html e inyecta el código en el index.html de public
  <React.StrictMode> {/* Es un componente en React que activa verificaciones y advertencias adicionales para los componentes hijos.*/}
    <App /> {/*Contenido de la función pasado al html*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
