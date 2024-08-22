import React, { useState, useEffect } from 'react';
import './menuPreview.css';
import bg from "./assets/AMAZONIQ INLINE COAL CLEAR.svg";
import { Link } from "react-router-dom";

const MenuPreview = () => {
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
                        <img src={bg} alt="Logo" className="navbar-img-preview"/>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default MenuPreview;
