import React from "react"
import "./family.css"
import Menu from "../Menu";
import Footer from "./footer";
import logo from "../assets/Amazoniq Icon Seashell White.svg"
import heart from "../assets/Inima cu PUNCT.svg"
import arrowNext from "../assets/Phone reviews arrow.svg"
import reviewAssetWhite from "../assets/Amazoniq Icon Seashell White.svg"
import reviewAssetGreen from "../assets/Amazoniq Monkey Green.svg"
import vinesAll from "../assets/product-images-webp/lamps and vines together.webp"
import rope from "../assets/LONG ROPE.svg"
import review1 from "../assets/profile-pics/img.png"
import pablitos from "../assets/profile-pics/pablitos.png"
import review2 from "../assets/profile-pics/img_1.png"
import review3 from "../assets/profile-pics/img_2.png"
import review4 from "../assets/profile-pics/img_3.png"
import review5 from "../assets/profile-pics/img_4.png"
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import "./family.scss"

import "react-multi-carousel/lib/styles.css";

const reviews = [
    {
        name: 'Rares Radu',
        profilePicture: review3, // Placeholder image
        review: 'Great vibe, amaizing coffee ❤️',
        stars: 5,
        date: "Local Guide • 6 reviews"
    },
    {
        name: 'Sorana Borhina',
        profilePicture: review1, // Placeholder image
        review: 'The specialty coffee here is exceptional, with a rich and unique flavor that stands out. The atmosphere is cozy and inviting, making it the perfect spot to shade from the burning sun. The staff are friendly and knowledgeable, always ready to recommend something new. Highly recommend to any coffee lover!\n' ,
        stars: 5,
        date: "9 reviews"
    },
    {
        name: 'Laura Iuliana',
        profilePicture: review2, // Placeholder image
        review: 'Always a joy to come here. Friendly atmosphere, good conversations, and good coffee. I also recommend that banana bread with a good old flat white. It is simply gorgeous 🤩.\n',
        stars: 5,
        date: "4 reviews"
    },
    {
        name: 'Diana Pîrje',
        profilePicture: review4, // Placeholder image
        review: 'Una din cele mai dragute cafenele, cu cafea de specialitate savuroasa!!❤️ Ma bucur tare mult ca au deschis locatie si aproape de mine!\n',
        stars: 5,
        date: "Local Guide • 25 reviews"
    },
    {
        name: 'Marius Beju',
        profilePicture: review5, // Placeholder image
        review: 'Am primit un espresso bine extras și echilibrat și un cappuccino dulce, ca o prăjiturică. Laptele a fost foarte bine frothat, nu și-a pierdut pufoșenia nici pana aproape la ultima gura. Felicitări barista pentru service, amabilitate și abilitați! Mi-a plăcut :)\n',
        stars: 5,
        date: "Local Guide • 68 reviews"
    },
];

const ratingArray = new Array(5).fill(null);

