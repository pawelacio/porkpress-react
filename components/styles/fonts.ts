import { css } from 'styled-components';

const fontFaces = css`

  @font-face {
    font-family: 'OpenSans';
    src: url('/static/fonts/open-sans/OpenSans-Regular.woff2') format('woff2'),
        url('/static/fonts/open-sans/OpenSans-Regular.woff') format('woff'),
        url('/static/fonts/open-sans/OpenSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url('/static/fonts/open-sans/OpenSans-SemiBold.woff2') format('woff2'),
        url('/static/fonts/open-sans/OpenSans-SemiBold.woff') format('woff'),
        url('/static/fonts/open-sans/OpenSans-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url('/static/fonts/open-sans/OpenSans-Bold.woff2') format('woff2'),
        url('/static/fonts/open-sans/OpenSans-Bold.woff') format('woff'),
        url('/static/fonts/open-sans/OpenSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url('/static/fonts/open-sans/OpenSans-Light.woff2') format('woff2'),
        url('/static/fonts/open-sans/OpenSans-Light.woff') format('woff'),
        url('/static/fonts/open-sans/OpenSans-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

`;

export default fontFaces;
