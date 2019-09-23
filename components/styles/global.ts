import { createGlobalStyle } from 'styled-components';

import fontFaces from './fonts';

export const GlobalStyle = createGlobalStyle`

  ${ fontFaces }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'OpenSans';
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }
`

export default GlobalStyle;