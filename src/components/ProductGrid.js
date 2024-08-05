import React from 'react';
import './ProductGrid.css';
import Product from "./ProductContainer";
import coldBrewSimplu from "../assets/cold-brew-water.png"
import espresso from "../assets/img_1.png"
import dubluEspresso from "../assets/img_2.png"
import longBlack from "../assets/img_3.png"
import v60single from "../assets/img_4.png"
import cortado from "../assets/img_5.png"
import flatWhite from "../assets/img_6.png"
import singleLatte from "../assets/img_7.png"
import mocha from "../assets/img_8.png"
import chaiLatte from "../assets/img_9.png"
import espressoTonic from "../assets/img_10.png"
import iceLatte from "../assets/img_11.png"
import coldBrewMilk from "../assets/img_12.png"
import coldBrewTonic from "../assets/img_13.png"
import affogato from "../assets/img_14.png"
import frappe from "../assets/img_15.png"


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
            name: 'V60 w. RARE',
            price: '350 ml',
            description: 'Cafea la filtru MICROLOT',
            image: v60single
        },
        {
            name: 'CORTADO',
            price: '90 ml',
            description: 'Espresso 20 ml + lapte 70 ml',
            image: cortado
        },
        {
            name: 'CAPPUCCINO',
            price: '180 ml',
            description: 'Espresso 20 ml + lapte 160 ml',
            image: cortado
        },
        {
            name: 'FLAT WHITE',
            price: '220 ml',
            description: 'Espresso dublu 40 ml + lapte 180 ml',
            image: flatWhite
        },
        {
            name: 'SINGLE LATTE',
            price: '320 ml',
            description: 'Espresso 20 ml + lapte 300 ml',
            image: singleLatte
        },
        {
            name: 'DOUBLE LATTE',
            price: '320 ml',
            description: 'Espresso 40 ml + lapte 280 ml',
            image: singleLatte
        },
        {
            name: 'MOCHA LATTE',
            price: '310 ml',
            description: '20g ciocolată (50%) + espresso dublu 40 ml + lapte 250 ml\n',
            image: mocha,
        },
        {
            name: 'DIRTY CHAI LATTE',
            price: '315 ml',
            description: '45 ml masala chai ( KO FI TI ) + espresso 20 ml + lapte 250 ml',
            image: chaiLatte,
        },
        {
            name: 'ESPRESSO TONIC',
            price: '240 ml',
            description: 'Espresso dublu 40 ml + 200 ml apă tonică Franklin + gheață + garnish',
            image: espressoTonic
        },
        {
            name: 'ICE LATTE',
            price: '190 ml',
            description: 'Espresso dublu 40 ml + 150 ml lapte + gheațăl',
            image: iceLatte
        },
        {
            name: 'COLD BREW SIMPLU',
            price: '250 ml',
            description: '80 ml cold brew + 170 ml apă filtrată + gheață + garnish',
            image: coldBrewSimplu
        },
        {
            name: 'COLD BREW w. MILK',
            price: '250 ml',
            description: '80 ml cold brew + 170 ml lapte + gheață',
            image: coldBrewMilk
        },
        {
            name: 'COLD BREW TONIC',
            price: '280 ml',
            description: '80 ml cold brew + 200 ml apă tonică Franklin + gheata + garnish',
            image: coldBrewTonic
        },
        {
            name: 'AFFOGATO',
            price: '110 ml',
            description: '70 g înghețată Friddi de vanilie + espresso dublu 40 ml\n',
            image: affogato
        },
        {
            name: 'AMAZONIQ FRAPPE',
            price: '260 ml',
            description: 'Reteta noastra proprie de Frappe contine - 70 g înghețată friddi de vanilie + espresso dublu 40 ml + 150 ml lapte + gheata + crumble of oreo',
            image: frappe
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
