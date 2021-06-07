import React from 'react'
import {Col, Container, Row, Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import "./root.css";

const Root = () => {

    const history = useHistory();

    const handleClick = () => history.push('/auth');

    return (
        <Container fluid className="rootimg">
        <Container className="containerdiv">
        <Row >
        <Col lg={12}>
        <h1 className="heading">Cat Store</h1>
        </Col>
        <Col lg={5} className="infocol">
            <p>Are you a Cat lover..?</p>
            <p>Then You are landed in Cat World</p>
            <p>Meet your dream Cat</p>
        </Col>
        <Col lg={7} className="logincol">
            <p style={{marginTop : 30}}>Let's start finding Your Cat</p>
            <Button className="btn" variant="warning" style={{marginTop : 30}} onClick={handleClick}> Login</Button> <br/>
            <Button className="btn" variant="warning" style={{marginTop : 20, marginBottom:10}} onClick={handleClick}>SignUp </Button>
            <p style={{marginTop : 20, fontSize:20}}>Need Assistance..?</p>
            <p style={{fontSize:20}} >Mail us at: CatStore@Assistance.com</p>
        </Col>
        </Row>
        </Container>
        </Container>
        

    )
}

export default Root
