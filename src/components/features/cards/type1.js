import React from 'react';
import './type1.scss';


export default function Startframing(props){

  if (props.type=="startframing"){
    return(
      <div>
      <div className="Container1">
      <img src={props.image.image} className="picture"></img>
      <div class="bottom">
      Start Framing
      </div>
      </div>
      <div className="title1">
      {props.image.title}
      </div>
      </div>
    )
  }
  if (props.type=="addtocart"){
    return(
      <div>
      <div className="Container1">
      <img src={props.image.image} className="picture"></img>
      <div class="bottom">
      Add to Cart
      </div>
      </div>
      <div className="title1">
      {props.image.title}
      </div>
      </div>
    )
  }
  if (props.type=="zoomwithbox"){
    console.log(props)
    return(

      <div>
      <div className="zoombox ">
      <div className="picture box">
        <img src={props.img} className="picture"></img>
      </div>

      </div>
      </div>
    )
  }
  if (props.type=="zoom"){
    console.log(props)
    return(

      <div>
      <div className="zoom">
        <div className="picture">
          <img src={props.img} className="picture"></img>
        </div>
      </div>
      </div>
    )
  }

}
