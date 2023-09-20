import { LOGO_URL } from "../utils/constant";


const Header = () => (
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
        </ul>
      </div>
    </div>
)

export default Header;