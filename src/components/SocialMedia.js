import React from 'react';
import { MDBCol, MDBRow, MDBBtn, MDBIcon } from 'mdbreact';

const SocialMedia = (props) => {
    console.log(props)
    return(
      <MDBCol>
        <p className="h4 text-center mb-4">Hours based on appointment only.</p>
        <MDBRow style={{ display: "flex", justifyContent: "center" }}>
          <a target="_blank" rel="noopener noreferrer" href={props.content[0]}>
            <MDBBtn size="md" color="indigo" style={{ width: "10rem" }}>
              <MDBIcon fab icon="facebook-f" className="ml-2" style={{ marginRight: "10px"}}/>Facebook
            </MDBBtn>
          </a>
          <a href={`tel:${props.content[1]}`}>
            <MDBBtn size="md" color="green" style={{ width: "10rem" }}>
              <MDBIcon icon="fa fa-phone" className="ml-2" style={{ marginRight: "10px"}}/>Call
            </MDBBtn>
          </a>
        </MDBRow>
        <MDBCol>
          <p className="h4 text-center mt-4">Location</p>
          <p className="h5 text-center">Hair Magic</p>
          <p className="h5 text-center">15950 Ranch Road 12,</p>
          <p className="h5 text-center">Ste. 1</p>
          <p className="h5 text-center">Wimberley, TX 78676</p>

        </MDBCol>
      </MDBCol>
    )
  }

export default SocialMedia;
