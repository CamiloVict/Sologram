import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans:wght@100&display=swap");

  box-sizing: border-box;
  font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*, *::before, *::after {
  box-sizing: inherit;
}

ul, li, h1, h2, h3, p, button {
  margin: 0;
}

ul {
  list-style: none;
  padding:0;
}

button {
  background: transparent;
  border: 0;
  outline: 0;
}

body {
  background: #fefefe;
  height: 100vh;
  margin: 0 auto;
  max-width: 500px;
  overscroll-behavior: none;
  width: 100%;
}

#app {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  overflow-x: hidden;
  min-height: 100vh;
  padding-bottom: 10px;
}

`;
