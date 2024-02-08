import { HeaderComponent, HeaderNav } from "./styles"

export const Header = () => {
  return(
    <HeaderComponent>
      <HeaderNav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Cart">Cart</a></li>
          <li><a href="/Contact">Contact us</a></li>
        </ul>
      </HeaderNav>
    </HeaderComponent>
  )
}