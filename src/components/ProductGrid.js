import React, { useState, useMemo, Suspense } from 'react';
import './ProductGrid.css';
import Product from "./ProductContainer";
import coldBrewSimplu from "../assets/product-images-webp/img_35.webp"
import espresso from "../assets/product-images-webp/img_1.webp"
import dubluEspresso from "../assets/product-images-webp/img_2.webp"
import longBlack from "../assets/product-images-webp/img_3.webp"
import v60single from "../assets/product-images-webp/img_4.webp"
import cortado from "../assets/product-images-webp/img_5.webp"
import flatWhite from "../assets/product-images-webp/img_6.webp"
import singleLatte from "../assets/product-images-webp/img_7.webp"
import mocha from "../assets/product-images-webp/img_8.webp"
import chaiLatte from "../assets/product-images-webp/img_9.webp"
import espressoTonic from "../assets/product-images-webp/img_10.webp"
import iceLatte from "../assets/product-images-webp/img_11.webp"
import coldBrewMilk from "../assets/product-images-webp/img_12.webp"
import coldBrewTonic from "../assets/product-images-webp/img_13.webp"
import affogato from "../assets/product-images-webp/img_14.webp"
import frappe from "../assets/product-images-webp/img_15.webp"
import babyccino from "../assets/product-images-webp/img_16.webp"
import tea from "../assets/product-images-webp/img_17.webp"
import chai from "../assets/product-images-webp/img_18.webp"
import hotChocolate from "../assets/product-images-webp/img_19.webp"
import matcha from "../assets/product-images-webp/img_20.webp"
import apa from "../assets/product-images-webp/img_21.webp"
import apaMinerala from "../assets/product-images-webp/img_22.webp"
import apăTonica from "../assets/product-images-webp/img_23.webp"
import limonada from "../assets/product-images-webp/img_24.webp"
import limonadaZmeura from "../assets/product-images-webp/img_25.webp"
import socata from "../assets/product-images-webp/img_26.webp"
import cookie from "../assets/product-images-webp/img_27.webp"
import banana from "../assets/product-images-webp/img_28.webp"
import cupcake from "../assets/product-images-webp/img_29.webp"
import cookeieCombpo from "../assets/product-images-webp/img_30.webp"
import ovaz from "../assets/product-images-webp/img_31.webp"
import mazare from "../assets/product-images-webp/img_32.webp"
import bere from "../assets/product-images-webp/img_33.webp"
import prosecco from "../assets/product-images-webp/img_34.webp"
import arrowToggle from "../assets/arrowClose.svg"

const ProductGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showSidebar, setShowSidebar] = useState(true);
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);

    const products = [
        {
            name: 'SINGLE ESPRESSO',
            category : 'HOT-COFFEE',
            price: '20 ml',
            description: 'Single Espresso',
            image: espresso
        },
        {
            name: 'DOUBLE ESPRESSO',
            category : 'HOT-COFFEE',
            price: '40 ml',
            description: 'Double Espresso',
            image: dubluEspresso
        },
        {
            name: 'LONG BLACK',
            category : 'HOT-COFFEE',
            price: '80 ml',
            description: 'Double Espresso 40 ml + 40ml Hot Water',
            image: longBlack
        },
        {
            name: 'V60 SINGLE ORIGIN',
            category : 'HOT-COFFEE',
            price: '350 ml',
            description: 'Filter Coffee - Single Origin',
            image: v60single
        },
        {
            name: 'V60 w. RARE',
            category : 'HOT-COFFEE',
            price: '350 ml',
            description: 'Filter Coffee - Microlots',
            image: v60single
        },
        {
            name: 'CORTADO',
            category : 'HOT-COFFEE',
            price: '90 ml',
            description: 'Single Espresso 20 ml + 70 ml Milk',
            image: cortado
        },
        {
            name: 'CAPPUCCINO',
            category : 'HOT-COFFEE',
            price: '180 ml',
            description: 'Single Espresso 20 ml + 160 ml Milk',
            image: cortado
        },
        {
            name: 'FLAT WHITE',
            category : 'HOT-COFFEE',
            price: '220 ml',
            description: 'Double Espresso 40 ml + 180 ml Milk',
            image: flatWhite
        },
        {
            name: 'SINGLE LATTE',
            category : 'HOT-COFFEE',
            price: '320 ml',
            description: 'Single Espresso 20 ml + 300ml Milk',
            image: singleLatte
        },
        {
            name: 'DOUBLE LATTE',
            category : 'HOT-COFFEE',
            price: '320 ml',
            description: 'Double Espresso 40 ml + 280 Milk',
            image: singleLatte
        },
        {
            name: 'MOCHA LATTE',
            category : 'HOT-COFFEE',
            price: '310 ml',
            description: 'Chocolate (50%) 20 g + Double Espresso 40 ml + 250 ml Milk',
            image: mocha,
        },
        {
            name: 'DIRTY CHAI LATTE',
            category : 'HOT-COFFEE',
            price: '315 ml',
            description: 'Masala Chai (KO FI TI) 45 ml + Double Espresso 20 ml + 250 ml Milk',
            image: chaiLatte,
        },
        {
            name: 'TONIC ESPRESSO',
            category : 'COLD-COFFEE',
            price: '240 ml',
            description: '40 ml Double Espresso + 200 ml Franklin Tonic Water + Ice',
            image: espressoTonic
        },
        {
            name: 'ICED LATTE',
            category : 'COLD-COFFEE',
            price: '190 ml',
            description: '40 ml Double Espresso + 150 ml Milk + Ice\n',
            image: iceLatte
        },
        {
            name: 'COLD BREW WATER',
            category : 'COLD-COFFEE',
            price: '250 ml',
            description: '80 ml Cold Brew + 170 ml Filtered Water + Garnish\n',
            image: coldBrewSimplu
        },
        {
            name: 'COLD BREW w. MILK',
            category : 'COLD-COFFEE',
            price: '250 ml',
            description: '80 ml Cold Brew + 170 ml Milk',
            image: coldBrewMilk
        },
        {
            name: 'COLD BREW TONIC',
            category : 'COLD-COFFEE',
            price: '280 ml',
            description: '80 ml Cold Brew + 200 ml Franklin Tonic Water + Ice + Garnish',
            image: coldBrewTonic
        },
        {
            name: 'AFFOGATO',
            category : 'COLD-COFFEE',
            price: '110 ml',
            description: '70 g Friddi Vanilla Ice Cream + Double Espresso 40 ml',
            image: affogato
        },
        {
            name: 'AMAZONIQ FRAPPE',
            category : 'COLD-COFFEE',
            price: '260 ml',
            description: 'Our Unique Recipe - 70g Friddi Vanilla Ice Cream + Double Espresso 40 ml + 150 ml Milk + Ice + Oreo Crumbs',
            image: frappe
        },
        {
            name: 'BABYCCINO',
            category : 'NON-COFFEE',
            price: '220 ml',
            description: 'Steamed Milk - 220 ml',
            image: babyccino
        },
        {
            name: 'TEA',
            category : 'NON-COFFEE',
            price: '320 ml',
            description: 'A Varied Selection of Teas - 6 g Tea + 320 ml Water',
            image: tea
        },
        {
            name: 'CHAI LATTE',
            category : 'NON-COFFEE',
            price: '225 ml',
            description: '45 ml Masala Chai (KO FI TI) + 180 ml Milk',
            image: chai
        },
        {
            name: 'HOT CHOCOLATE',
            category : 'NON-COFFEE',
            price: '300 ml',
            description: '20 g Chocolate (50%) + 280 ml Milk',
            image: hotChocolate
        },
        {
            name: 'MATCHA LATTE',
            category : 'NON-COFFEE',
            price: '300 ml',
            description: '5 g Matcha + 20 ml Hot Water + 280 ml Oat Milk',
            image: matcha
        },
        {
            name: 'DECAF DOUBLE ESPRESSO ',
            category : 'DECAF',
            price: '40 ml',
            description: 'Decaf Double Espresso',
            image: dubluEspresso
        },
        {
            name: 'DECAF LONG BLACK',
            category : 'DECAF',
            price: '80 ml',
            description: 'Double Espresso 40 ml + 40 ml Hot Water',
            image: longBlack
        },
        {
            name: 'DECAF DOUBLE LATTE',
            category : 'DECAF',
            price: '320 ml',
            description: 'Double Espresso 40 ml + 280 ml Milk',
            image: singleLatte
        },
        {
            name: 'DECAF FLAT WHITE',
            category : 'DECAF',
            price: '220 ml',
            description: 'EDouble Espresso 40 ml + 180 ml Milk',
            image: flatWhite
        },
        {
            name: 'DECAF ICED LATTE',
            category : 'DECAF',
            price: '190 ml',
            description: 'Double Espresso 40 ml + 150 ml Milk + Ice',
            image: iceLatte
        },
        {
            name: 'STILL WATER',
            category : 'REFRESHMENTS',
            price: '330ML',
            description: 'Still Water',
            image: apa
        },
        {
            name: 'SPARKLING WATER',
            category : 'REFRESHMENTS',
            price: '330 ml',
            description: 'Sparkling Water',
            image: apaMinerala
        },
        {
            name: 'TONIC WATER',
            category : 'REFRESHMENTS',
            price: '200 ml',
            description: '7.9% SUGAR CONTENT',
            image: apăTonica
        },
        {
            name: 'SIMPLE LEMONADE',
            category : 'REFRESHMENTS',
            price: '330 ml',
            description: 'Contains 14% Lemon Juice, 8.4% Sugar',
            image: limonada
        },
        {
            name: 'RASPBERRY LEMONADE',
            category : 'REFRESHMENTS',
            price: '330 ml',
            description: 'Contains 10% Lemon Juice + 10% Raspberry Juice, 7.1% Sugar',
            image: limonadaZmeura
        },
        {
            name: 'ARTISANAL ELDERFLOWER DRINK',
            category : 'REFRESHMENTS',
            price: '275 ml',
            description: 'Artisanal Elderflower Drink',
            image: socata
        },
        {
            name: 'CHOCOLATE COOKIE',
            category: 'THINGS TO EAT',
            price: '1 piece',
            description: 'Allergens: WHITE WHEAT FLOUR (NATURAL, WITHOUT ADDITIVES), EGGS, BUTTER, BELGIAN CHOCOLATE 70% COCOA',
            image: cookie
        },
        {
            name: 'BANANA BREAD',
            category: 'THINGS TO EAT',
            price: '100 g',
            description: 'Allergens: WHITE WHEAT FLOUR (NATURAL, WITHOUT ADDITIVES), EGGS, MILK, WALNUTS',
            image: banana
        },
        {
            name: 'VEGAN CUPCAKE',
            category: 'THINGS TO EAT',
            price: '100 g',
            description: 'Allergens: VEGAN FRIENDLY',
            image: cupcake
        },
        {
            name: 'CHOCOLATE COOKIE COMBO',
            category: 'THINGS TO EAT',
            price: '2 pieces',
            description: 'Allergens: WHITE WHEAT FLOUR (NATURAL, WITHOUT ADDITIVES), EGGS, BUTTER, BELGIAN CHOCOLATE 70% COCOA',
            image: cookeieCombpo
        },
        {
            name: 'EXTRA SHOT of ESPRESSO',
            category : 'EXTRAS',
            price: '20 ml',
            description: 'Extra Shot of Espresso',
            image: espresso
        },
        {
            name: "OAT MILK",
            category : 'EXTRAS',
            price: '1 L',
            description: 'OATLY - 1L',
            image: ovaz
        },
        {
            name: "LAPTE DE MAZARE",
            category : 'EXTRAS',
            price: '1 L',
            description: 'SPROUD MILK - 1L',
            image: mazare
        },
        {
            name: "BERE ARTIZANALA",
            category : 'ALCOOALE',
            price: '330 ml',
            description: 'Garanție returnare 0,50 lei\n' +
                'De la prietenii de la Anagram',
            image: bere
        },
        {
            name: "PROSECCO DOC EXTRA DRY SERENA",
            category : 'ALCOOALE',
            price: '200 ml',
            description: 'Garanție returnare 050 lei\n' +
                'Sticluțe de 200ML',
            image: prosecco
        },
    ];


    const categories = useMemo(() => [...new Set(products.map(product => product.category))], [products]);

    const filteredProducts = useMemo(() => {
        return selectedCategory
            ? products.filter(product => product.category === selectedCategory)
            : products;
    }, [selectedCategory, products]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setShowMobileDropdown(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className="padding-top-div"></div>
            <div className="product-heading-container"></div>
            <div className="parent-container">
                <div className={`mobile-dropdown-container ${showMobileDropdown ? 'show' : ''}`}>
                    <button className="mobile-dropdown-toggle" onClick={() => setShowMobileDropdown(prev => !prev)}>
                        {selectedCategory || 'WHAT FILLS YOUR CUP?'}
                        <img className="arrow-toggle-mobile" src={arrowToggle} alt="toggle-mobile" />
                    </button>
                    <ul className={`mobile-dropdown ${showMobileDropdown ? 'show' : ''}`}>
                        <li>
                            <button onClick={() => handleCategoryChange('')} className={selectedCategory === '' ? 'active' : ''}>
                                ALL PRODUCTS
                            </button>
                        </li>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <button onClick={() => handleCategoryChange(category)} className={selectedCategory === category ? 'active' : ''}>
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grid-wrapper">
                <button className="button-close" onClick={() => setShowSidebar(prev => !prev)}></button>
                {showSidebar && (
                    <div className="sidebar">
                        <ul>
                            <li>
                                <button onClick={() => handleCategoryChange('')} className={selectedCategory === '' ? 'active' : ''}>
                                    ALL PRODUCTS
                                </button>
                            </li>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <button onClick={() => handleCategoryChange(category)} className={selectedCategory === category ? 'active' : ''}>
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="product-grid">
                    {filteredProducts.map((product, index) => (
                        <Suspense key={index} fallback={<div>Loading...</div>}>
                            <Product
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                        </Suspense>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
