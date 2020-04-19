import React from 'react';
import './snippets.scss';
import { Container, Row, Col , Button} from 'reactstrap';


export default function Snippet(props){

if (props.type=="whyshipus"){
  return(
    <div className="content">
    <Container >
    <Row>
    <Col xs="3">
    <img src={props.icon.image}></img>
    </Col>
    <Col xs="9">
    <div className="heading">{props.icon.title}</div>
    <div className="text">{props.icon.text}</div>
    </Col>
    </Row>
    </Container>
    </div>
  )
}
if (props.type=="blog"){
  return(
    <div className="blog">
    <Container >
    <Row>
    <Col xs="7">
    <img src={props.icon.image} className="blog_picture"></img>
    </Col>
    <Col xs="5">
    <div className="category">Category Blog</div>
    <div className="blog_title">{props.icon.title}</div>
    <div className="by">By admin</div>
    <div className="date">{props.icon.date}</div>
    <div className="blog_text">{props.icon.text}</div>
    <Button outline className="read_more">Read More</Button>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

}
