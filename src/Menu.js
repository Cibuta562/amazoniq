import React, { useState, useEffect } from 'react';
import './Menu.css';
import bg from "./assets/18.png"

const Menu = () => {
    const [scrolled, setScrolled] = useState(false);

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


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <nav className="navbar">
            <div className="navbar-header">
                <div className="navbar-logo">
                    <img src={bg} alt="Logo" />
                </div>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    &#9776; {/* Hamburger menu icon */}
                </button>
            </div>
            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <a href="#section1">OUR FAMILY</a>
                <a href="#section2">DRINKS</a>
                <a href="#section3">MERCH & BEANS</a>
            </div>
        </nav>
    );
};

export default Menu;
