import React,{useState}from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="bg-white shadow">
            <div className = "text-2xl font-bold text-blue-600">
                <Link to="/">Louder for Learning</Link>
            </div>
            <div className="md-hidden">
                <button onClick={toggleMenu} aria-label="toggle menu">
                    {isOpen ? < x size={24} /> : <menu size={24} />}
                </button>
            </div>
            <ul className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                <li className="px-4 py-2 hover:bg-gray-200 rounded">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 rounded">
                    <Link to="/about-me">About Me</Link>
                </li>
            </ul>
            </nav>
    );
};
export default Navbar;
                