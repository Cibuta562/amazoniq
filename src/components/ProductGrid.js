import React from 'react';
import './ProductGrid.css';
import Product from "./ProductContainer";

const ProductGrid = () => {
    const products = [
        {
            name: 'COLD BREW TONIC',
            price: '300 ml',
            description: '80 ml cold brew + \n' +
                '200 ml apă tonică Franklin + gheata + garnish\n',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Product 2',
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
