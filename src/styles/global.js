import { createGlobalStyle } from 'styled-components'

/* eslint no-unused-expressions: 0 */
const GlobalStyles = createGlobalStyle`
    * {
        list-style: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: black;
    }
`

export default GlobalStyles