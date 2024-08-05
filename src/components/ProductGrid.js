import React from 'react';
import './ProductGrid.css';
import Product from "./ProductContainer";
import coldBrewTonic from "../assets/cold-brew-water.png"
import espresso from "../assets/img_1.png"
import dubluEspresso from "../assets/img_2.png"
import longBlack from "../assets/img_3.png"
import v60single from "../assets/img_4.png"

const ProductGrid = () => {
    const products = [
        {
            name: 'SINGLE ESPRESSO',
            price: '20 ml',
            description: '8g cafea Mabo, apă fierbinte',
            image: espresso
        },
        {
            name: 'DOUBLE ESPRESSO',
            price: '40 ml',
            description: '16g cafea Mabo, apă fierbinte',
            image: dubluEspresso
        },
        {
            name: 'LONG BLACK',
            price: '80 ml',
            description: 'Espresso dublu 40 ml + 40 ml apă fierbinte',
            image: longBlack
        },
        {
            name: 'V60 SINGLE ORIGIN',
            price: '350 ml',
            description: 'Cafea la filtru SINGLE ORIGIN',
            image: v60single
        },
        {
            name: 'DOUBLE ESPRESSO DECAF',
            price: '300 ml',
            description: '80 ml cold brew + \n' +
                '200 ml apă tonică Franklin + gheata + garnish + cox mult',
            image: coldBrewTonic
        },
        {
            name: 'DOUBLE ESPRESSO DECAF',
            price: '300 ml',
            description: '80 ml cold brew + \n' +
                '200 ml apă tonică Franklin + gheata + garnish + cox mult',
            image: coldBrewTonic
        },
        {
            name: 'DOUBLE ESPRESSO DECAF',
            price: '300 ml',
            description: '80 ml cold brew + \n' +
                '200 ml apă tonică Franklin + gheata + garnish + cox mult',
            image: coldBrewTonic
        },
        {
            name: 'DOUBLE ESPRESSO DECAF',
            price: '300 ml',
            description: '80 ml cold brew + \n' +
                '200 ml apă tonică Franklin + gheata + garnish + cox mult',
            image: coldBrewTonic
        },
        {
            name: 'DOUBLE ESPRESSO DECAF',
            price: '300 ml',
            description: '80 ml cold brew + \n' +
                '200 ml apă tonică Franklin + gheata + garnish + cox mult',
            image: coldBrewTonic
        },
        {
            name: 'DOUBLE DECAF',
            price: '$20',
            description: 'Another fantastic product with a lot of features.',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Product 3',
            price: '$30',
            description: 'A must-have product for your collection.',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Product 4',
            price: '$40',
            description: 'The best product in its category.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
