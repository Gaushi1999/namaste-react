import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import logoImage from './download.png';
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [loginBtnName, setLoginBtnName] = useState('Login');
  const { name } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="m-2">
    <div className='flex justify-between bg-green-200 shadow-lg'>
      <div className="logo-container">
        <img 
          className='w-56 h-24 m-2' 
          src={logoImage}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="m-2"><Link to="/">Home</Link></li>
          <li className="m-2"><Link to="/about">About</Link></li>
          <li className="m-2"><Link to="/contact">Contact</Link></li>
          <li className="m-2"><Link to="/grocery">Grocery store</Link></li>
          <li className="m-2 font-bold"><Link to="/checkout">Cart - {cartItems.length}</Link></li>
          <li className="m-2 cursor-pointer"
            onClick={() => setLoginBtnName(loginBtnName === 'Login' ? "Logout" : "Login")}
          >{loginBtnName}</li>
        </ul>
      </div>
    </div>
    <div className="mt-2 text-center py-3">
      <h3><i>Hello {name} </i></h3>
      <i>Decide what you want to eat , we are ready to deliver that for you.</i>
    </div>
    </div>
  );
};

export default Header;