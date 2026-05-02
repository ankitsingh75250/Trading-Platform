import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing page/home/Homepage';
import Aboutpages from './landing page/about/Aboutpage';
import PricingPage from './landing page/pricing/PricingPage';
import SupportPage from './landing page/support/SupportPage';
import ProductPage from './landing page/product/ProductPage';
import Singup from './landing page/signup/Signup';
import Navbar from './landing page/Navbar';
import Fotter from './landing page/Fotter';
import NotFound from './landing page/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/signup" element={<Singup />}></Route>
    <Route path="/about" element={<Aboutpages />}></Route>
    <Route path="/product" element={<ProductPage />}></Route>
    <Route path="/pricing" element={<PricingPage />}></Route>
    <Route path="/support" element={<SupportPage />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
  <Fotter />
  </BrowserRouter>
);


