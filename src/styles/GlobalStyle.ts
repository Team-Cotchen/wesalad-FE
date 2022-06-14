import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box; 
  outline: none;
}

body{
  font-family: 'Jua', sans-serif;
}

img{
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyle;
