import React from 'react';
import insta from "../assets/Instagram Black on Seashell White.svg";
import meta from "../assets/Whatsapp Black On Seashell White.svg";
import tiktok from "../assets/TikTok Black On Seashell White.svg";
import heart from "../assets/HEART.svg"

import '../App.css';
import MenuPreview from "../menuPreview";


function Loading() {

    return (
        <div className="App">
            <MenuPreview/>
            <div className="bg-overlay"></div>
            <div className="content">
                <h1 className="hero-heading">WE ARE BREWING SOMETHING FOR YOU!</h1>
                <p className="hero-p" >MEANWHILE, PLEASE ENJOY A COFFEE</p>
                <div className="justify">
                    <p className="hero-p-j">AND JOIN OUR AMAZONIQ FAMILY
                    </p>
                    <img className="heart-img" src={heart} alt="heart-img"/>
                </div>
                <div className="media-icons">
                    <a href="https://www.instagram.com/amazoniq.coffee/?fbclid=IwAR1pbYfi03IQHg0bD3XjdvvDvM3l84GLKfD-0e97f0pbSFiE_QdXpEwwUXs_aem_AZ5BwviwCY5PtQM1oLxtgX-46LtT1Cc5zdea2iL3k7h08ZFczE4I-xCkgj0ZyBx_h5djegnAqPENCKAse9TH2NDd" target="_blank" rel="noreferrer">
                        <img className="social-icon" src={insta} alt="insta"/>
                    </a>
                    <a href="https://chat.whatsapp.com/DaEV4nslvgG08c7JAPHz5n" target="_blank" rel="noreferrer">
                        <img className="social-icon"  src={meta} alt="meta"/>
                    </a>
                    <a href="https://www.tiktok.com/@amazoniq.coffee" target="_blank" rel="noreferrer">
                        <img className="social-icon"  src={tiktok} alt="tiktok"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Loading;
