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
import babyccino from "../assets/img_16.png"
import tea from "../assets/img_17.png"
import chai from "../assets/img_18.png"
import hotChocolate from "../assets/img_19.png"
import matcha from "../assets/img_20.png"
import apa from "../assets/img_21.png"
import apaMinerala from "../assets/img_22.png"
import apăTonica from "../assets/img_23.png"
import limonada from "../assets/img_24.png"
import limonadaZmeura from "../assets/img_25.png"
import socata from "../assets/img_26.png"
import cookie from "../assets/img_27.png"
import banana from "../assets/img_28.png"
import cupcake from "../assets/img_29.png"
import cookeieCombpo from "../assets/img_30.png"
import ovaz from "../assets/img_31.png"
import mazare from "../assets/img_32.png"
import bere from "../assets/img_33.png"
import prosecco from "../assets/img_34.png"


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
        {
            name: 'BABYCCINO',
            price: '220 ml',
            description: 'Cremă de lapte pentru copii – 220 ml',
            image: babyccino
        },
        {
            name: 'TEA',
            price: '320 ml',
            description: 'Diferite sortimente de ceaiuri - 6 g ceai vrac + 320 ml apă fierbinte',
            image: tea
        },
        {
            name: 'CHAI LATTE',
            price: '225 ml',
            description: '45 ml masala chai ( KO FI TI )+ lapte 180 ml',
            image: chai
        },
        {
            name: 'HOT CHOCOLATE',
            price: '300 ml',
            description: '20 g ciocolată (50%) + lapte 280 ml',
            image: hotChocolate
        },
        {
            name: 'MATCHA LATTE',
            price: '300 ml',
            description: '5 g matcha + 20 ml apă fierbinte + lapte de ovăz 280 ml',
            image: matcha
        },
        {
            name: 'FLAT WHITE DECAF',
            price: '220 ml',
            description: 'Espresso dublu 40 ml + lapte 180 ml',
            image: flatWhite
        },
        {
            name: 'CHAI LATTE',
            price: '225 ml',
            description: '45 ml masala chai ( KO FI TI )+ lapte 180 ml',
            image: chai
        },
        {
            name: 'DOUBLE ESPRESSO DECAF',
            price: '40 ml',
            description: '45 ml masala chai ( KO FI TI )+ lapte 180 ml',
            image: dubluEspresso
        },
        {
            name: 'LONG BLACK DECAF',
            price: '80 ml',
            description: 'Espresso dublu 40 ml + 40 ml hot water',
            image: longBlack
        },
        {
            name: 'DOUBLE LATTE DECAF',
            price: '320 ml',
            description: 'Espresso dublu 40 ml + lapte 280 ml',
            image: singleLatte
        },
        {
            name: 'ICE LATTE DECAF',
            price: '190 ml',
            description: 'Espresso dublu 40 ml + 150 ml lapte + gheață',
            image: iceLatte
        },
        {
            name: 'APĂ PLATĂ',
            price: '330ML',
            description: 'Garanție returnare 0,50 lei',
            image: apa
        },
        {
            name: 'APĂ MINERALĂ',
            price: '330 ml',
            description: 'Garanție returnare 0,50 lei',
            image: apaMinerala
        },
        {
            name: 'APĂ TONICĂ',
            price: '200 ml',
            description: 'Garanție returnare 0,50 lei - CONȚINE ZAHĂR 7.9% -',
            image: apăTonica
        },
        {
            name: 'LIMONADĂ SIMPLĂ',
            price: '330 ml',
            description: 'Garanție returnare 0,50 lei - CONTINE 14% SUC DIN LAMAIE, ZAHAR 8.4%',
            image: limonada
        },
        {
            name: 'LIMONADĂ ZMEURĂ',
            price: '330 ml',
            description: 'CONTINE 10% SUC DIN LAMAIE + 10% SUC NATURAL DIN ZMEURA + ZAHAR 7.1%',
            image: limonadaZmeura
        },
        {
            name: 'SOCATA ARTIZANALA',
            price: '275 ml',
            description: 'CONTINE FLOARE DE SOC, LAMAIE, ZAHAR 8.7%',
            image: socata
        },
        {
            name: 'CHOCOLATE COOKIE',
            price: '1 buc',
            description: 'Alergeni: ' +
                'FAINA DE GRAU ALBA (NATURALA, FARA ADITIVI), OUA, UNT, CIOCOLATA BELGIANA 70% CACAO',
            image: cookie
        },
        {
            name: 'BANANA BREAD',
            price: '100 g',
            description: 'Alergeni: ' +
                'FAINA DE GRAU ALBA (NATURALA FARA ADITIVI), OUA, LAPTE, NUCA',
            image: banana
        },
        {
            name: 'VEGAN CUPCAKE',
            price: '100 g',
            description: 'Alergeni\n' +
                'VEGAN FRIENDLY',
            image: cupcake
        },
        {
            name: 'CHOCOLATE COOKIE COMBO',
            price: '2 buc',
            description: 'Alergeni: ' +
                'FAINA DE GRAU ALBA (NATURALA, FARA ADITIVI), OUA, UNT, CIOCOLATA BELGIANA 70% CACAO',
            image: cookeieCombpo
        },
        {
            name: 'EXTRA SHOT of ESPRESSO',
            price: '20 ml',
            description: '',
            image: espresso
        },
        {
            name: "LAPTE DE OVAZ",
            price: '1 L',
            description: 'OATLY - 1L',
            image: ovaz
        },
        {
            name: "LAPTE DE MAZARE",
            price: '1 L',
            description: 'SPROUD MILK - 1L',
            image: mazare
        },
        {
            name: "BERE ARTIZANALA",
            price: '330 ml',
            description: 'Garanție returnare 0,50 lei\n' +
                'De la prietenii de la Anagram',
            image: bere
        },
        {
            name: "PROSECCO DOC EXTRA DRY SERENA",
            price: '200 ml',
            description: 'Garanție returnare 050 lei\n' +
                'Sticluțe de 200ML',
            image: prosecco
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
