import React from 'react';
import './whychoose.scss';
import { Container, Row, Col,Button } from 'reactstrap';
import icon1 from "../../assets/icons/free-shipping-icon.svg"
import icon2 from "../../assets/icons/designer-advice-icon.svg"
import icon3 from "../../assets/icons/price-icon.svg"
import icon4 from "../../assets/icons/free-return-icon.svg"
import image1 from "../../assets/random/photo.svg"
import image2 from "../../assets/random/600636.png"
import Snippet from "./cards/snippets.js"


class Whychoose extends React.Component{
  constructor(props) {
    super(props);
    this.state = {icons:[{image:icon1,id:1,title:"Free Shipping", text:"you're here to buy art, not cardboard boxes."},
                  {image:icon2,id:2,title:"Free Designer Advice", text:"you're here to buy art, not cardboard boxes."},
                  {image:icon3,id:3,title:"Everyday Low Price", text:"you're here to buy art, not cardboard boxes."},
                  {image:icon4,id:4,title:"Free Returns", text:"you're here to buy art, not cardboard boxes."}
                  ]};
  }



  render(){
    return(
      <div className="whychoose">
        <Container fluid={true}>
          <Row>
            <Col xs="8">
              <div className="headline">Why Choose Us</div>
              <div className="title">Our countless frame types are loved by global frame lovers, due to the variety, quality yet simplicity.</div>
              <Row>
                  {this.state.icons.map((icon) => <Col xs="6" style={{marginTop:"50px"}}> <Snippet icon={icon} type="whyshipus"/> </Col> )}
              </Row>
              <Button outline className="start_framing">Start Framing</Button>
            </Col>
            <Col xs="4">
              <img src={image1} className="back"></img>
              <img src={image2}  className="front"></img>
            </Col>
          </Row>
        </Container>


      </div>
    )
  }
}

export default Whychoose
