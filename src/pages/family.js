import React from "react"
import "./family.css"
import vinesTop from "../assets/ABOUT US Ceiling vines with gradient.svg"
import lamp from "../assets/ABOUT US Ceiling lamps with lines.svg"
import Menu from "../Menu";
import Footer from "./footer";
import Slider from 'react-slick';
import logo from "../assets/Amazoniq Icon Seashell White.svg"
import heart from "../assets/Inima cu PUNCT.svg"
import reviewAsset from "../assets/review-asset.svg"
import reviewAssetWhite from "../assets/Amazoniq Icon Seashell White.svg"
import reviewAssetGreen from "../assets/AMAZONIQ INLINE SEASHELL WHITE CLEAR 6.svg"
import vinesAll from "../assets/product-images-webp/lamps and vines together.webp"
import rope from "../assets/LONG ROPE.svg"
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import "./family.scss"

import "react-multi-carousel/lib/styles.css";

const reviews = [
    {
        name: 'John Doe',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
        review: 'Great service and amazing quality! Highly recommended.',
        stars: 5,
        date: "4 months ago"
    },
    {
        name: 'Jane Smith',
        profilePicture: 'https://via.placeholder.com/150',
        review: 'The experience was fantastic. Will definitely come back!',
        stars: 4,
        date: "4 months ago"
    },
    {
        name: 'Alex Johnson',
        profilePicture: 'https://via.placeholder.com/150',
        review: 'Good service but a bit expensive.',
        stars: 3,
        date: "4 months ago"
    },
    {
        name: 'John Doe 2',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
        review: 'Great service and amazing quality! Highly recommended.',
        stars: 5,
        date: "4 months ago"
    },
    {
        name: 'John Doe 3',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
        review: 'Great service and amazing quality! Highly recommended.',
        stars: 5,
        date: "4 months ago"
    },
    {
        name: 'John Doe 4',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
        review: 'Great service and amazing quality! Highly recommended.',
        stars: 5,
        date: "4 months ago"
    },
    {
        name: 'John Doe 5',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
        review: 'Great service and amazing quality! Highly recommended.',
        stars: 5,
        date: "4 months ago"
    },
    // Add more reviews as needed
];

