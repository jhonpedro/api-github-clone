import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-yellow: #FFCE00;
    --color-red: #D03434;
    --color-green: #467424;
    --color-dark: #292929;
    --color-darker: #1F1F1F;
    --color-grey: #A5A5A5;
    --color-white: #fbfbfb;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--color-dark);
    color: var(--color-white);
  }

  body, input {
    font-family: Poppins, sans-serif;
  }
`
