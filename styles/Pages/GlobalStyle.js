import  { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
--maxWidth:1000px;
background-color: #fff;
    color:rgb(5, 5, 5);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-rendering: optimizeLegibility;
}
a{
    text-decoration:none;
    color:var(--black);
}
a:hover{
    text-decoration:underline;
}
body{
    font-size: 12px;
    font-family:Dosis;    
    width: 100vw;
    height: 100vh;
    max-width:100%;
    margin:0;
    padding:0;
}
button{
    text-transform:none;
    border-radius:0;
}
@media (max-width: 420px) {
    body {
        font-size:10px;
    }
  }
`;


