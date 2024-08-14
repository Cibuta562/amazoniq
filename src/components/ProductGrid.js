import React, {useEffect, useRef, useState} from 'react';
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


const ProductGrid = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [showSidebar, setShowSidebar] = useState(true);

    const products = [
        {
            name: 'SINGLE ESPRESSO',
            category : 'HOT-COFFEE',
            price: '20 ml',
            description: '8g cafea Mabo, apă fierbinte',
            image: espresso
        },
        {
            name: 'DOUBLE ESPRESSO',
            category : 'HOT-COFFEE',
            price: '40 ml',
            description: '16g cafea Mabo, apă fierbinte',
            image: dubluEspresso
        },
        {
            name: 'LONG BLACK',
            category : 'HOT-COFFEE',
            price: '80 ml',
            description: 'Espresso dublu 40 ml + 40 ml apă fierbinte',
            image: longBlack
        },
        {
            name: 'V60 SINGLE ORIGIN',
            category : 'HOT-COFFEE',
            price: '350 ml',
            description: 'Cafea la filtru SINGLE ORIGIN',
            image: v60single
        },
        {
            name: 'V60 w. RARE',
            category : 'HOT-COFFEE',
            price: '350 ml',
            description: 'Cafea la filtru MICROLOT',
            image: v60single
        },
        {
            name: 'CORTADO',
            category : 'HOT-COFFEE',
            price: '90 ml',
            description: 'Espresso 20 ml + lapte 70 ml',
            image: cortado
        },
        {
            name: 'CAPPUCCINO',
            category : 'HOT-COFFEE',
            price: '180 ml',
            description: 'Espresso 20 ml + lapte 160 ml',
            image: cortado
        },
        {
            name: 'FLAT WHITE',
            category : 'HOT-COFFEE',
            price: '220 ml',
            description: 'Espresso dublu 40 ml + lapte 180 ml',
            image: flatWhite
        },
        {
            name: 'SINGLE LATTE',
            category : 'HOT-COFFEE',
            price: '320 ml',
            description: 'Espresso 20 ml + lapte 300 ml',
            image: singleLatte
        },
        {
            name: 'DOUBLE LATTE',
            category : 'HOT-COFFEE',
            price: '320 ml',
            description: 'Espresso 40 ml + lapte 280 ml',
            image: singleLatte
        },
        {
            name: 'MOCHA LATTE',
            category : 'HOT-COFFEE',
            price: '310 ml',
            description: '20g ciocolată (50%) + espresso dublu 40 ml + lapte 250 ml\n',
            image: mocha,
        },
        {
            name: 'DIRTY CHAI LATTE',
            category : 'HOT-COFFEE',
            price: '315 ml',
            description: '45 ml masala chai ( KO FI TI ) + espresso 20 ml + lapte 250 ml',
            image: chaiLatte,
        },
        {
            name: 'ESPRESSO TONIC',
            category : 'COLD-COFFEE',
            price: '240 ml',
            description: 'Espresso dublu 40 ml + 200 ml apă tonică Franklin + gheață + garnish',
            image: espressoTonic
        },
        {
            name: 'ICE LATTE',
            category : 'COLD-COFFEE',
            price: '190 ml',
            description: 'Espresso dublu 40 ml + 150 ml lapte + gheațăl',
            image: iceLatte
        },
        {
            name: 'COLD BREW SIMPLU',
            category : 'COLD-COFFEE',
            price: '250 ml',
            description: '80 ml cold brew + 170 ml apă filtrată + gheață + garnish',
            image: coldBrewSimplu
        },
        {
            name: 'COLD BREW w. MILK',
            category : 'COLD-COFFEE',
            price: '250 ml',
            description: '80 ml cold brew + 170 ml lapte + gheață',
            image: coldBrewMilk
        },
        {
            name: 'COLD BREW TONIC',
            category : 'COLD-COFFEE',
            price: '280 ml',
            description: '80 ml cold brew + 200 ml apă tonică Franklin + gheata + garnish',
            image: coldBrewTonic
        },
        {
            name: 'AFFOGATO',
            category : 'COLD-COFFEE',
            price: '110 ml',
            description: '70 g înghețată Friddi de vanilie + espresso dublu 40 ml\n',
            image: affogato
        },
        {
            name: 'AMAZONIQ FRAPPE',
            category : 'COLD-COFFEE',
            price: '260 ml',
            description: 'Reteta noastra proprie de Frappe contine - 70 g înghețată friddi de vanilie + espresso dublu 40 ml + 150 ml lapte + gheata + crumble of oreo',
            image: frappe
        },
        {
            name: 'BABYCCINO',
            category : 'NON-COFFEE',
            price: '220 ml',
            description: 'Cremă de lapte pentru copii – 220 ml',
            image: babyccino
        },
        {
            name: 'TEA',
            category : 'NON-COFFEE',
            price: '320 ml',
            description: 'Diferite sortimente de ceaiuri - 6 g ceai vrac + 320 ml apă fierbinte',
            image: tea
        },
        {
            name: 'CHAI LATTE',
            category : 'NON-COFFEE',
            price: '225 ml',
            description: '45 ml masala chai ( KO FI TI )+ lapte 180 ml',
            image: chai
        },
        {
            name: 'HOT CHOCOLATE',
            category : 'NON-COFFEE',
            price: '300 ml',
            description: '20 g ciocolată (50%) + lapte 280 ml',
            image: hotChocolate
        },
        {
            name: 'MATCHA LATTE',
            category : 'NON-COFFEE',
            price: '300 ml',
            description: '5 g matcha + 20 ml apă fierbinte + lapte de ovăz 280 ml',
            image: matcha
        },
        {
            name: 'FLAT WHITE DECAF',
            category : 'DECAF',
            price: '220 ml',
            description: 'Espresso dublu 40 ml + lapte 180 ml',
            image: flatWhite
        },
        {
            name: 'DOUBLE ESPRESSO DECAF',
            category : 'DECAF',
            price: '40 ml',
            description: '45 ml masala chai ( KO FI TI )+ lapte 180 ml',
            image: dubluEspresso
        },
        {
            name: 'LONG BLACK DECAF',
            category : 'DECAF',
            price: '80 ml',
            description: 'Espresso dublu 40 ml + 40 ml hot water',
            image: longBlack
        },
        {
            name: 'DOUBLE LATTE DECAF',
            category : 'DECAF',
            price: '320 ml',
            description: 'Espresso dublu 40 ml + lapte 280 ml',
            image: singleLatte
        },
        {
            name: 'ICE LATTE DECAF',
            category : 'DECAF',
            price: '190 ml',
            description: 'Espresso dublu 40 ml + 150 ml lapte + gheață',
            image: iceLatte
        },
        {
            name: 'APĂ PLATĂ',
            category : 'REFRESHMENTS',
            price: '330ML',
            description: 'Garanție returnare 0,50 lei',
            image: apa
        },
        {
            name: 'APĂ MINERALĂ',
            category : 'REFRESHMENTS',
            price: '330 ml',
            description: 'Garanție returnare 0,50 lei',
            image: apaMinerala
        },
        {
            name: 'APĂ TONICĂ',
            category : 'REFRESHMENTS',
            price: '200 ml',
            description: 'Garanție returnare 0,50 lei - CONȚINE ZAHĂR 7.9% -',
            image: apăTonica
        },
        {
            name: 'LIMONADĂ SIMPLĂ',
            category : 'REFRESHMENTS',
            price: '330 ml',
            description: 'Garanție returnare 0,50 lei - CONTINE 14% SUC DIN LAMAIE, ZAHAR 8.4%',
            image: limonada
        },
        {
            name: 'LIMONADĂ ZMEURĂ',
            category : 'REFRESHMENTS',
            price: '330 ml',
            description: 'CONTINE 10% SUC DIN LAMAIE + 10% SUC NATURAL DIN ZMEURA + ZAHAR 7.1%',
            image: limonadaZmeura
        },
        {
            name: 'SOCATA ARTIZANALA',
            category : 'REFRESHMENTS',
            price: '275 ml',
            description: 'CONTINE FLOARE DE SOC, LAMAIE, ZAHAR 8.7%',
            image: socata
        },
        {
            name: 'CHOCOLATE COOKIE',
            category : 'THINGS TO EAT',
            price: '1 buc',
            description: 'Alergeni: ' +
                'FAINA DE GRAU ALBA (NATURALA, FARA ADITIVI), OUA, UNT, CIOCOLATA BELGIANA 70% CACAO',
            image: cookie
        },
        {
            name: 'BANANA BREAD',
            category : 'THINGS TO EAT',
            price: '100 g',
            description: 'Alergeni: ' +
                'FAINA DE GRAU ALBA (NATURALA FARA ADITIVI), OUA, LAPTE, NUCA',
            image: banana
        },
        {
            name: 'VEGAN CUPCAKE',
            category : 'THINGS TO EAT',
            price: '100 g',
            description: 'Alergeni\n' +
                'VEGAN FRIENDLY',
            image: cupcake
        },
        {
            name: 'CHOCOLATE COOKIE COMBO',
            category : 'THINGS TO EAT',
            price: '2 buc',
            description: 'Alergeni: ' +
                'FAINA DE GRAU ALBA (NATURALA, FARA ADITIVI), OUA, UNT, CIOCOLATA BELGIANA 70% CACAO',
            image: cookeieCombpo
        },
        {
            name: 'EXTRA SHOT of ESPRESSO',
            category : 'EXTRAS',
            price: '20 ml',
            description: '',
            image: espresso
        },
        {
            name: "LAPTE DE OVAZ",
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

    const categories = [...new Set(products.map(product => product.category))];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const toggleSidebar = () => {
        setShowSidebar(prevState => !prevState);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div>
            <div style={{ paddingTop: "200px" }}></div>
            <div className="product-heading-container">
                {/* Heading section if needed */}
            </div>
            <div className="grid-wrapper">
                <button className="button-close" onClick={toggleSidebar}>
                    {/* Icon or text for closing sidebar */}
                </button>
                {showSidebar && (
                    <div className="sidebar">
                        <ul>
                            <li>
                                <button
                                    className={`button-category ${selectedCategory === '' ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange('')}
                                >
                                    ALL PRODUCTS
                                </button>
                            </li>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <button
                                        className={`button-category ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="product-grid">
                    {filteredProducts.map((product, index) => (
                        <Product
                            key={index}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
