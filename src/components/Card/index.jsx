import { CardComponent } from "./styles"

export const Card = ({item}) => {
  return (
    <CardComponent>
      <div>
        {item.map((val) => (
          <div key={val.id}>
            <div>
              <img src={val.img} alt="" />
              <h2>{val.title}</h2>
              <p>{val.description}</p>
              <p>{val.price}</p>
            </div>
          </div>
        ))}
      </div>
    </CardComponent>
  )
}
