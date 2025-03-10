import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Header from './Header';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Coustmer from './Coustmer';
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/coustmer' element={<Coustmer />} />
                <Route path="/contact/" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
