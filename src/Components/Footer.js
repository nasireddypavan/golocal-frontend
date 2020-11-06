import { Form,Col,Container,Row, Button} from 'react-bootstrap';
import './Footer.css'

function Footer() {
    

    return (
        <>
            <div className= "upperfoot">
                <br />
                <h2>Join us today and start your day fresh!</h2>
                <br />
                <Container>
                <Row>
                    <Col >
                    <Form>
                        <Form.Group as={Col} className="email" controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col>
                        <h3>Or</h3>
                    </Col>
                    <Col>
                    <Button className="fewclass" variant="primary" type="submit">Sign in with Google</Button>
                    </Col>
                </Row>
                </Container>
                <br />
            </div>
        </>
    )
}

export default Footer;