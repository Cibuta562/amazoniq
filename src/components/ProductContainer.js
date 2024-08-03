import React from 'react';
import './ProductContainer.css';

const Product = ({ name, price, description, image }) => {
    return (
        <div className="product">
            <img src={image} alt={name} className="product-image" />
            <div className="heading-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{price}</p>
            </div>
            <p className="product-description">{description}</p>
        </div>
    );
};

export default Product;
