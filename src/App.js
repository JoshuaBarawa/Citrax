
import Navbar from './components/commons/navbar';
import Home from './components/home';
import Products from './components/products';
import Contact from './components/contact';
import About from './components/about';
import NotFound from './components/commons/notfound';
import './App.css';
import { Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from  'styled-components';
import  GlobalStyles  from './components/styles/GlobalStyles';
import { StyledContainer } from './components/styles/Container';


const theme = {
  mobile: '768px'
}

function App() {
  return (

<ThemeProvider theme={theme}>
<>
<GlobalStyles />
<StyledContainer>
<Navbar />
  <Switch>
<Route path='/products' component={Products}/>
<Route path='/aboutus' component={About}/>
<Route path='/contactus' component={Contact}/>
<Route path='/not-found' component={NotFound}/>
<Route path='/' exact component={Home}/>
<Redirect to="/not-found" />
</Switch>
</StyledContainer>
</> 

</ThemeProvider>
  );
}

export default App;
