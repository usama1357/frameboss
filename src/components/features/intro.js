import React from 'react';
import './intro.scss';
import { Container, Row, Col,Button } from 'reactstrap';
import image from "../../assets/intro/Group410.png"


export default function Intro(){

  return(
    <div className="Intro">
    <Container fluid={true}>
      <Row>
        <Col xs="6">
        <img src={image} alt="image" className="image"></img>

        </Col>
        <Col xs="6" className="text">
          <div className="headline">
            A new approach to custom frame
          </div>
          <div className="textbox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Button outline className="start_framing">Start Framing</Button>
        </Col>
      </Row>
    </Container>
    <div className="trademark">
      <div className="end">© 2020 index.</div>
    </div>
    </div>

  )

}
