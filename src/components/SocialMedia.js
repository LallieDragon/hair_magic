import React from 'react';
import { MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const SocialMedia = (props) => {
    console.log(props)
    return(
      <MDBCol>
        <p className="h4 text-center mb-4">Hours based on appointment only.</p>
        <a target="_blank" rel="noopener noreferrer" href={props.content[0]}>
          <MDBBtn size="md" color="indigo" style={{ width: "10rem" }}>
            <MDBIcon fab icon="facebook-f" className="ml-2" style={{ marginRight: "10px"}}/>Facebook
          </MDBBtn>
        </a>
        <MDBBtn size="md" color="green" style={{ width: "10rem" }}>
          <MDBIcon icon="fa fa-phone" className="ml-2" style={{ marginRight: "10px"}}/>Call
        </MDBBtn>

      </MDBCol>
    )
  }

export default SocialMedia;
