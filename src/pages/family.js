import "./family.css"
import vinesTop from "../assets/ABOUT US Ceiling vines with gradient.svg"
import lamp from "../assets/ABOUT US Ceiling lamps with lines.svg"
import Menu from "../Menu";
import Footer from "./footer";
import Slider from 'react-slick';
import logo from "../assets/logo-maimuta-alb.svg"
import heart from "../assets/HEART.svg"
import reviewAsset from "../assets/review-asset.svg"
import {useState} from "react";

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
    // Add more reviews as needed
];

function Family() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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

    return(
        <div>
            <Menu/>
            <div className="family-bg">
                <div className="bg-overlay"></div>
                <div className="family-vines">
                    <img className="family-vines-img" src={vinesTop} alt="vines"/>
                </div>
                <div className="family-lamps">
                   <img className="lamp-img" src={lamp} alt="lamps"/>
                </div>
                <div className="family-container">
                </div>
            </div>
            <p className="family-heading">CINE SUNTEM NOI?</p>
            <p className="family-p">
                Lorem ipsum dolor sadsaasit amet, cosnsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore vet dolore magna aliqua. Quis ipsum suspendisse ultrices adipiscing elit, sed do eiusmod tempor incididun adipiscing elit, sed do eiusmod tempor incididun
            </p>
            <img className="family-image" src={logo} alt="logo"/>
            <div className="family-decoration-line"></div>
            <p className="citate-about-us-top">Fiecare dintre noi are un stil unic</p>
            <div className="despre-noi-heading">
                <p className="citate-about-us">Imi place sa desenez floricele” - Raluca</p>
            </div>
            <div className="map-container">
                <div className="heading-container">
                    <p className="heading-map">
                        UNDE NE PUTETI GASI
                    </p>
                    <img src={heart} className="heading-heart" alt="heart-logo"/>
                </div>
                <div className="maps-container">
                    <div className="map-asset-container">
                        <iframe src="https://my.atlist.com/map/de294c32-7c19-46e5-842e-138ba53eeef6/?share=true"
                                allow="geolocation 'self' https://my.atlist.com" width="100%" height="500px"
                                  frameBorder="0" scrolling="no" allowFullScreen
                                id="atlist-embed"></iframe>
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
                                <p  className="p-address">L-V 8:00 - 18:00</p>
                                <p  className="p-address">S-D 8:30 - 17:30</p>
                            </div>
                        </div>
                    </div>
                    <div className="address-detail-mobile">
                        <div className="map-asset-container1">
                            <iframe src="https://my.atlist.com/map/de294c32-7c19-46e5-842e-138ba53eeef6/?share=true"
                                    allow="geolocation 'self' https://my.atlist.com" width="100%" height="500px"
                                    frameBorder="0" scrolling="no" allowFullScreen
                                    id="atlist-embed"></iframe>
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
                                <p  className="p-address">L-V 7:00 - 18:00</p>
                                <p  className="p-address">S-D 8:30 - 18:30</p>
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
                                <p  className="p-address">L-V 8:00 - 18:00</p>
                                <p  className="p-address">S-D 8:30 - 17:30</p>
                            </div>
                        </div>
                    </div>
                    {/*<div className="vertical-dec">*/}

                    {/*</div>*/}
                    <div className="address-detail">
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="address-p">
                                <p  className="p-address">Gheorghe Sincai 2A</p>
                            </div>
                        </div>
                        <div className="address-p-container">
                            <div className="circle-decorator"></div>
                            <div className="schedule-p">
                                <p  className="p-address">L-V 7:00 - 18:00</p>
                                <p  className="p-address">S-D 8:30 - 18:30</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading-container">
                    <p className="heading-map" style={{marginTop: "50px"}}>
                        PEOPLE LOVE US
                    </p>
                    <img src={heart} className="heading-heart" alt="heart-logo"/>
                </div>
                <div className="family-decoration-line-bottom"></div>
                    <div className="review-carousel-container">
                            {reviews.map((review, index) => (
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
                                        <img className="review-asset" src={reviewAsset}/>
                                    </div>
                                    <div className="review-date">{review.date}</div>
                                    </div>
                                    <p className="review-text">{review.review}</p>
                                </div>
                            ))}
                    </div>
                <div className="rate-us-container">
                    <p className="rate-us-p">RATE US!</p>
                    <img className="review-asset-rate" src={reviewAsset}/>
                </div>
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

                            <div className="contact-heading">
                                CONTACT US !
                            </div>

                            <div className="row">
                                <div className="form-group">
                                    <label htmlFor="nume">Nume si Prenume</label>
                                    <input  className="input-contact" type="text" id="nume" name="nume" placeholder="Nume si Prenume" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="prenume">Telefon</label>
                                    <input className="input-contact" type="tel" id="prenume" name="prenume" placeholder="Telefon" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group">
                                    <label htmlFor="telefon">Email</label>
                                    <input className="input-contact" type="email" id="telefon" name="telefon" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Motiv de Contact</label>
                                    <input className="input-contact" type="text" id="email" name="email" placeholder="Motiv" required />
                                </div>
                            </div>


                            <div className="form-group full-width">
                                <label htmlFor="mesaj">Mesaj</label>
                                <textarea style={{resize: "none"}} className="input-contact" id="mesaj" name="mesaj" rows="4" placeholder="Mesaj"></textarea>
                            </div>

                            <div className="form-group full-width">
                                <div></div>
                            </div>


                            <button type="submit">Trimite</button>
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