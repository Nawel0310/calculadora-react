import React, { useState } from "react";
import {
  NumericalButtons,
  OperatorButtons,
  ExtraOperatorButtons,
} from "./Botones.jsx";

//import "./assets/css/aos.min.css";
import "./assets/js/aos.min.js";
import "./assets/js/bs-init.js";

import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/js/bootstrap.min.js";
import "./assets/css/styles.css";

export function Calculadora() {
  //Definimos la variable que representa el Display
  //Ademas definimos la función para modificar el estado.
  const [displayValue, setDisplayValue] = useState(""); //Definimos que el estado incial será la cadena vacía

  //Definimos la función que, al hacer click en un botón, almacene el valor dentro del Display:
  const handleButtonClick = (value) => {
    //Al hacer click en un botón, se obtiene un value y se almacena dentro
    //del display
    //Guardo el display como una cadena siempre:
    const displayString = (displayValue + value).toString();
    setDisplayValue(displayString); //Este "+" representa una concatenación y no el operador matemático
  };

  return (
    <section class="d-flex flex-column justify-content-center" id="section_id">
      <div class="container d-flex flex-column justify-content-center align-items-center contenedor-carcasa">
        <div
          class="d-flex flex-column align-items-center"
          data-aos="fade-up"
          data-aos-duration="250"
          id="calculadora-carcasa"
        >
          <div
            class="d-flex flex-column align-items-center"
            id="contenedor-digital"
          >
            <div
              class="d-flex flex-row justify-content-end align-items-center"
              id="digital"
            >
              <h1 class="result">{displayValue}</h1>
            </div>
          </div>
          <div class="d-flex justify-content-center" id="all-botones">
            <NumericalButtons
              numbers={["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"]}
              handleButtonClick={handleButtonClick}
              handleResult={() => {
                try {
                  const result = eval(displayValue);
                  if (!Number.isFinite(result)) {
                    throw new Error("Operación inválida");
                  }
                  setDisplayValue(result);
                  console.log("La operación fue válida.");
                } catch (error) {
                  setDisplayValue("ERROR");
                }
              }}
            ></NumericalButtons>

            <OperatorButtons
              operators={["+", "-", "*", "/"]}
              handleButtonClick={handleButtonClick}
            ></OperatorButtons>

            <ExtraOperatorButtons
              operators={["DEL", "CLR", "(", ")"]}
              //Hacemos un objeto con valores que devuelven funciones.
              extraFunction={{
                DEL: () => {
                  //Obtengo el valor actual del display como si fuera una cadena.
                  const displayString = displayValue.toString();
                  //Elimino el último elemento de la cadena con la función slice
                  const newValue = displayString.slice(0, -1);
                  //Actualizo el estado con el nuevo valor del display
                  setDisplayValue(newValue);
                },
                CLR: () => setDisplayValue(""),
                "(": () => handleButtonClick("("),
                ")": () => handleButtonClick(")"),
              }}
            ></ExtraOperatorButtons>
          </div>
        </div>
      </div>
    </section>
  );
}
