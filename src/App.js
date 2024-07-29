import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import insta from "./assets/instagram_1384015.png";
import meta from "./assets/facebook_4401403.png";
import tiktok from "./assets/tik-tok_4138198.png";

import './App.css';
import Menu from "./Menu";

const brewList = [
    "Cappuccino",
    "Flat White",
    "Cold Brew",
    "Espresso",
    "Latte",
];

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeState, setFadeState] = useState('fade-in');

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState('fade-out');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % brewList.length);
                setFadeState('fade-in');
            }, 1500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <div className="bg-overlay"></div>
            <div className="content">
                <Menu />
                <h1 className="hero-heading"></h1>
                <h1 className="hero-heading">Hey! We're brewing something for you!</h1>
                <br/>
                <p className="hero-p">Meanwhile, please enjoy a coffee</p>
                <p className="hero-p">and join our Amazoniq family  💚</p>
                {/*<p className={`hero-p-brew ${fadeState}`}>{brewList[currentIndex]} in our comunity</p>*/}
                <div className="media-icons">
                    <img className="social-icon" src={insta}/>
                    <img className="social-icon"  src={meta}/>
                    <img className="social-icon"  src={tiktok}/>
                </div>
            </div>
        </div>
    );
}

export default App;
