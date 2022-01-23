import { Card, Button } from "react-bootstrap";
import data from "../../Data/Data";

const Product = ({addToCart}) => {
  return (
    <div className="cart">
      {data.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.price} €</Card.Text>
            <Button variant="secondary" onClick={()=>addToCart(item)}>Į krepšelį</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Product;
