import React from 'react';

const InputForm = ({type,placeHolder,isRequired, evt}) => {

  //tarea que ya no se muestre el contorno de la caja de texto
  return(
    <input
    className="focus:outline-none placeholder:text-slate-100 p-1 border-b border-b-2"
              type={type} 
              placeholder={placeHolder} 
              required={isRequired}
              onChange={evt} ></input>
  )
}

export default InputForm