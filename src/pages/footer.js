import "./footer.css"
import {Link} from "react-router-dom";
import Family from "./family";
import Meniu from "./meniu";
import MerchAndBeans from "./merchAndBeans";

import logo from "../assets/Amazoniq Icon Seashell White.svg"
import logoInsta from "../assets/socials-footer/INSTAGRAM (1).svg"
import logoFacebook from "../assets/socials-footer/FACEBOOK (1).svg"
import logoTikTok from "../assets/socials-footer/TIKTOK (1).svg"
import logoWhatsApp from "../assets/socials-footer/WHATSAPP (1).svg"
import mapFooter from "../assets/socials-footer/Map asset dark.svg"
import logoMC from "../assets/socials-footer/ma_symbol_opt_73_2x.png"
import logoVisa from "../assets/socials-footer/Visa_Brandmark_White_RGB_2021.png"
import logoAmazoniq from "../assets/product-images-webp/seashell white inline clear.webp"
import vine from "../assets/product-images-webp/VINE nou pentru SUBSOL.webp"

function Footer() {

    const scrollToPosition = () => {

        // Get the current screen height (window height)

        const timer = setTimeout(() => {
        const screenWidth = window.innerWidth;

        // Define scroll heights based on screen height (you can customize this logic)
        let scrollHeight;
        if (screenWidth >= 720) {
            scrollHeight = 2000; // For large screens
        } else {
            scrollHeight = 400; // For mobile/smaller screens
        }

        // Scroll to the specific height smoothly
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
        }, 3000);

    };

    return(
        <div className="footer-cont">
            <img className="footer-vine-1" src={vine} alt="vine"/>
            <img className="footer-vine-2" src={vine} alt="vine"/>
        <div className="footer-top-section-container">
            <div className="footer-top-logo">
                AMAZONIQ
            </div>
            <div className="footer-top-line">

            </div>
        </div>
        <div className="footer-container">
            <div className="image-container">
            <img className="logo-amazoniq" src={logoAmazoniq} alt="logo-amz"/>
            </div>
            <div className="footer-section-1">
                Coltisorul de specialitate, unde se bea cafea buna, se rade mult si se leaga prietenii magice.
                <div className="footer-socials-container">
                    <a href="https://www.instagram.com/amazoniq.coffee/?fbclid=IwAR1pbYfi03IQHg0bD3XjdvvDvM3l84GLKfD-0e97f0pbSFiE_QdXpEwwUXs_aem_AZ5BwviwCY5PtQM1oLxtgX-46LtT1Cc5zdea2iL3k7h08ZFczE4I-xCkgj0ZyBx_h5djegnAqPENCKAse9TH2NDd" target="_blank" className="logo-footer-social1"><img src={logoInsta} alt="logo-social"/></a>
                    <a href="https://www.facebook.com/amazoniq.coffee" target="_blank" className="logo-footer-social1"><img src={logoFacebook} alt="logo-social"/></a>
                    <a href="https://www.tiktok.com/@amazoniq.coffee" target="_blank" className="logo-footer-social1"><img src={logoTikTok} alt="logo-social"/></a>
                    <a href="https://chat.whatsapp.com/DaEV4nslvgG08c7JAPHz5n" target="_blank" className="logo-footer-social"><img src={logoWhatsApp} alt="logo-social"/></a>
                </div>
            </div>
            <div className="footer-mobile-line-top"></div>
            <div className="footer-section-2">
                <p className="footer-heading">MENU</p>
                <Link to="/under-construction/our-family">
                    <p className="footer-p">Our family</p>
                </Link>
                <Link to="/under-construction/meniu">
                    <p  className="footer-p">Drinks</p>
                </Link>
                <Link to="/under-construction/merch-and-beans">
                    <p  className="footer-p">Shop with us</p>
                </Link>
            </div>
            <div className="footer-section-3">
                <p className="footer-heading">INFO</p>
                <a href="/under-construction/our-family" onClick={scrollToPosition}><p  className="footer-p">Contact</p></a>
                <a href="/under-construction/prelucrarea-datelor"><p  className="footer-p">Privacy Policy</p></a>
                <a href="/under-construction/cookies"><p  className="footer-p">Cookies Policy</p></a>
                {/*<a href="#"><p  className="footer-p">Termeni si conditii</p></a>*/}
            </div>
            <div className="footer-mobile-line-bottom"></div>
        </div>
            <div className="footer-beans">
                <p className="footer-beans-p">DON’T FORGET TO PICK YOUR BEANS FOR HOME!</p>
            </div>
            <div className="footer-bottom-section-container">
                <div className="footer-bottom-line">

                </div>
                <div className="footer-bottom-logo">
                    <img className="logo-footer" src={logo} alt="logo-footer"/>
                </div>
            </div>
            <div className="footer-legal-section-container">
                <div className="footer-legal-text">
                   <a><p className="footer-legal-p">
                        Copyright © 2024 AMAZONIQ Coffee SRL
                    </p></a>
                    <a><p className="footer-legal-p">
                        All Rights Reserved
                    </p></a>
                </div>
                <div className="footer-legal-logo">
                    <div className="cards-footer-cont">
                        <img src={logoVisa} className="logo-visa" alt="logoMC"/>
                        <img src={logoMC} className="logo-mc" alt="logoVisa"/>
                    </div>
                </div>
                <div className="footer-anpc-section-container">
                    <div className="footer-anpc-text">
                        <a href="https://www.generationsalez.com/" target="_blank"><p className="footer-anpc-p">
                            Powered by Generation Salez
                        </p></a>
                        <a><p className="footer-anpc-p">
                            Designed by Cristina-Maria Spiridon
                        </p></a>
                    </div>
                    <div className="footer-anpc-logo">
                        <div className="footer-anpc-cont">
                                <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
                                    <img className="anpc-img1" src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png" alt="Solutionarea Alternativa a Litigiilor"/>
                                </a>
                                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow" >
                                    <img className="anpc-img2"  src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png" alt="Solutionarea Online a Litigiilor"/>
                                </a>
                        </div>
                    </div>
                    <div className="footer-anpc-mobile-cont">
                        <p className="footer-anpc-p-mobile-1">
                            Copyright © 2024 AMAZONIQ Coffee SRL
                        </p>
                        <p className="footer-anpc-p-mobile-1">
                            All Rights Reserved
                        </p>
                    <a href="https://www.generationsalez.com/" target="_blank" rel="noreferrer"><p className="footer-anpc-p-mobile">
                        Powered by Generation Salez
                    </p></a>
                    <a><p className="footer-anpc-p-mobile-2">
                        Designed by Cristina-Maria Spiridon
                    </p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer