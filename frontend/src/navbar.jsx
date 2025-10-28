import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="brand-link">
                        <span className="brand-icon">🎓</span>
                        <span className="brand-text">Louder for Learning</span>
                    </Link>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-toggle">
                        <button 
                            onClick={toggleMenu} 
                            className="menu-button"
                            aria-label="toggle menu"
                        >
                            <span className={`hamburger ${isOpen ? 'active' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>

                    <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                                <span className="link-icon">🏠</span>
                                Home
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about-me" className="navbar-link" onClick={() => setIsOpen(false)}>
                                <span className="link-icon">👤</span>
                                About Me
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/products" className="navbar-link" onClick={() => setIsOpen(false)}>
                                <span className="link-icon">📦</span>
                                Products
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/articles" className="navbar-link" onClick={() => setIsOpen(false)}>
                                <span className="link-icon">📚</span>
                                Articles
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/articles/article1" className="navbar-link featured" onClick={() => setIsOpen(false)}>
                                <span className="link-icon">⭐</span>
                                Featured Article
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
                