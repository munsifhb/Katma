import React from 'react'
import { GeneralProvider, useGeneral } from './context/GeneralContext'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Shops from './pages/Shops';
import ShopDetails from './pages/ShopDetails';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

export default function App() {
  const { shops } = useGeneral();
  
  return (
    <div>
      <GeneralProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Shops' element={<Shops />} />
        <Route path='/shop/:id' element={<ShopDetails />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
      </GeneralProvider>
      <ToastContainer />
      <Footer />
      
    </div>
  )
}
