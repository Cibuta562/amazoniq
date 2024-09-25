import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from "./Menu";
import Loading from "./pages/loading"
import Meniu from "./pages/meniu";
import Family from "./pages/family";
import MerchAndBeans from "./pages/merchAndBeans";
import Footer from "./pages/footer";
import LoadingAnimation, {LoadingProvider} from "./components/loadingAnimation";
import PrelucrareaDatelor from "./pages/prelucrareaDatelor";
import Cookies from "./pages/cookies";


function App() {

    return (
        <BrowserRouter>
                {/*<Menu />*/}
                <Routes>
                    <Route path='/' element={<Loading/>} />
                    <Route path='/under-construction/meniu' element={<Meniu/>} />
                    <Route path="/under-construction/our-family" element={<Family />} />
                    <Route path="/under-construction/merch-and-beans" element={<MerchAndBeans />} />
                    <Route path="/under-construction/merch-and-beans" element={<MerchAndBeans />} />
                    <Route path="/under-construction/prelucrarea-datelor" element={<PrelucrareaDatelor />} />
                    <Route path="/under-construction/cookies" element={<Cookies />} />
                </Routes>
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}

export default App;
