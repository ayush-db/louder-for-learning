import React,{useState}from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="navbar">
            <div className = "navbar-container">
                <div className="navbar-brand">
                <Link to="/">Louder for Learning</Link>
                </div>
            </div>
            <div className="navbar-menu">
                <div className='navbar-toggle'>
                <button onClick={toggleMenu} aria-label="toggle menu">
                    {isOpen ? 'Close': 'Menu'}
                </button>
                </div>
            </div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about-me">About Me</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/products">Products</Link>
                </li>
            </ul>
            </nav>
    );
};
export default Navbar;
                