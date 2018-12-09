import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import CarouselBanner from './components/CarouselBanner';
import Header from './components/Header';
import NavBarTop from './components/NavBarTop';
import Content from './components/Content';
import ListProducts from './components/ListProducts';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <NavBarTop />         
        <Header />
        <CarouselBanner />
        <Content />
        <ListProducts />
      </div>
    );
  }
}

export default App;
