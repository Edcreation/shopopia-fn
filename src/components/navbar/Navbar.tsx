import { navbarItems } from "../../constants";
import { useState } from "react";
import './style.scss'
import BrowseBox from "./components/Browsebox";
import Logo from "../../../public/Shopopia.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar-container">
        <div className="container__logo"><img src={Logo} alt="ShopOpia_logo" /> ShopOpia</div>
        <div className="container__links">
            {navbarItems.map(item => <Link to={`/${item.value}`} key={item.value} onMouseEnter={() => item.text === "Browse" ? setIsHovered(true) : null}
      onMouseLeave={() => item.text === "Browse" ? setIsHovered(false) : null} className="container__links__link">{item.text}</Link> )}
        </div>
        <div className="container__btns">
            <Link to="/accounts/signup" className=" container__btns-signup">SignUp</Link>
            <Link  to="/accounts/login" className="container__btns-login">Login</Link>
        </div>
        { isHovered ? <BrowseBox setIsHovered={setIsHovered} /> : '' }
        
    </div>
  )
}

export default Navbar