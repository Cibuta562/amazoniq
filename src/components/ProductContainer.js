import React, {useState} from 'react';
import './ProductContainer.css';
import logo from "../assets/Amazoniq Icon Coal 2.svg"

const Product = ({ name, price, description, image }) => {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    // Function to toggle the description visibility
    const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };



    return (
        // <div className={`product ${isDescriptionVisible ? '' : 'product-small'}`}>
        <div className="product">
            <div className="product-image-container">
                <img src={image} alt={name} className="product-image" />
            </div>
            <div className="heading-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{price}</p>
            </div>
            <div className="decoration-div-top">
            <div className="decoration-line-top"></div>
            </div>
            <p className={`product-description ${isDescriptionVisible ? 'product-description-visible' : ''}`}>
                {description}
            </p>
            <div onClick={toggleDescription} className="bottom-flex">
            <div className={`decoration-line-bottom ${isDescriptionVisible ? 'decoration-line-bottom-active' : ''}`}></div>
                <img className="logo-bottom" src={logo} alt="arrow-lipsa"/>
            </div>
        </div>
    );
};

export default Product;
