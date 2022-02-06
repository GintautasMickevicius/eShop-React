import { Card, Button } from "react-bootstrap";
import data from "../../Data/Data";
import { Link } from "react-router-dom";

const Product = ({addToCart}) => {
  return (
    <div className="cart">
      {data.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={item.imageUrl} item={item} />
          <Card.Body>
          <Link to={`/item/${item.name}`}><Card.Title>{item.name}</Card.Title></Link>
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
