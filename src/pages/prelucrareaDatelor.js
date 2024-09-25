import "./prelucrareaDatelor.css"
import Menu from "../Menu";
import Footer from "./footer";


function PrelucrareaDatelor() {
    return (<div className="prelucrareaDatelor-cont">
        <Menu/>
        <div className="prelucrareaDatelor-container">
            <p className="date-p">Prelucrarea Datelor</p>
        </div>
        <Footer/>
    </div>)
}
export default PrelucrareaDatelor