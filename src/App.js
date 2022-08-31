
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import NotFound from './components/commons/notfound';
import Footer from './components/footer/Footer';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/products' exact element={<Products />} />
        <Route path='/aboutus' exact element={<About />} />
        <Route path='/contactus' exact element={<Contact />} />
        <Route path='/not-found' exact element={< NotFound />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
