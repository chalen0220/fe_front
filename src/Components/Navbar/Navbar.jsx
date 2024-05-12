import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/all_products/logo.jpg"
import {HiShoppingCart} from 'react-icons/hi';
import { GiPolarBear } from 'react-icons/gi';
import { GiWinterHat } from 'react-icons/gi';
import { GiBearFace } from 'react-icons/gi';
import { BiLogIn } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { FcSearch } from 'react-icons/fc';
import { GiDolphin } from 'react-icons/gi';
import { PiCat } from 'react-icons/pi';
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
    const [menu, setMenu] = useState("")
    const {getTotalCartItems} = useContext(ShopContext);
    
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="navButton"> <IoIosArrowDropdown size={34} /> </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("bears")}}><Link to="/Bears"><GiBearFace size={36}/> Bears</Link>{menu === "bears"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("seasonal")}}><Link to="/Seasonal"><GiWinterHat size={36}/> Seasonal</Link>{menu === "seasonal"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("notBearsLand")}}><Link to="/NotBearsLand"><PiCat size={36}/> Not Bears (Land)</Link>{menu === "notBearsLand"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("notBearsSea")}}><Link to="/NotBearsSea"><GiDolphin size={36}/> Not Bears (Sea)</Link>{menu === "notBearsSea"? <hr/>:<></>}</li>
        </ul>

          <div className="right-nav">
            <div className="nav-user-login-cart">
              {localStorage.getItem("auth-token")
                ?<button onClick={()=>{localStorage.removeItem("auth-token"); window.location.replace("/")}}><BiLogOut /> Logout</button>
                :<Link className="logButton" to="/login"><button><BiLogIn /> Login</button></Link>}
              <Link className="navCart" to="/Cart"><HiShoppingCart size={22}/>Cart</Link>
              <div className="cart-count">{getTotalCartItems()}</div>
            </div>
            <div className="search-bar">
              <form action="/search" method="get">
                <input id="search-bar-input" type="text" placeholder="Find Fluff" name="search"/>
                <button><FcSearch size={16}/> Search</button>
              </form>
            </div>
          </div>
      </div>

      <div className="free">
        <div className="icon">
            <GiPolarBear size={40} />
        </div>
        <p className="fw-bold">Winter sale! Get 1 FREE Polar Bear on $150+ orders!</p>
      </div>
    </>
  )
}

export default Navbar
