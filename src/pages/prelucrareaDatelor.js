import "./prelucrareaDatelor.css"
import Menu from "../Menu";
import Footer from "./footer";


function PrelucrareaDatelor() {

    const fetchPlaceDetails = async () => {
        const placeId = 'ChIJHzs_1HgBskARCilzkRzmOvM'; // Your Place ID
        const apiKey = 'AIzaSyDsNHChTA7IfJQiecyPMD_JvGco7uNg8YY'; // Replace with your API key
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                console.log('Place Details:', data);
                // Use data.result.reviews to access reviews
            } else {
                console.error('Error fetching data:', data.error_message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

// Call the function to fetch place details

    return (<div className="prelucrareaDatelor-cont">
        <Menu/>
        <div className="prelucrareaDatelor-container">
            <p className="date-p">Prelucrarea Datelor</p>
            <button onClick={fetchPlaceDetails}>Get Data</button>
        </div>
        <Footer/>
    </div>)
}
export default PrelucrareaDatelor