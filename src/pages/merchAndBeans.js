import "./merchAndBeans.css"
import Menu from "../Menu";
import Footer from "./footer";
import vines from "../assets//product-images-webp/ABOUT US Ceiling vines.webp"
import punga from "../assets/product-images-webp/COMING SOON COFFEE BAG.webp"
import cana from "../assets/product-images-webp/COMING SOON CUP.webp"

function MerchAndBeans() {
    return(
        <div className="merch-bg">
            <Menu/>
            <div className="merch-container">
                <img src={vines} alt="vines-top" className="vines-top-merch"/>
                <p className="heading-merch">Brewing...</p>
                <div className="merch-cont">
                    <p className="p-merch">But we have you covered ! </p>
                    <p className="p-merch-1">Come to our shops ;) </p>
                </div>
                <div className="flex-merch">
                <img src={punga} alt="img-stanga" className="img-stanga"/>
                    <img src={cana} alt="img-dreapta" className="img-stanga"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MerchAndBeans