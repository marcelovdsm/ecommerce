import { Header } from "./components/Header"
import { ShoppingCartSimple } from "@phosphor-icons/react"

export const App = () => {
  return(
    <div>
      <Header />
      <ShoppingCartSimple size={32} color="#ab8787" />
    </div>
    )
}
