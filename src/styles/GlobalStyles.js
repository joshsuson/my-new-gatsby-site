import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

html {
    --background: ${({ theme }) => theme.background};
    --title-bar: ${({ theme }) => theme.titleBar};
    --dark-grey: ${({ theme }) => theme.darkGrey};
    --grey: ${({ theme }) => theme.grey};
    --light-grey: ${({ theme }) => theme.lightGrey};
    --primary-text: ${({ theme }) => theme.primaryText};
    --secondary-text: ${({ theme }) => theme.secondaryText};
    --first-color: ${({ theme }) => theme.firstColor};
    --second-color: ${({ theme }) => theme.secondColor};
    --third-color: ${({ theme }) => theme.thirdColor};
    --fourth-color: ${({ theme }) => theme.fourthColor};
    --fifth-color: ${({ theme }) => theme.fifthColor};
    --apple-red: #ff5f57;
    --apple-green: #28c840;
    --apple-yellow: #febc2e;
    --scrollbar: ${({ theme }) => theme.scrollbar};
    --page-icon: #efd81d;
    --layout-border: ${({ theme }) => theme.layoutBorder};
    box-sizing: border-box;
    font-size: 10px;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    font-family: 'Fira Code', monospace;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    background-color: var(--background);
    height: ${props => (props.modalOpen ? "100vh" : "auto")};
    overflow: ${props => (props.modalOpen ? "hidden" : "auto")};
    padding-right: ${props => (props.modalOpen ? "15px" : "0")};
}

*::-webkit-scrollbar {
    width: 15px;
}

*::-webkit-scrollbar-track {
    background-color: var(--title-bar);
    border-radius: 0 5px 0 0;
}
*::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar);
}

h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

`

export default GlobalStyles
