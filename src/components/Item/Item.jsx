import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ( { item } ) => {
  return (

  <div>
    <div className="cart">
            <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.price} €</Card.Text>
          </Card.Body>
        </Card>
       </div>
  </div>

    );
};

export default Item;
