import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Meniu from "./pages/meniu";
import Family from "./pages/family";
import MerchAndBeans from "./pages/merchAndBeans";
import PrelucrareaDatelor from "./pages/prelucrareaDatelor";
import Cookies from "./pages/cookies";


function App() {

    return (
        <BrowserRouter>
                {/*<Menu />*/}
                <Routes>
                    <Route path='/' element={<Family/>} />
                    <Route path='/meniu' element={<Meniu/>} />
                    <Route path="/our-family" element={<Family />} />
                    <Route path="/merch-and-beans" element={<MerchAndBeans />} />
                    <Route path="/prelucrarea-datelor" element={<PrelucrareaDatelor />} />
                    <Route path="/cookies" element={<Cookies />} />
                </Routes>
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}

export default App;
