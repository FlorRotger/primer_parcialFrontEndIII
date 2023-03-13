import styled, { css } from "styled-components";


export const Body =styled.body`
display: flex;
justify-content: center;
align-items: center;

`;

export const Form = styled.form`
margin-top: 100px;
margin-bottom: 200px;
padding: 45px;
width: 360px;
background: #FFFFFF;
box-shadow: 0 0 20px;
position: relative;

`;

export const Titulo = styled.div`
text-align: center;
color: #1C1C1C;
font-family: "Roboto", sans-serif;
font-size: 30px;

`;
export const Container = styled.div`
margin-top: 80px;
text-align: center;
`;

export const Button = styled.button`
font-family: "Roboto", sans-serif;
font-size: 14px;
text-transform: uppercase;
outline: 0;
background: #4CAF50;
padding: 15px;
width: 100%;
border: 0;
color: #FFFFFF;
cursor: pointer;

:hover{
    background: #BEF781;
    box-shadow: 9px #848484;
}

`;

export const Input = styled.input` 
 outline: 0;
 background: #E6E6E6;
 width: 100%;
 border: 0;
 margin: 0 0 15px;
 padding: 15px;
 box-sizing: border-box;
 font-size: 14px
`




