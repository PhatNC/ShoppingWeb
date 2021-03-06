import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Content.css';
import '../images/cake_1.jpg';

export default class Example extends React.Component {
  render() {
    return (
      <Container>          
		    <div class="clearfix">&nbsp;</div>
        <Row>
          <Col>
            <h2>Welcome to Sweetcake &amp; we Deliver <span class="rotate">Fresh, Sweet, Eggless </span>Cake.</h2>
            <p class="lead">Hey Everyone! We are Sweet Cake founded by a group of Online Cake Store professionals passionate about serving authentic Custamize Cake Designer Cake back in 2014. We Provide Online Cake And Flower Delivery in Delhi/NCR</p>
          </Col>
        </Row>
        <Row>
          <Col md="12" lg="8">
            <Row>
              <img class="img-resize" src="https://www.sweetcake.co/media/wysiwyg/small-banner-1.jpg" alt="Anh1" width="auto" height="auto" />
              <img class="img-resize" src="https://www.sweetcake.co/media/wysiwyg/small-banner-2.jpg" alt="Anh2" width="auto" height="auto" />
            </Row>
          </Col>           
          <Col md="12" lg="4">
              <img class="img-resize2" src="https://www.sweetcake.co/media/wysiwyg/small-banner-3_1_.jpg" alt="Anh3" /> 
          </Col>
        </Row>
      </Container>
    );
  }
}