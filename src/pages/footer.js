import "./footer.css"
import {Link} from "react-router-dom";
import Family from "./family";
import Meniu from "./meniu";
import MerchAndBeans from "./merchAndBeans";

function Footer() {
    return(
        <div className="footer-cont">
        <div className="footer-top-section-container">
            <div className="footer-top-logo">
                AMAZONIQ
            </div>
            <div className="footer-top-line">

            </div>
        </div>
        <div className="footer-container">
            <div className="footer-section-1">
                Coltisorul de specialitate, unde se bea cafea buna, se rade mult si se leaga prietenii magice, din 2022, pana acum.
            </div>
            <div className="footer-section-2">
                <p>MENU</p>
                <Link to={Family}>
                    <p>Our family</p>
                </Link>
                <Link to={Meniu}>
                    <p>Drinks</p>
                </Link>
                <Link to={MerchAndBeans}>
                    <p>Shop with us</p>
                </Link>
            </div>
            <div className="footer-section-3">
                <p>INFO</p>
                <a href="#"><p>Contact</p></a>
                <a href="#"><p>Prelucrarea datelor</p></a>
                <a href="#"><p>Politica cookie</p></a>
                <a href="#"><p>Termeni si conditii</p></a>
            </div>
        </div>
        </div>
    )
}

export default Footer