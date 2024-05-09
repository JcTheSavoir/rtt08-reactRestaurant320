import './App.css';
import Menus from './components/Menus';
import menu from './models/menu'
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {


  const [menuData, setMenuData] = useState(menu);
  return (
    <div className="App">
      <h1 className='topTitle'>Welcome to The Garden Of Olives</h1>
      <Navbar navItems={menu}/>
      <Menus foodItems={menu}/>


    </div>
  );
}

export default App;
