import Food from "./Food"

const Menus = (props) => {
  console.log(props)
  return (
    <div className="menusContainer">
        {props.foodItems.map((foodItem, index) =>
          <Food key={index} eachFood={foodItem.items[0]}/>
        )}
    </div>
  )
}
export default Menus;