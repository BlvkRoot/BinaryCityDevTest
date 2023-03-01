import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

html, body, #root {
    min-height: 100%;
}

body{
    background-color: #002;
    color: #fff;
    -webkit-font-smoothing: antialiased !important;
}

body, input, button {
    color: #fff;
    font-size: 14px;
    font-familty: Ariel, Helvetica, sans-serif;
}

button{
  cursor: pointer;  
}

`;

