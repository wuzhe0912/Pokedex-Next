import { Container, Row, Col } from 'react-bootstrap';

function FooterComponent() {
  return (
    <footer className='footer-wrapper mt-2'>
      <Container fluid>
        <Row>
          <Col className='bg-dark text-white text-center py-4'>
            © 2022 E-commerce by Pitt Wu. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
