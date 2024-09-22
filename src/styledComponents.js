import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  font-size:62.5%;
}

* {
  box-sizing: border-box;
  margin:0;
  padding:0;
}
 body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
