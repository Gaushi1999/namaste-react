import { LOGO_URL } from "../utils/constant";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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