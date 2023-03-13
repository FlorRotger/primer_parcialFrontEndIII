import React from "react";
import { Cartel, Mensaje, Nombre, UpperCase } from "../styles/TarjetaStyles";



const Tarjeta = (props) => {
  return (
   
    <Cartel>
      <Nombre>Hola {props.name} </Nombre>
      <Mensaje>Tu comida favorita es:
        <br/>
         <UpperCase>{props.food}</UpperCase></Mensaje>
    </Cartel>
   
  );
};

export default Tarjeta;
