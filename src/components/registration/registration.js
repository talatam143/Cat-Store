import React from 'react'
import {Container, Form, Row, Col,Button} from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";

import "./registration.css";

const registration = () => {
    return (
        <Container fluid className="rdiv">
        <Row className="rrow">
            <Col lg={12}>
            <h1 className="heading">Cat Store</h1>
            </Col>
            <Col lg={12}>
                <Row className="formrow">
                    <Form>
                        <Row>
                            <Col>
                            <FloatingLabel label="First Name">
                            <Form.Control type="email" placeholder="bro" />
                            </FloatingLabel>
                            </Col>
                            <Col>
                            <FloatingLabel label="Last Name"/>
                            </Col>
                        </Row> <br/>
                        <Row>
                            <Col>
                            <FloatingLabel label="Email"/>
                            </Col>
                        </Row> <br/>
                        <Row>
                            <Col>
                            <FloatingLabel label="User Name"/>
                            </Col>
                            <Col>
                            <FloatingLabel label="Mobile Number"/>
                            </Col>
                        </Row> <br/>
                        <Row>
                            <Col>
                            <FloatingLabel label="Password"/>
                            </Col>
                            <Col>
                            <FloatingLabel label="Verify Passowrd"/>
                            </Col>
                        </Row> <br/>
                        <Row>
                            <Col lg={4}>
                            <Button  className="fbutton" variant="warning" size="lg" >SignUp </Button>
                            </Col>
                            <Col>
                                <a  className="forma" href="https://www.w3schools.com">Have Account..? Login</a>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Col>
        </Row>
        
        </Container>
    )
}

export default registration
