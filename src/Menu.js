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

    return (
        <div className={`menu ${scrolled ? 'scrolled' : ''}`}>
            <div className={`logo ${scrolled ? 'scrolled' : ''}`}>
                <img className="img-logo" src={bg}/>
            </div>
        </div>
    );
};

export default Menu;
