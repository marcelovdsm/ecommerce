export const Card = ({item}) => {
  return (
    <div>
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
    </div>
  )
}
