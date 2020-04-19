import React from 'react';
import './footer.scss';
import { Container, Row, Col, Input,Button, Form} from 'reactstrap';
import apple from "../../assets/icons/apple.svg"
import facebook from "../../assets/icons/facebook.svg"
import insta from "../../assets/icons/insta.svg"
import twitter from "../../assets/icons/twitter.svg"


class Footer extends React.Component{


  render(){
    return(
      <div className="footer">
        <Container fluid={true}>
          <Row>
            <Col xs="4">
              <div className="footer_field"> Get the app<span><img src={apple}></img></span></div>
              <div className="footer_field"> Follow us</div>
              <div className="footer_icon_field"><img src={twitter}></img><img src={facebook}></img><img src={insta}></img></div>
              <div className="footer_field"> Get inspiration</div>
              <div className="footer_email">
                <Input type="email" name="email" id="exampleEmail" className="input" placeholder="Enter your email"/>
                <Button outline className="submit">Submit</Button>

                </div>
            </Col>
            <Col >
              <div className="footer_field1"> How it works</div>
              <div className="footer_field1"> Press</div>
              <div className="footer_field1"> For Art & Trade</div>
              <div className="footer_field1"> The Shop</div>
            </Col>
            <Col >
            <div className="footer_field1"> Faq</div>
            <div className="footer_field1"> For Business</div>
            <div className="footer_field1"> Company</div>
            <div className="footer_field1"> Careers</div>
            </Col>
            <Col >
            <div className="footer_field1"> Stores</div>
            <div className="footer_field1"> Pricing</div>
            <div className="footer_field1"> Reviews</div>
            <div className="footer_field1"> Design Services</div>
            </Col>
            <Col >
            <div className="footer_field1"> About Us</div>
            <div className="footer_field1"> Gift Card</div>
            <div className="footer_field1"> Contact Us</div>
            </Col>
            <Col >
            <div className="footer_field1"> Terms Of Service</div>
            <div className="footer_field1"> Privacy Policy</div>
            <div className="footer_field1"> Accessibility</div>
            <div className="footer_field1"> Sitemap</div>
            </Col>
          </Row>
        </Container>
        <div className="trademark">
          <div className="end">© 2020 index.</div>
        </div>

      </div>
    )
  }
}
export default Footer
