import React from 'react';
import { MDBContainer } from 'mdbreact';

const InfoSection = (props) => {
  if (props.content.additional !== null) {
    return (
      <MDBContainer className="text-center">
        <h3>{props.content.title}</h3>
        <p>{ props.content.body}</p>
        <br />
        <p>{ props.content.additionalInfo }</p>
      </MDBContainer>
    )
  } else {
    return(
      <MDBContainer className="text-center">
        <h3>{props.content.title}</h3>
        <p>{ props.content.body}</p>
      </MDBContainer>
    )
  }
}

export default InfoSection;
