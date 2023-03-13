import React, { useState } from "react";
import { Input } from "./FormularioStyles";
import Tarjeta from "./Tarjeta";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [validar, setValidar] = useState(false);
  const [carta, setCarta] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(nombre);
    console.log(color);

    let validarTresCaracteres = false;
    let validarSeisCaracteres = false;

    if (nombre.trim().length >= 3) {
      console.log("Es Mayor a 3 Caracteres");
      validarTresCaracteres = true;
    } else {
      console.log("Es Menor a 3 Caracteres");
      validarTresCaracteres = false;
    }

    if (color.length >= 6) {
      console.log("Es Mayor a 6 Caracteres");
      validarSeisCaracteres = true;
    } else {
      console.log("Es Menor a 6 Caracteres");
      validarSeisCaracteres = false;
    }

    if (validarTresCaracteres === true && validarSeisCaracteres === true) {
      setValidar(false);
      setCarta(true);
    } else {
      setValidar(true);
      setCarta(false);
    }

    setNombre("");
    setColor("");
  };

  return (
    <>
      <form id="formu" onSubmit={handleSubmit}>
        <Input
          type={"text"}
          placeholder={`Ingrese su Nombre: `}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <Input
          type={"text"}
          placeholder={`Ingresar tu Color Favorito (formato HEX) `}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>

      <div>
        <button form="formu" btn="submit">
          Enviar
        </button>
      </div>

      {validar && <p>Por favor chequea que la información sea correcta</p>}
      {carta && <Tarjeta name={nombre} color={color} />}
    </>
  );
};

export default Formulario;
