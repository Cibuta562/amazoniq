import ProductGrid from "../components/ProductGrid";
import ScrollAnimation from 'react-animate-on-scroll';
import "./meniu.css"

function Meniu() {
return(
    <ScrollAnimation animateIn="fadeIn">
    <div className="meniu-bg">
        <ProductGrid/>
        <br/>
        <br/>
        <br/>
    </div>
    </ScrollAnimation>
)
}

export default Meniu