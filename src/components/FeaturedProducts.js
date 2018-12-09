import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import '../styles/ListProducts.css';

export default class FeatureProducts extends React.Component {
    render() {
      return (
        <Container>          
        <div class="clearfix">&nbsp;</div>
        <Row>
          <Col>
            <h2>Feature Products</h2>
          </Col>
        </Row>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <img class="img-responsive"src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/r/fruit_cake_7.jpg" ></img>
            
            <div class="shop_desc">
              <div class="shop_title pull-left">
                <a href="#" title="Fresh Fruit Cake"><span>Fresh Fruit Cake</span></a><br></br> 
                <span class="cats"><a href="#">Birthday Cake</a></span><br></br> 
                <span class="price"> ₹450 </span>
              </div>
            </div>          
          </div>  
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <img class="img-responsive" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/r/fruit_cake_7.jpg" ></img>
            <div class="shop_desc">
              <div class="shop_title pull-left">
                <a href="#" title="Fresh Fruit Cake"><span>Fresh Fruit Cake</span></a><br></br> 
                <span class="cats"><a href="#">Birthday Cake</a></span><br></br> 
                <span class="price"> ₹450 </span>
              </div>
            </div>          
          </div>  
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <img class="img-responsive" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/r/fruit_cake_7.jpg" ></img>
            <div class="shop_desc">
              <div class="shop_title pull-left">
                <a href="#" title="Fresh Fruit Cake"><span>Fresh Fruit Cake</span></a><br></br> 
                <span class="cats"><a href="#">Birthday Cake</a></span><br></br> 
                <span class="price"> ₹450 </span>
              </div>
            </div>          
          </div>  
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <img class="img-responsive" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/r/fruit_cake_7.jpg" ></img>
            <div class="shop_desc">
              <div class="shop_title pull-left">
                <a href="#" title="Fresh Fruit Cake"><span>Fresh Fruit Cake</span></a><br></br> 
                <span class="cats"><a href="#">Birthday Cake</a></span><br></br> 
                <span class="price"> ₹450 </span>
              </div>
            </div>          
          </div>        
        </div>        
        </Container>
      );
    }
}