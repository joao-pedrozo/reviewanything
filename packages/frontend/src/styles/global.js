import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
        font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    a {
        cursor: pointer;
        text-decoration: none;
        color: #e74c3c;
    }

    .DraftEditor-root ~ div {
        div {
            display: flex;
        }
    }
`;

export default GlobalStyles;
