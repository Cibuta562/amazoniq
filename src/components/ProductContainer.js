import React, {useEffect, useRef, useState} from 'react';
import './ProductContainer.css';
import "./ProductContainer.sass"
import logo from "../assets/40x40 coal.svg"
import arrow from "../assets/arrow.svg"

const Product = ({ name, price, description, image }) => {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const [ulHeight, setUlHeight] = useState('0px');
    const ulRef = useRef(null);

    const toggleDescription = () => {
        setIsDescriptionVisible(prevState => {
            if (prevState) {
                // Collapse immediately
                setTimeout(() => setIsDescriptionVisible(false), 0);
            } else {
                setIsDescriptionVisible(true);
            }
            return !prevState;
        });
    };


    useEffect(() => {
        if (ulRef.current) {
            if (isDescriptionVisible) {
                setUlHeight(`${ulRef.current.scrollHeight + 1}px`);
            } else {
                setUlHeight('0px');
            }
        }
    }, [isDescriptionVisible]);




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
            <div className="decoration-line-top" onClick={toggleDescription}></div>
            {/*/!*<div className="decoration-line-top"></div>*!/*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div onClick={toggleDescription} className="bottom-flex">*!/*/}
            {/*<div*/}
            {/*    className={`decoration-line-bottom ${isDescriptionVisible ? 'hidden' : ''}`}*/}
            {/*    onClick={toggleDescription}*/}
            {/*></div>*/}
            <div className="decoration-flex">
            <div className="decoration-line-top2" onClick={toggleDescription}>
            </div>
                <img src={arrow} className={`arrow-dec ${isDescriptionVisible ? 'active' : ''}`} alt="lipsa poza" onClick={toggleDescription} />
            </div>
            <div
                className={`wrapper wrapper1 ${isDescriptionVisible ? 'active' : ''}`}
                id="wrapper"
                onClick={toggleDescription}
            >
                <p className="click-text">
                     <span className="arrow"></span>
                </p>
                <div className="div-desc" ref={ulRef} style={{ height: ulHeight }}>
                    <p className="product-description">
                        {description}
                    </p>
                    <div className="decoration-line-bottom-active" onClick={toggleDescription}></div>
                </div>
            </div>
                <img className="logo-bottom" src={logo} alt="arrow-lipsa" onClick={toggleDescription}/>
        </div>
    );
};

export default Product;
