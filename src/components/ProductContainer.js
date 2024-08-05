import React, {useState} from 'react';
import './ProductContainer.css';
import arrow from "../assets/arrow.png"

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
            <div className="decoration-line-top"></div>
            <p className={`product-description ${isDescriptionVisible ? 'product-description-visible' : ''}`}>
                {description}
            </p>
            <div className="flex-dropdown-active" onClick={toggleDescription}>
            <div className="decoration-line-bottom"></div>
            <img className="arrow-active" src={arrow} alt="arrow-lipsa"/>
            </div>
        </div>
    );
};

export default Product;
