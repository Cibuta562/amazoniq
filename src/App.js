import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import insta from "./assets/Instagram Black on Seashell White.svg";
import meta from "./assets/Whatsapp Black On Seashell White.svg";
import tiktok from "./assets/TikTok Black On Seashell White.svg";
import heart from "./assets/HEART.svg"

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
                <h1 className="hero-heading">WE'RE BREWING SOMETHING FOR YOU</h1>
                <br/>
                <br/>
                <br/>
                <p className="hero-p">MEANWHILE, PLEASE ENJOY A COFFEE</p>
                <div className="justify">
                <p className="hero-p">AND JOIN OUR AMAZONIQ FAMILY
                </p>
                <img className="heart-img" src={heart}/>
                </div>
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
