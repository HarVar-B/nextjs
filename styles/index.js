import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: Poppins, sans-serif;
        -ms-overflow-style: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    body {
        background: ${p=>`linear-gradient(90deg, ${p.theme.colors.softPeach}, ${p.theme.colors.aquaHaze} 50%)`};
        transition: all 0.50s linear;
    }

    h1, h2 {
        font-family: 'Abril Fatface', cursive;
        font-weight: 400;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`
