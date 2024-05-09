const Food = (props) => {
  console.log(props.eachFood)
  console.log(props.eachFood[0].imageURL)
  return (
    <>
      {props.eachFood.map((item, index) => 
        <div className="insideFoodContainer" key={index}>
          <div className="foodName">{item.name}</div>
          <div className="foodDescription">{item.description}</div>
          <div className="foodCalories">{item.calories}</div>
          <img className="foodImg" src={item.imageURL} alt={item.description} />
          <div className="foodPrice">{item.price}</div>
          
        </div>
      )}
  </>
  )
}
export default Food