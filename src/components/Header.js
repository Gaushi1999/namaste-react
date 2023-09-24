import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [loginBtnName, setLoginBtnName] = useState('Login');

  return (
    <div className='header'>
      <div className="logo-container">
        <img 
          className='logo' 
          src={LOGO_URL}
        />
      </div>
      <div className="nav-conatiner">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery store</Link></li>
          <li>Cart</li>
          <li
            onClick={() => setLoginBtnName(loginBtnName === 'Login' ? "Logout" : "Login")}
          >{loginBtnName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;