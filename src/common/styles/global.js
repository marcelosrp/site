import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --background: #060101;
    --white: #eee;
    --purple: #700B97;
    --container: 100rem;
    --header: 10rem;
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
    scroll-padding-top: calc(var(--header) - 4rem);

    @media (min-width: 700px) {
      scroll-padding-top: var(--header);
    }
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
