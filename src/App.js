import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from "./Menu";
import Loading from "./pages/loading"
import Meniu from "./pages/meniu";

const brewList = [
    "Cappuccino",
    "Flat White",
    "Cold Brew",
    "Espresso",
    "Latte",
];

function App() {
    return (
        <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Loading/>} />
                    <Route path='/under-construction/meniu' element={<Meniu/>} />
                    <Route path="*" element={<Loading />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
