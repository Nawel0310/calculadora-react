import React from "react";

//TO-DO: Crear otro componente para poder reutilizar los que ya existen.
//Podrían reutilizarse algunos botones en otros.
//Hacer un event listener para que interactue con las flechas del teclado.

export function OperatorButtons({clase_botones, clase_boton, operators, handleButtonClick}) {
  return (
    <div id={clase_botones}>
      {operators.map((op) => (
        <button
          className={clase_boton}
          type="button"
          key={op}
          onClick={() => handleButtonClick(op)}
        >
          {op}
        </button>
      ))}
    </div>
  );
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
