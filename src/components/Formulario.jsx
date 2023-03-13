import React, { useState } from "react";
import {
  Form,
  Titulo,
  Container,
  Input,
  Button,
  Body,
} from "../styles/FormularioStyles";
import Tarjeta from "./Tarjeta";


//se crean los estados
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [comida, setComida] = useState("");
  const [validar, setValidar] = useState(false);
  const [tarjeta, setTarjeta] = useState(false);

  //se controlan los eventos
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(nombre);
    console.log(comida);

    let validarTresCaracteres = false;
    let validarSeisCaracteres = false;

    //nombre
    if (nombre.trim().length >= 3) {
      console.log("Es Mayor a 3 Caracteres");
      validarTresCaracteres = true;
    } else {
      console.log("Es Menor a 3 Caracteres");
      validarTresCaracteres = false;
    }
    //comida
    if (comida.length >= 2) {
      console.log("Es Mayor a 2 Caracteres");
      validarSeisCaracteres = true;
    } else {
      console.log("Es Menor a 2 Caracteres");
      validarSeisCaracteres = false;
    }

    //validacion
    if (validarTresCaracteres === true && validarSeisCaracteres === true) {
      setValidar(false);
      setTarjeta(true);
    } else {
      setValidar(true);
      setTarjeta(false);
    }
  };

  return (
    <Body >
      <Form id="formu" onSubmit={handleSubmit}>
        <Titulo>Comida favorita</Titulo>

        <Container>
          <Input
            type={"text"}
            placeholder={`Ingresa tu nombre: `}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <Input
            type={"text"}
            placeholder={`Ingresa tu comida favorita: `}
            value={comida}
            onChange={(e) => setComida(e.target.value)}
          />

          <Button form="formu" btn="submit">
            Enviar
          </Button>
        </Container>
        {validar && (
        <p
          style={{
            display: "flex",
            alignSelf: "flex-end",
            position: "absolute",
            color: "red"
          }}
        >
          Por favor chequea que la información sea correcta.
        </p>
      )}

      {tarjeta && <Tarjeta name={nombre} food={comida}/>}
        
      </Form>

      


    </Body>
  );
};

export default Formulario;
