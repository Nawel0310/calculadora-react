import React from "react";

export function NumericalButtons({ numbers, handleButtonClick, handleResult }) {
  return (
    <div id="botones-numeros">
      {numbers.map((num) => (
        <button
          className="boton"
          type="button"
          key={num}
          onClick={() => handleButtonClick(num)}
        >
          {num}
        </button>
      ))}
      <button class="boton-resultado" type="button" onClick={handleResult}>
        =
      </button>
    </div>
  );
}

export function OperatorButtons({operators,handleButtonClick}){
    return( 
    <div class="botones-operadores">
    {operators.map((op) => (
      <button
        class="boton-operador"
        type="button"
        key={op}
        onClick={() => handleButtonClick(op)}
      >
        {op}
      </button>
    ))}
  </div>)
}

export function ExtraOperatorButtons({operators,extraFunction}){
    return( 
    <div class="botones-operadores">
    {operators.map((op) => (
      <button
        class="boton-operador"
        type="button"
        key={op}
        onClick={extraFunction[op]}
      >
        {op}
      </button>
    ))}
  </div>)
}
