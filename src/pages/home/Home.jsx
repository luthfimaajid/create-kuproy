import Topbar from "../../components/topbar/Topbar";
import Navbar from "../../components/navbar/Navbar";
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <Container className="mt-5">
          <Row className="justify-content-md-center">
            <Col md={8}>
              <h2 className="text-xl font-quicksand fw-medium mb-4 text-center">HOME</h2>
              <p className="font-montserrat fw-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores, 
                voluptates, quod, voluptas quia voluptatem quae accusantium quibusdam quidem 
                voluptatum quos. Quisquam, quae accusantium. Quisquam, quae accusantium. 
                Quisquam, quae accusantium. 
              </p>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
