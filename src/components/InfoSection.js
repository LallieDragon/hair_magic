import React from 'react';
import { MDBContainer, MDBMedia } from 'mdbreact';

import imageQuality from '../imageHandling';
import '../styles/InfoSection.css';

const InfoSection = (props) => {

  if (props.content.photo !== undefined) {
    return (
      <MDBMedia className="media-column">
        <MDBMedia className="mr-3 picture">
          <MDBMedia object src={imageQuality(props.content.photo.fields.file.url, 20)} alt="store-front" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading className="content-title">{props.content.title}</MDBMedia>
          <p className="text">{props.content.body}</p>
          <p className="text">{props.content.additional || ""}</p>
        </MDBMedia>
      </MDBMedia>
    );
  }

  return(
    <MDBContainer className="text-center">
      <p className="h3" style={{marginTop: "2rem"}}>{props.content.title}</p>
      <p>{ props.content.body}</p>
      <p>{props.content.additional || ""}</p>
    </MDBContainer>
  )

}

export default InfoSection;
