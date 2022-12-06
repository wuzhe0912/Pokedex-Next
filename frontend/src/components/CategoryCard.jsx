import { Card, Button } from 'react-bootstrap';
import cardImage from 'assets/games-category.png';

function CategoryCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={cardImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
