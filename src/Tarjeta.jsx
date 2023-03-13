import React from "react";

const Tarjeta = (props) => {
  return (
    <div>
      <p>Hola {props.name}</p>
      <p>Sabemos que tu color Favorito es:</p>
      <p>{props.color}</p>
    </div>
  );
};

export default Tarjeta;
