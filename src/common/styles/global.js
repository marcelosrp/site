import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --background: #000;
    --white: #eee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
    --font: 'Epilogue', sans-serif;
    --light: 200;
    --normal: 300;
    --bold: 500;
    --extraBold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: var(--background);
    color: var(--white);
    font-family: var(--font);
    font-weight: var(--normal);
  }
`

export default GlobalStyles
