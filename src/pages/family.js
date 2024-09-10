import "./family.css"
import vinesTop from "../assets/ABOUT US Ceiling vines with gradient.svg"
import lamp from "../assets/ABOUT US Ceiling lamps with lines.svg"
import Menu from "../Menu";
import Footer from "./footer";
import Slider from 'react-slick';
import logo from "../assets/logo-maimuta-alb.svg"
import heart from "../assets/HEART.svg"

const reviews = [
    {
        name: 'John Doe',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
        review: 'Great service and amazing quality! Highly recommended.',
        stars: 5
    },
    {
        name: 'Jane Smith',
        profilePicture: 'https://via.placeholder.com/150',
        review: 'The experience was fantastic. Will definitely come back!',
        stars: 4
    },
    {
        name: 'Alex Johnson',
        profilePicture: 'https://via.placeholder.com/150',
        review: 'Good service but a bit expensive.',
        stars: 3
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
                        <iframe
                            className="map-google"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.776979574313!2d26.018142776440925!3d44.417221971076074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20178d43f3b1f%3A0xf33ae61c9173290a!2sAMAZONIQ%20%7C%20specialty%20coffee%20%7C%20DTR!5e0!3m2!1sro!2sro!4v1725515609923!5m2!1sro!2sro"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                    <div className="map-asset-container">
                        <iframe
                            className="map-google"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5161.615173519856!2d26.099649895497098!3d44.41512109796786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffbd130c71a5%3A0x10c5304d516dfbbb!2sAMAZONIQ%20%7C%20specialty%20coffee%20%7C%20%C8%98INCAI!5e0!3m2!1sro!2sro!4v1725515510961!5m2!1sro!2sro"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                    <div className="vertical-dec">

                    </div>
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
                                    <p className="review-text">"{review.review}"</p>
                                    <div className="review-stars">{renderStars(review.stars)}</div>
                                </div>
                            ))}
                    </div>
            </div>
           <Footer/>
        </div>
    )
}

export default Family