import React, { useState, useEffect } from 'react';
import './Menu.css';
import bg from "./assets/AMAZONIQ INLINE COAL CLEAR.svg";
import { Link } from "react-router-dom";

const Menu = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <Link to="/" onClick={closeMenu}>
                        <div className="navbar-logo">
                            <img src={bg} alt="Logo" className="navbar-img"/>
                        </div>
                </Link>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {/* Toggle button content */}
                </div>
            </div>
            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/under-construction/our-family" onClick={closeMenu}>
                    OUR FAMILY
                </Link>
                <Link to="/under-construction/meniu" onClick={closeMenu}>
                    DRINKS
                </Link>
                <Link to="/under-construction/merch-and-beans" onClick={closeMenu}>
                    MERCH & BEANS
                </Link>
            </div>
        </nav>
    );
};

export default Menu;
