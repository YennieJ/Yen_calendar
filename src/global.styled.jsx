import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body{
  text-align: center;
}
input,button{border:none;outline:none}
input{
  font-size: 1rem;
  border-bottom: 1px solid black;
}
button{cursor:pointer}
ul,li{list-style:none;
margin: 0;
padding:0}
`;

export default GlobalStyle;
