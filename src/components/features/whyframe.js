import React from 'react';
import './whyframe.scss';
import image1 from "../../assets/whyframe/jersey.png"
import image2 from "../../assets/whyframe/minion.png"
import image3 from "../../assets/whyframe/NoPath.png"
import image4 from "../../assets/whyframe/pngfuel.com(2).png"
import image5 from "../../assets/whyframe/pngfuel.com.png"
import image6 from "../../assets/whyframe/rayu.png"
import Whyframeimage from "./cards/photos.js"
import { Container, Row, Col } from 'reactstrap';

class Whyframe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {images:[{image:image5,id:5,title:"Original Art"},{image:image4,id:4,title:"Object"},
                  {image:image3,id:3,title:"Textile" },{image:image1,id:1,title:"Jersey"},
                  {image:image6,id:6,title:"Photography"},{image:image2,id:2,title:"Something Else"}]};
  }

  render(){
    return(
      <div className="whyframe">
        <div className="heading">
            What Are You Framing?
        </div>
        <div className="divider"></div>
        <div className="title">
        Design a custom frame for photos, art and more
        </div>

        <Container fluid={true}>
          <Row>
          {this.state.images.map( (img)=> <Col><Whyframeimage image={img}/> </Col> )}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Whyframe
