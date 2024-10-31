import "./cookies.css"
import Menu from "../Menu";
import Footer from "./footer";


function Cookies() {
    return (<div className="cookies-cont">
        <Menu/>
        <div className="prelucrareaDatelor-container">
            <p className="date-p">Cookie Policy</p>
            <div className="prelucrare-texte">
                <h2>Why do we use Cookies?</h2>
                <p> We use cookies to personalise content and ads, to provide social media features and to analyse our
                    traffic. We
                    also share information about your use of our site with our social media, advertising and analytics
                    partners who
                    may combine it with other information that you’ve provided to them or that they’ve collected from
                    your use of
                    their services.</p>
                <h2>What are cookies?</h2>
                <p>Cookies are small text files that can be used by websites to make a user's experience more
                    efficient.</p>
                <p>The law states that we can store cookies on your device if they are strictly necessary for the
                    operation of this
                    site. For all other types of cookies we need your permission.</p>
                <p>This site uses different types of cookies. Some cookies are placed by third party services that
                    appear on our
                    pages.</p>
                <p>You can at any time change or withdraw your consent from the Cookie Declaration on our website.</p>

                <p>Learn more about who we are, how you can contact us and how we process personal data in our Privacy
                    Policy.</p>

                <p>Please state your consent ID and date when you contact us regarding your consent.</p>

                <h3>Necessary cookies</h3>
                <p> Necessary cookies help make a website usable by enabling basic functions like page navigation and
                    access to
                    secure areas of the website. The website cannot function properly without these cookies.</p>

                <h3>Statistic cookies</h3>
                <p>Statistic cookies help website owners to understand how visitors interact with websites by collecting
                    and
                    reporting information anonymously.</p>

                <h3>Preference cookies</h3>
                <p>Preference cookies enable a website to remember information that changes the way the website behaves
                    or looks,
                    like your preferred language or the region that you are in.</p>


                <h3>Marketing cookies</h3>
                <p>Marketing cookies are used to track visitors across websites. The intention is to display ads that
                    are relevant
                    and engaging for the individual user and thereby more valuable for publishers and third party
                    advertisers.</p>


                <h3>Unclassified cookies</h3>
                <p>Unclassified cookies are cookies that we are in the process of classifying, together with the providers of
                    individual cookies.
                </p>
                <br></br>
            </div>
        </div>

        <Footer/>
    </div>)
}

export default Cookies