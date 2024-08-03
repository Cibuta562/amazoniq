import React from 'react';
import './Product.css';

const Product = ({ name, price, description, image }) => {
    return (
        <div className="product">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price}</p>
            <p className="product-description">{description}</p>
        </div>
    );
};

export default Product;
