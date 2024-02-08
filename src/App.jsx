import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global.js"
import { defaultTheme } from "./styles/themes/defaultTheme.js"
import { Body } from "./components/Body/index.jsx"

export const App = () => {
  return(
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Body />
        <GlobalStyle />
      </ThemeProvider>
    </div>
    )
}
