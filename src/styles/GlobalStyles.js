import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

html {
    --background: #222228;
    --title-bar: #37383a;
    --dark-grey: #2a2d31;
    --grey: #2f3236;
    --light-grey: #37383a;
    --lightest-grey: #595b5d;
    --primary-text: #e3e3e3;
    --secondary-text: #aeafb0;
    --first-color: #ff7568;
    --second-color: #c6a8ef;
    --third-color: #6ebfae;
    --fourth-color: #ffdb03;
    --fifth-color: #ff86ba;
    --apple-red: #ff5f57;
    --apple-green: #28c840;
    --apple-yellow: #febc2e;
    --scrollbar: hsla(208, 2%, 36%, .75);
    --page-icon: #efd81d;
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
