
import React from 'react';
import './App.css';
import { HashRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import NotFound from './components/commons/notfound';
import Footer from './components/footer/Footer';

function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path='/products' component={Products} />
        <Route path='/aboutus' component={About} />
        <Route path='/contactus' component={Contact} />
        <Route path='/not-found' component={NotFound} />
        <Route path='/' exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
