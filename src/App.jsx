import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'

const App=() => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>} />

    <Route path="/products" element={<ProductsPage/>} />

    <Route path="/products/:id" element={<ProductDetailPage/>} />

    <Route path="/cart" element={<CartPage/>} />

    <Route path="/checkout" element={<CheckoutPage/>} />
  </Routes>

 </BrowserRouter>
 )
}

export default App