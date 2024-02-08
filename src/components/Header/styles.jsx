import styled from "styled-components";

export const HeaderComponent = styled.div`
`

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.primaryColor};

  a{
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.baseTextLight};
    transition: .2s;
  }
  
  a:hover {
    color: ${(props) => props.theme.tertiaryColor};
  }

  div {
    display: flex;
    gap: 1rem;
  }
`