function Family() {



    const [formVisible, setFormVisible] = useState(false);

    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    const messages = [
        "Se regleaza din soft - Boboc",
        "Imi place sa desenez floricele - Raluca",
        "Lucrurile bune se intampla random - Cris",
        "Si cappuccino e cafea cu lapte! - Alex"
    ];


    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const [shuffledMessages, setShuffledMessages] = useState([]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    // Shuffle messages only once on mount
    useEffect(() => {
        setShuffledMessages(shuffleArray(messages));
    }, []); // Empty array to ensure this runs only once on mount

    // Interval effect to change messages
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false); // Trigger fade-out

            // After 500ms, switch to the next message and fade in
            setTimeout(() => {
                setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % shuffledMessages.length);
                setFade(true); // Trigger fade-in
            }, 500);
        }, 5000);

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, [shuffledMessages.length]);


    const [randomReviews, setRandomReviews] = useState([]);


    const getRandomReviews = (reviews) => {
        const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
        return shuffledReviews.slice(0, 3);
    };

    useEffect(() => {
        const selectedReviews = getRandomReviews(reviews);
        setRandomReviews(selectedReviews);
    }, []);


    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1); // Reset when mouse leaves the container
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rrykgqu', 'template_7pfc2c4', form.current, {
                publicKey: 'Vo_OfRgK6DeUPu2kL',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const links = [
        'https://g.page/r/Cbv7bVFNMMUQEBE/review',
        'https://g.page/r/CQopc5Ec5jrzEBE/review'
    ];


    const [randomLink, setRandomLink] = useState('');


    useEffect(() => {
        const selectedLink = links[Math.floor(Math.random() * links.length)];
        setRandomLink(selectedLink);
    }, []);


    const [mapSrc, setMapSrc] = useState("");

    useEffect(() => {
        const updateMapSrc = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                setMapSrc("https://www.google.com/maps/d/u/3/embed?mid=1ekbpzasGrrmzVB65ctTw4race-Imvzs&ehbc=2E312F");
            } else {
                setMapSrc("https://www.google.com/maps/d/u/3/embed?mid=1cv5ORqaEzrLjyhH-DDdTmgaxCagA7Fk&ehbc=2E312F");
            }
        };

        updateMapSrc(); // Call function to set initial map source
        window.addEventListener("resize", updateMapSrc); // Add resize listener

        return () => window.removeEventListener("resize", updateMapSrc); // Cleanup on unmount
    }, []);



    const slides = [
        {
            name: 'Rares Radu',
            profilePicture: review3, // Placeholder image
            review: 'Great vibe, amaizing coffee ❤️',
            stars: 5,
            date: "Local Guide • 6 reviews"
        },
        {
            name: 'Sorana Borhina',
            profilePicture: review1, // Placeholder image
            review: 'The specialty coffee here is exceptional, with a rich and unique flavor that stands out. The staff are friendly and knowledgeable, always ready to recommend something new. Highly recommend to any coffee lover!\n' ,
            stars: 5,
            date: "9 reviews"
        },
        {
            name: 'Laura Iuliana',
            profilePicture: review2, // Placeholder image
            review: 'Always a joy to come here. Friendly atmosphere, good conversations, and good coffee. I also recommend that banana bread with a good old flat white. It is simply gorgeous 🤩.\n',
            stars: 5,
            date: "4 reviews"
        },
        {
            name: 'Diana Pîrje',
            profilePicture: review4, // Placeholder image
            review: 'Una din cele mai dragute cafenele, cu cafea de specialitate savuroasa!!❤️ Ma bucur tare mult ca au deschis locatie si aproape de mine!\n',
            stars: 5,
            date: "Local Guide • 25 reviews"
        },
        {
            name: 'Marius Beju',
            profilePicture: review5, // Placeholder image
            review: 'Am primit un espresso bine extras și echilibrat și un cappuccino dulce, ca o prăjiturică. Laptele a fost foarte bine frothat, nu și-a pierdut pufoșenia nici pana aproape la ultima gura. Felicitări barista pentru service, amabilitate și abilitați!\n',
            stars: 5,
            date: "Local Guide • 68 reviews"
        },
    ];

    const [active, setActive] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(0);
    const [displayedSlides, setDisplayedSlides] = React.useState([]);

// Function to shuffle slides array
    const shuffleSlides = (slides) => {
        let shuffled = [...slides]; // Copy the array to avoid mutating original slides

        // Fisher-Yates algorithm for shuffling
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    };

    React.useEffect(() => {
        if (slides.length > 0) {
            // Shuffle and pick 3 random slides once the component mounts
            const shuffledSlides = shuffleSlides(slides);
            setDisplayedSlides(shuffledSlides.slice(0, 3)); // Get first 3 shuffled slides
        }
    }, []);

