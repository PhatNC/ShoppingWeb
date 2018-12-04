import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Content.css';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Welcome to Sweetcake &amp; we Deliver <span class="rotate">Fresh, Sweet, Eggless </span>Cake.</h2>
            <p class="lead">Hey Everyone! We are Sweet Cake founded by a group of Online Cake Store professionals passionate about serving authentic Custamize Cake Designer Cake back in 2014. We Provide Online Cake And Flower Delivery in Delhi/NCR</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" md="8">
            <img src="https://www.sweetcake.co/media/wysiwyg/small-banner-1.jpg" alt="Anh1" class="img-responsive" />
            <img src="https://www.sweetcake.co/media/wysiwyg/small-banner-2.jpg" alt="Anh2" class="img-responsive" />
          </Col>
          <Col xs="12" sm="4" md="4">
          <img src="https://www.sweetcake.co/media/wysiwyg/small-banner-3_1_.jpg" alt="Anh3" class="img-responsive" />
          </Col>
        </Row>
      </Container>
    );
  }
}