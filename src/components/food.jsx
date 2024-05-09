const Food = (props) => {
  console.log(props.eachFood)
  console.log(props.eachFood[0].imageURL)
  return (
    <div className="foodCategoryContainer">
      {props.eachFood.map((item, index) => 
        <div className="specificFoodContainer" key={index}>
          <div className="foodName">{item.name}</div>
          <div className="foodDescription">{item.description}</div>
          <div className="foodCalories">{item.calories}</div>
          <img className="foodImg" src={item.imageURL} alt={item.description} />
          <div className="foodPrice">{item.price}</div>
          
        </div>
      )}

  

    </div>
  )
}
export default Food