// Function to auto-transition between slides
    const intervalBetweenSlides = () => {
        if (autoplay) {
            setActive(active === displayedSlides.length - 1 ? 0 : active + 1);
        }
    };

    React.useEffect(() => {
        const interval = setInterval(() => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    }, [autoplay, active, displayedSlides]);

    const toggleAutoPlay = () => setAutoplay(!autoplay);

    const nextOne = () => active < displayedSlides.length - 1 && setActive(active + 1);

    const prevOne = () => active > 0 && setActive(active - 1);

    const isActive = (value) => (active === value ? 'active' : '');

    const setSliderStyles = () => {
        const transition = active * -100;
        return {
            width: displayedSlides.length * 100 + 'vw',
            transform: 'translateX(' + transition + 'vw)',
        };
    };

    const renderSlides = () =>
        displayedSlides.map((item, index) => (
            <div className='slide' key={index}>
                <div className="slide-content">
                    <div className="review-details">
                        <img
                            src={item.profilePicture}
                            alt={`${item.name}'s profile`}
                            className="profile-picture"
                        />
                        <span className="review-name">{item.name}</span>
                    </div>
                    <div className="date-review-mobile">{item.date}</div>
                    <div className="rating-green-cont">
                        {Array.from({ length: item.stars }).map((_, index) => (
                            <img key={index} src={reviewAssetGreen} alt="star" className="logo-green-rating" />
                        ))}
                    </div>
                    <p className="review-text">{item.review}</p>
                </div>
            </div>
        ));

    const renderDots = () =>
        displayedSlides.map((_, index) => (
            <li className={isActive(index) + ' dots'} key={index}>
                <button onClick={() => setActive(index)}>
                    <span>&#9679;</span>
                </button>
            </li>
        ));

    const renderPlayStop = () =>
        autoplay ? (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' />
            </svg>
        ) : (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' />
            </svg>
        );

    const renderArrows = () => (
        <React.Fragment>
            <button type='button' className='arrows prev' onClick={prevOne}>
                <img className="arrow-left" src={arrowNext} alt="arrowNext" />
            </button>
            <button type='button' className='arrows next' onClick={nextOne}>
                <img className="arrow-right" src={arrowNext} alt="arrowNext" />
            </button>
        </React.Fragment>
    );

    return(
        <div>
            <Menu/>
            <img className="heart-on-top" src={heart} alt="heartTop"/>
            <p className="family-heading-top">Welcome To Our Family!</p>
            <div className="top-black-screen">

            </div>
            <div className="family-bg">
                <div className="bg-overlay"></div>
                <div className="family-vines">
                    <img className="family-vines-img" src={vinesAll} alt="vines"/>
                </div>
                {/*<div className="family-lamps">*/}
                {/*    <img className="lamp-img" src={lamp} alt="lamps"/>*/}
                {/*</div>*/}
                <div className="family-container">
                </div>
            </div>
            <p className="family-heading">ABOUT US</p>
            <p className="family-p">
                We’ve committed to a journey where we prepare the highest quality coffee, roasted by our friends at MABO by Bogdan Georgescu, the world coffee roasting vice-champion.
            </p>
            <p className="family-p2">
                We have built a place where you can enjoy good coffee, laugh, and create magical friendships - we can’t wait to see you all!
            </p>
            <img className="family-image" src={logo} alt="logo"/>
            <div className="family-decoration-line"></div>
            <p className="citate-about-us-top">Each of us is unique~</p>
            <div className="despre-noi-heading">
                <p className={`citate-about-us ${fade ? 'fade-in' : 'fade-out'}`}>
                    {shuffledMessages[currentMessageIndex]}
                </p>
            </div>
            <div className="map-container">
                <div className="heading-container">
                    <p className="heading-map">
                        FIND US
                    </p>
                    <img src={heart} className="heading-heart" alt="heart-logo"/>
                </div>
                <div className="maps-container">
                    <div className="map-asset-container">
                        <iframe
                            title="map-amazoniq"
                            src={mapSrc}
                            width="100%" height="500"></iframe>

                    </div>
                    <div className="address-detail-mobile">
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="address-p">
                                <p className="p-address">Drumul Taberei 24</p>
                            </div>
                        </div>
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="schedule-p">
                                <p className="p-address">L-V 8:00 - 18:00</p>
                                <p className="p-address">S-D 8:30 - 17:30</p>
                            </div>
                        </div>
                    </div>
                    <div className="address-detail-mobile">
                        <div className="map-asset-container1">
                            <iframe
                                title="map-amazoniq-2"
                                src="https://www.google.com/maps/d/u/3/embed?mid=1RtAEG9dqEzL4wyZAoS3fVLY0RfIm_o4&ehbc=2E312F"
                                width="100%" height="500"></iframe>
                        </div>
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="address-p">
                                <p className="p-address">Gheorghe Sincai 2A</p>
                            </div>
                        </div>
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="schedule-p">
                                <p className="p-address">L-V 7:30 - 17:30</p>
                                <p className="p-address">S-D 8:30 - 17:30</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address-detail-container">
                    <div className="address-detail">
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="address-p">
                                <p className="p-address">Drumul Taberei 24</p>
                            </div>
                        </div>
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="schedule-p">
                                <p className="p-address">L-V 8:00 - 18:00</p>
                                <p className="p-address">S-D 8:30 - 17:30</p>
                            </div>
                        </div>
                    </div>
                    <div className="address-detail">
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="address-p">
                                <p className="p-address">Gheorghe Sincai 2A</p>
                            </div>
                        </div>
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="schedule-p">
                                <p className="p-address">L-V 7:00 - 18:00</p>
                                <p className="p-address">S-D 8:30 - 18:30</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading-container">

                    <p className="heading-map1" style={{marginTop: "50px"}}>
                        YOUR LOVE IS APPRECIATED
                    </p>
                    <img src={heart} className="heading-heart1" alt="heart-logo"/>
                </div>
                <div className="div-fill">

                </div>
                <div className="slider-container">
                    <section className='slider'>
                        <div className='wrapper' style={setSliderStyles()}>
                            {renderSlides()}
                        </div>
                        {renderArrows()}
                        <ul className='dots-container'>
                            {renderDots()}
                        </ul>
                        <button type='button' className='toggle-play' onClick={toggleAutoPlay}>
                            {renderPlayStop()}
                        </button>
                    </section>

                </div>
                <div className="family-decoration-line-bottom"></div>
                <div className="review-carousel-container">
                    {randomReviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="reviews-maps-top">
                            <img
                                    src={review.profilePicture}
                                    alt={`${review.name}'s profile`}
                                    className="profile-picture"
                                />
                                <h3 className="review-name">{review.name}</h3>
                            </div>
                            <div className="review-date-container-pc">
                                <div className="rating-green-cont">
                                    {ratingArray.map((_, index) => (
                                        <img
                                            key={index}
                                            src={reviewAssetGreen}
                                            alt="star"
                                            className="logo-green-rating"
                                        />
                                    ))}
                                </div>
                                <div className="review-date">{review.date}</div>
                            </div>
                            <p className="review-text">{review.review}</p>
                        </div>
                    ))}
                </div>
                <img className="long-rope" src={rope} alt="longRope"/>
                <div className="rate-us-container" onMouseLeave={handleMouseLeave}>
                    <p className="rate-us-p">RATE US!</p>
                    <div className="rating-asset-container">
                        {[...Array(5)].map((_, index) => (
                            <a href={randomLink}
                               target="_blank"  rel="noreferrer">
                                <img
                                    key={index}
                                    className="review-asset-rate"
                                    src={index <= hoveredIndex ? reviewAssetGreen : reviewAssetWhite}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    alt={`Rating ${index + 1}`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="family-decoration-line-bottom-bottom"></div>
                <div className="">

                </div>
                <div className="contact-form-container">
                    {/* Button to show the form */}
                    {!formVisible && (
                        <button onClick={toggleForm} className="show-form-button">
                            CONTACT US!
                        </button>
                    )}

                    {/* Form that becomes visible on button click */}
                    {formVisible && (
                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            {/* X button to close the form */}
                            <button type="button" className="close-button" onClick={toggleForm}>
                                &times;
                            </button>
                            <div className="contact-container">
                                <div className="contact-heading">
                                    CONTACT US !
                                </div>


                                <div className="contact-warning-container">
                                    <p className="contact-warning-p">Soooo..... if you really want to, you can contact
                                        us for the following reasons:</p>
                                    <li className="contact-warning-li">if you have any feedback/enquiry (we would love
                                        to hear your thoughts)
                                    </li>
                                    <li className="contact-warning-li">job opportunity (we are a really cool team)</li>
                                    <li className="contact-warning-li">community events suggestions (we love to drink
                                        good coffee and talk a lot)
                                    </li>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="nume">Name and Surname</label>
                                        <input className="input-contact" type="text" id="nume" name="nume"
                                               placeholder="Name and Surname" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="contact-label" htmlFor="prenume">Phone</label>
                                        <input className="input-contact" type="tel" id="prenume" name="telefon"
                                               placeholder="Phone" required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="telefon">Email</label>
                                        <input className="input-contact" type="email" id="telefon" name="email"
                                               placeholder="Email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="contact-label" htmlFor="email">Reason</label>
                                        <input className="input-contact" type="text" id="email" name="motiv"
                                               placeholder="Reason" required/>
                                    </div>
                                </div>


                                <div className="form-group full-width">
                                    <label htmlFor="mesaj">Message</label>
                                    <textarea style={{resize: "none"}} className="input-contact" id="mesaj" name="mesaj"
                                              rows="4" placeholder="Message"></textarea>
                                </div>

                                <div className="form-group full-width">
                                    <div></div>
                                </div>


                                <button className="button-submit" type="submit">Trimite</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div style={{height: "50px", backgroundColor: "#252422"}}>

            </div>
            <div className="decoration-bottom-black">

            </div>
            <Footer/>
        </div>
    )
}

export default Family