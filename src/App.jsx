import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global.js"
import { defaultTheme } from "./styles/themes/defaultTheme.js"

export const App = () => {
  return(
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <GlobalStyle />
      </ThemeProvider>
    </div>
    )
}
