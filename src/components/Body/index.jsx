import { BodyComponent } from "./styles"
import { data } from '../../Data.jsx'
import { useState } from "react"
import { Card } from "../Card/index.jsx"

export const Body = () => {
  const [item, setitems] = useState(data)

  return(
    <BodyComponent>
      <Card item={item}/>
    </BodyComponent>
  )
}