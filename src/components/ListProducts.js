import React from 'react';
import { Container, Row, Col, Media, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../styles/ListProducts.css';
import CardProduct from './CardProduct';

export default class ListProducts extends React.Component {
    render() {
      return (
        <Container>          
        <div class="clearfix">&nbsp;</div>
        <Row>
          <Col>
            <h2>Feature Products</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg style={{opacity: 0.5}} top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/r/fruit_cake_7.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolate-kitkat-jmaes-cake_2.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolate_photo_cake_delivery.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolate_truffle_cake_2.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>        
        <div class="clearfix">&nbsp;</div>
        <Row>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/a/basket_cake.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/h/choco_strawerry_cake.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/e/n/enchanted_flower.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="3">
            <Card>
              <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/r/frozen_photo_cake.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fresh Fruit Cake</CardTitle>
                <CardSubtitle>Birthday Cake</CardSubtitle>
                <CardText>₹450</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        </Container>
      );
    }
}