import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calculadora } from './Calculadora';

//Archivos de animación que no cargaron, revisar posteriormente.
//import "./assets/css/aos.min.css";
//import "./assets/js/aos.min.js";
//import "./assets/js/bs-init.js";

//Archivos de estilos y demás. Se cargan directamente en el HTML de la aplicación.
//import "./assets/bootstrap/css/bootstrap.min.css"; 
//import "./assets/bootstrap/js/bootstrap.min.js";
//import "./assets/css/styles.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculadora/>
  </React.StrictMode>
);
