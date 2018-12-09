import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://www.sweetcake.co/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/r/fruit_cake_7.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Fresh Fruit Cake</CardTitle>
          <CardSubtitle>Birthday Cake</CardSubtitle>
          <CardText>₹450</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;