function Family() {


    const renderStars = (stars) => {
        const starElements = [];
        for (let i = 0; i < 5; i++) {
            if (i < stars) {
                starElements.push(<span key={i} className="star filled">★</span>);
            } else {
                starElements.push(<span key={i} className="star">☆</span>);
            }
        }
        return starElements;
    };

    const [formVisible, setFormVisible] = useState(false);

    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    const messages = [
        "Se regleaza din soft - Boboc",
        "Imi place sa desenez floricele - Raluca",
        "Ce te doboara te face mai puternic - Cris"
    ];

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

        const [shuffledMessages, setShuffledMessages] = useState([]); // Store shuffled messages
        const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
        const [fade, setFade] = useState(true); // For fading effect

        useEffect(() => {
            // Shuffle the messages once on component mount
            setShuffledMessages(shuffleArray(messages));
        }, []); // Empty array means this runs only once when the component mounts

        useEffect(() => {
            const intervalId = setInterval(() => {
                setFade(false); // Trigger fade-out

                setTimeout(() => {
                    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % shuffledMessages.length); // Cycle through shuffled messages
                    setFade(true); // Trigger fade-in after message change
                }, 500); // Wait for the fade-out animation to complete
            }, 5000); // Change message every 5 seconds

            return () => clearInterval(intervalId); // Clean up the interval on unmount
        }, [shuffledMessages]); // Run effect after the messages are shuffled


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

    const responsive = {
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
        // Function to update the map src based on screen width
        const updateMapSrc = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1024) {
                // For larger screens (e.g., desktops)
                setMapSrc("https://www.google.com/maps/d/u/3/embed?mid=1ekbpzasGrrmzVB65ctTw4race-Imvzs&ehbc=2E312F");
            } else {
                // For smaller screens (e.g., mobile)
                setMapSrc("https://www.google.com/maps/d/u/3/embed?mid=1cv5ORqaEzrLjyhH-DDdTmgaxCagA7Fk&ehbc=2E312F");
            }
        };
        updateMapSrc();

        // Add an event listener to update the src when the window is resized
        window.addEventListener("resize", updateMapSrc);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", updateMapSrc);
    }, []);


    const slides = [
        {
            profilePicture: 'https://via.placeholder.com/150',
            review: "This coffee is amazing! The ambiance is perfect for getting work done or just relaxing.",
            name: "John Doe",
            stars: 5,
            date: "June 15, 2024"
        },
        {
            profilePicture: 'https://via.placeholder.com/150',
            review: "The best coffee shop I've ever been to! Friendly staff and great vibes.",
            name: "Jane Smith",
            stars: 4,
            date: "July 20, 2024"
        },
        {
            profilePicture: 'https://via.placeholder.com/150',
            review: "Delicious coffee, and the atmosphere is just right for a chill hangout.",
            name: "Emily Johnson",
            stars: 5,
            date: "August 5, 2024"
        }
    ];

        const [active, setActive] = React.useState(0);
        const [autoplay, setAutoplay] = React.useState(1);
        const max = slides.length;

        const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

        React.useEffect(() => {
            const interval = setInterval( () => intervalBetweenSlides(), 3000);
            return () => clearInterval(interval);
        });

        const toggleAutoPlay = () => setAutoplay(!autoplay)

        const nextOne = () => active < max - 1 && setActive(active + 1)

        const prevOne = () => active > 0 && setActive(active - 1)

        const isActive = value => active === value && 'active'

        const setSliderStyles = () => {
            const transition = active * - 100;

            return {
                width: ( slides.length * 100 ) + 'vw',
                transform: 'translateX(' + transition + 'vw)'
            }
        }

    const [displayedSlides, setDisplayedSlides] = useState([]);

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

    useEffect(() => {
        if (slides.length > 0) {
            // Shuffle and pick 3 random slides once the component mounts
            const shuffledSlides = shuffleSlides(slides);
            setDisplayedSlides(shuffledSlides.slice(0, 3)); // Get first 3 shuffled slides
        }
    }, []);

    const renderSlides = () => displayedSlides.map((item, index) => (
        <div
            className='slide'
            key={index}
            // style={{ backgroundImage: item.eachSlide }}
        >
            <div className="slide-content">
                <div className="review-details">
                    <img
                        src={item.profilePicture}
                        alt={`${item.name}'s profile`}
                        className="profile-picture"
                    />
                    <span className="review-name">{item.name}</span>
                    {/*<span className="review-stars">{'★'.repeat(item.stars)}</span>*/}
                    {/*<span className="review-date">{item.date}</span>*/}
                </div>
                <p className="review-text">{item.review}</p>
            </div>
        </div>
    ));

    const renderDots = () => slides.map((silde, index) => ( // check index
        <li
            className={isActive(index) + ' dots'}
            key={index}>
            <button onClick={() => setActive(index)}>
            <span>&#9679;</span>
                </button>
            </li>
        ));

        const renderPlayStop = () => autoplay
            ? (
                <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
                </svg>
            )
            : (
                <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                </svg>
            )

        const renderArrows = () => (
            <React.Fragment>
                <button
                    type='button'
                    className='arrows prev'
                    onClick={ () => prevOne() } >
                    <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
                <button
                    type='button'
                    className='arrows next'
                    onClick={ () => nextOne() } >
                    <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </React.Fragment>
        )

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
            {/*<p className="family-p3">*/}
            {/*    Va asteptam cu drag!*/}
            {/*</p>*/}
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
                    {/*<div className="map-border">*/}
                    <div className="map-asset-container">
                        {/*<iframe width="100%" height="500"*/}
                        {/*        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Amazoniq+(Amazoniq%20Drumul%20Taberei)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">*/}
                        {/*</iframe>*/}
                        <iframe
                            src={mapSrc}
                            width="100%" height="500"></iframe>

                    </div>
                    {/*</div>*/}
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
                            {/*<iframe src="https://my.atlist.com/map/de294c32-7c19-46e5-842e-138ba53eeef6/?share=true"*/}
                            {/*        allow="geolocation 'self' https://my.atlist.com" width="100%" height="500px"*/}
                            {/*        frameBorder="0" scrolling="no" allowFullScreen*/}
                            {/*        id="atlist-embed"></iframe>*/}
                            <iframe
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
                                <p className="p-address">L-V 7:00 - 18:00</p>
                                <p className="p-address">S-D 8:30 - 18:30</p>
                            </div>
                        </div>
                    </div>
                    {/*<div className="div-fill">*/}

                    {/*</div>*/}
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
                    {/*<div className="vertical-dec">*/}

                    {/*</div>*/}
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
                            <div className="review-date-container">
                                <div className="review-stars">
                                    {/* Placeholder for star icons or star rating component */}
                                    <span>{'★'.repeat(review.stars)}</span>
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
                               target="_blank">
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
                {/*<div className="slider-container">*/}
                {/*    <Slider {...settings}>*/}
                {/*        <div>*/}
                {/*            <h3>1</h3>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h3>2</h3>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h3>3</h3>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h3>4</h3>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h3>5</h3>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h3>6</h3>*/}
                {/*        </div>*/}
                {/*    </Slider>*/}
                {/*</div>*/}
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
            <Footer/>
        </div>
    )
}

export default Family