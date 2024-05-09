import Food from "./Food"

const Menus = (props) => {
  console.log(props)
  return (
    <div className="menusContainer">
        {props.foodItems.map((foodItem, index) =>
          <Food key={index} eachFood={foodItem.items} foodType={foodItem.type}/>
        )}
    </div>
  )
}
export default Menus;