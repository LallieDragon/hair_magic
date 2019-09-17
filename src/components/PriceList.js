import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import '../styles/PriceList.css'

const PriceList = (props) => {
  const content = [];

  for(let i = 0; i < Object.keys(props.content.json).length; i++) {
    content.push(
    <MDBRow className="pricing">
      <MDBCol md="4" className="info">{props.content.json[i].title}</MDBCol>
      <MDBCol md="5" className="info">{props.content.json[i].price}</MDBCol>
    </MDBRow>
    )
  }
  return (
    <MDBContainer>
      <MDBRow md="12" className="title">
        <p className="h2 text-left mb-4" style={{ textDecoration: "underline" }}>{props.content.title}</p>
      </MDBRow>
      <MDBContainer className="pricing-container">
        {content}
      </MDBContainer>
    </MDBContainer>
  );
}

export default PriceList
