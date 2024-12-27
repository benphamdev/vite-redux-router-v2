import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>

    )
}

export default Navbar;