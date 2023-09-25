import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [loginBtnName, setLoginBtnName] = useState('Login');

  return (
    <div className='flex justify-between bg-pink-200 shadow-lg m-2 md:bg-yellow-200 lg:bg-green-200'>
      <div className="logo-container">
        <img 
          className='w-56 h-24 m-2' 
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="m-2"><Link to="/">Home</Link></li>
          <li className="m-2"><Link to="/about">About</Link></li>
          <li className="m-2"><Link to="/contact">Contact</Link></li>
          <li className="m-2"><Link to="/grocery">Grocery store</Link></li>
          <li className="m-2">Cart</li>
          <li
            onClick={() => setLoginBtnName(loginBtnName === 'Login' ? "Logout" : "Login")}
          >{loginBtnName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;