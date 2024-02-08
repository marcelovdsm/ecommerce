import { HeaderComponent, HeaderNav } from "./styles"

export const Header = () => {
  return(
    <HeaderComponent>
      <HeaderNav>
          <a href="/">HOME</a>
        <div>
          <a href="/Cart">CART</a>
          <a href="/Contact">CONTACT US</a>
        </div>
      </HeaderNav>
    </HeaderComponent>
  )
}