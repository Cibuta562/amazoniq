import "./family.css"
import vinesTop from "../assets/ABOUT US Ceiling vines with gradient.svg"
import lamp from "../assets/ABOUT US Ceiling lamps with lines.svg"
import Menu from "../Menu";
import Footer from "./footer";
import Slider from 'react-slick';
import logo from "../assets/logo-maimuta-alb.svg"
import heart from "../assets/HEART.svg"
import reviewAsset from "../assets/review-asset.svg"
import reviewAssetWhite from "../assets/AMAZONIQ INLINE SEASHELL WHITE CLEAR 7.svg"
import reviewAssetGreen from "../assets/AMAZONIQ INLINE SEASHELL WHITE CLEAR 6.svg"
import vinesAll from "../assets/lamps and vines together.svg"
import rope from "../assets/LONG ROPE.svg"
import {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";

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
                We have embarked on the wonderful journey of providing you with the highest quality coffee, alongside our partners at MABO by Bogdan Georgescu, the runner-up in coffee roasting. We want you to enjoy this experience at home as well! Therefore, on our shelves, you will find a carefully selected range of origins with unique profiles.
            </p>
            <p className="family-p2">
                In shorter terms, AMAZONIQ is the place where good coffee is enjoyed, laughter is abundant, and magical friendships are formed. We look forward to welcoming you!
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
                            src="https://www.google.com/maps/d/u/0/embed?mid=1Ufy8aAlwBATZzuz8lQcTpuQxGomur40&ehbc=2E312F"
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
                                src="https://www.google.com/maps/d/u/0/embed?mid=1Ufy8aAlwBATZzuz8lQcTpuQxGomur40&ehbc=2E312F"
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
                            <a href="https://www.google.com/search?hl=ro-RO&gl=ro&q=AMAZONIQ+%7C+specialty+coffee+%7C+DTR,+Bloc+521,+Drumul+Taberei+96,+Bucure%C8%99ti+061408&ludocid=17526573910239422730&lsig=AB86z5VzSNmrzcDeIK5E_rZCUMkQ#lrd=0x40b20178d43f3b1f:0xf33ae61c9173290a,3"
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
                <div className="contact-form-container">
                    {/* Button to show the form */}
                    {!formVisible && (
                        <button onClick={toggleForm} className="show-form-button">
                            CONTACT US!
                        </button>
                    )}

                    {/* Form that becomes visible on button click */}
                    {formVisible && (
                        <form className="contact-form">
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
                                    <li className="contact-warning-li">job opportunity (we are a really cool team)</li>
                                    <li className="contact-warning-li">community events suggestions (we love to drink
                                        good coffee ;) and talk a lot)
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
                                        <input className="input-contact" type="tel" id="prenume" name="prenume"
                                               placeholder="Phone" required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="telefon">Email</label>
                                        <input className="input-contact" type="email" id="telefon" name="telefon"
                                               placeholder="Email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label className="contact-label" htmlFor="email">Reason</label>
                                        <input className="input-contact" type="text" id="email" name="email"
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