import React from 'react';
import './client.scss';
import { Container, Row, Col } from 'reactstrap';
import image1 from "../../assets/random/client-img.png"
import image2 from "../../assets/random/600636.png"
import image3 from "../../assets/random/600679.png"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Snippet from "./cards/snippets.js"

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {blog:[{image:image2,id:1,title:"A Very Anthropologie Holiday with Jodie Harrison", date:"30/3/2020",text:"One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,..."}
                  ,{image:image3,id:2,title:"A Very Anthropologie Holiday with Jodie Harrison", date:"30/3/2020",text:"One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,..."}]
                  };
  }


  render(){
    return(
      <div>
        <div className="client">
          <div className="heading">
              We Love Our Client
          </div>
          <div className="divider"></div>
          <div className="title">
          Design a custom frame for photos, art and more
          </div>
          <Container fluid={true} style={{marginTop: "62px"}}>
            <Row>
              <Col xs="4">
                <img src={image1}></img>
              </Col>
              <Col xs="8">
                <div className="name">JEREMY CROUSE</div>
                <div className="designation">(Graphic Designer)</div>
                <div className="review"><span><FormatQuoteIcon/></span>I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.<span><FormatQuoteIcon/></span>  </div>
                <div className="icons"></div>

              </Col>
            </Row>
          </Container>
        </div>

        <div className="blog">
        <div className="heading">
            Our Blog
        </div>
        <div className="divider"></div>
        <div className="title">
            Our Countless Frame Types Are Loved By Global Frame Lovers, Due To The Variety, Quality Yet Simplicity.
        </div>
        <Container fluid={true} style={{marginTop:"60px"}}>
            <Row>
            {this.state.blog.map( (icon)=> <Col xs="6"><Snippet icon={icon} type="blog"/> </Col> )}
            </Row>
        </Container>
        </div>
        
      </div>

    )
  }
}

export default Client
