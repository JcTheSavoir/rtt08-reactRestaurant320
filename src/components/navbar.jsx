import Button from "./Button";

const Navbar = (props) => {
  return (
    <div className="navbarContainer">
        {props.navItems.map((navItem, index) =>
          <Button key={index} eachTitle={navItem.type}/>
        )}
    </div>
  )
}
export default Navbar;