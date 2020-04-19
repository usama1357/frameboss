import React from 'react';
import './photos.scss';

export default function Whyframeimage(props){

  return(
    <div className="Container">
        <img src={props.image.image} className="photo"></img>
          <div class="middle">
            <div class="text">FRAME NOW</div>
          </div>
          <div className="title">
          {props.image.title}
          </div>
    </div>
  )
}
