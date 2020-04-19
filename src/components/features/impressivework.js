import React from 'react';
import './impressivework.scss';
import { Container, Row, Col} from 'reactstrap';
import image1 from "../../assets/impressive/Component84.png"
import image2 from "../../assets/impressive/impressive7.png"
import image3 from "../../assets/impressive/Component82.png"
import image4 from "../../assets/impressive/Component83.png"
import Startframing from "./cards/type1.js"


class Impressivework extends React.Component {



  render(){
    return(
      <div className="impressivework">
        <div className="heading">
            Our Impressive Works
        </div>
        <div className="divider"></div>
        <div className="title">
        Design a custom frame for photos, art and more
        </div>
        <Container fluid={true} style={{marginTop:"60px"}}>
          <Row>
            <Col xs="6">
              <Startframing img={image1} type="zoomwithbox"/>
            </Col>
            <Col xs="6">
              <Row>
                <Col><Startframing img={image2} type="zoom"/> </Col>
                <Col><Startframing img={image3} type="zoom"/> </Col>
              </Row>
              <Row style={{marginTop:"40px"}}>
                <Col><Startframing img={image4} type="zoomwithbox" /> </Col>
              </Row>
            </Col>
          </Row>
        </Container>

      </div>

    )
  }
}

export default Impressivework
