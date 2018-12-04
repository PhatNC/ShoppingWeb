import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import CarouselBanner from './components/CarouselBanner';
import Header from './components/Header';
import NavBarTop from './components/NavBarTop';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">               
          <NavBarTop />
        </nav> 
      </div>

      {/* Header */}
      <div class="container-fluid">
        <div class="row">
          <div id="logo" class="col-md-6">
           {/* <logo src="images/logo.png">  */}
          </div>
          <div id="content" class="col-md-6">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">               
              <Header />
            </nav> 
          </div>
        </div>         
      </div>
        <CarouselBanner />
      </div>
    );
  }
}

export default App;