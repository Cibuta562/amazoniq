import ProductGrid from "../components/ProductGrid";
import ScrollAnimation from 'react-animate-on-scroll';
import "./meniu.css"
import Menu from "../Menu";
import Footer from "./footer";

function Meniu() {
return(
    <div>
        <Menu/>
            <div className="meniu-bg">
                <ProductGrid/>
                <br/>
                <br/>
                <br/>
            </div>
        <Footer/>
    </div>
)
}

export default Meniu