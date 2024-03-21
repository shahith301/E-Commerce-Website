import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from './Dashboard';
import Product from './product';
import Cart from './Cart';
import Checkout from './Checkout';
import Success from './Success';
export default function Home() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product/:id" element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout/'>
                <Route path='' element = { < Checkout/>} />
                <Route path=':id' element = { < Checkout/>} /> 
                </Route>
                <Route path='/success' element = { < Success/>} />
            </Routes>
        </div>
    );
}