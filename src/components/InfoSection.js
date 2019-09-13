import React from 'react';
import { MDBContainer, MDBMedia } from 'mdbreact';

import imageQuality from '../imageHandling';

const InfoSection = (props) => {
  if (props.content.photo !== null) {
    return (
      <MDBMedia>
        <MDBMedia left className="mr-3" href="#">
          <MDBMedia object src={imageQuality(props.content.photo.fields.file.url, 20)} alt="" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>{props.content.title}</MDBMedia>
          {props.content.body}
        </MDBMedia>
      </MDBMedia>
    );
  }
  
  return(
    <MDBContainer className="text-center">
      <h3>{props.content.title}</h3>
      <p>{ props.content.body}</p>
    </MDBContainer>
  )

}

export default InfoSection;
