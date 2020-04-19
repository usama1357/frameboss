import React from 'react';
import './feature.scss';
import large from "../../assets/featured/Component97.png"
import image1 from "../../assets/featured/Component114.png"
import image2 from "../../assets/featured/Marquette_Frame.png"
import image3 from "../../assets/featured/041019.png"
import image4 from "../../assets/featured/Yellow_Truck.png"
import image5 from "../../assets/featured/070919.png"
import image6 from "../../assets/featured/Navy_Red.png"
import { Container, Row, Col } from 'reactstrap';
import Startframing from "./cards/type1.js"

class FeatureWorks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type1:[{image:image1,id:1,title:"Dover"},{image:image2,id:2,title:"Marquette"},
                  {image:image3,id:3,title:"Wren" }],
                  type2:[{image:image4,id:1,title:"Mercer"},{image:image5,id:2,title:"Everett"},
                                {image:image6,id:3,title:"Mandalay" }]
                  };
  }

  render(){
    return(
      <div className="feature">
        <div className="heading">
            Feature Product
        </div>
        <div className="divider"></div>
        <div className="title">
        Design a custom frame for photos, art and more
        </div>
        <div className="largephoto" style={{marginTop:"62px"}}>
        <img src={large} ></img>
        </div>
        <div>
            <Container fluid={true} style={{marginTop:"62px"}}>
              <Row>
                {this.state.type1.map( (img)=> <Col><Startframing image={img} type="startframing"/> </Col> )}
              </Row>
              <Row>
                {this.state.type2.map( (img)=> <Col><Startframing image={img} type="addtocart"/> </Col> )}
              </Row>
            </Container>
        </div>
      </div>

    )
  }
}

export default FeatureWorks
