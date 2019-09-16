import React from 'react';
import { MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const SocialMedia = () => {
  return(
    <MDBCol>
    <p className="h4 text-center mb-4">Hours based on appoinment. Please contact us through our form or through our Facebook page.</p>
      <MDBBtn  style={{ backgroundColor: "#3C5898"}}>
        <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
      </MDBBtn>
    </MDBCol>
  )
}

export default SocialMedia;
