import {Link} from 'react-router-dom'


const Navigation = () => {

    return(
    <nav className="container">
    <div className="logo">
    <img src="public/images/brand_logo.png" alt="logo" />
    </div>
    <ul className="hover:cursor-pointer ">
      <Link to={'/menu'}>
      <li  className= "hover:scale-125 transition-all hover:text-green-500">Menu</li>
      </Link>
      <Link to={'/about'}>
      <li  className= "hover:scale-125 transition-all hover:text-green-500">About</li>
      </Link>
      <Link to={'/location'}>
      <li  className= "hover:scale-125 transition-all hover:text-green-500">Location</li>
      </Link>
      <Link to={'/contact'}>
      <li  className= "hover:scale-125 transition-all hover:text-green-500">Contact</li>
      </Link>
    </ul>

    <button>Login</button>

  </nav>
    );
};

export default Navigation;