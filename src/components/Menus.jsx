import Food from "./Food"

const Menus = (props) => {
  console.log(props)
  return (
    <div className="menusContainer">
        {props.foodItems.map((foodItem, index) =>
          <div className="foodCategoryContainer" key={index} >
            <h3 className="foodTypeTitle">{foodItem.type}</h3>
            <div className="specificFoodContainers">
              <Food eachFood={foodItem.items} foodType={foodItem.type}/>
            </div>
          </div>
        )}
    </div>
  )
}
export default Menus;