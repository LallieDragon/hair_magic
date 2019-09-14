import React from 'react';
import { MDBContainer, MDBMedia } from 'mdbreact';

import imageQuality from '../imageHandling';
import '../styles/InfoSection.css';

const InfoSection = (props) => {
  console.log(props.content)
  if (props.content.photo !== undefined) {
    return (
      <MDBMedia>
        <MDBMedia left className="mr-3" href="#">
          <MDBMedia object src={imageQuality(props.content.photo.fields.file.url, 20)} alt="" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>{props.content.title}</MDBMedia>
          <p id="text">{props.content.body}</p>
          <p id="text">{props.content.additional || ""}</p>
        </MDBMedia>
      </MDBMedia>
    );
  }

  return(
    <MDBContainer className="text-center">
      <h3>{props.content.title}</h3>
      <p>{ props.content.body}</p>
      <p>{props.content.additional || ""}</p>
    </MDBContainer>
  )

}

export default InfoSection;
