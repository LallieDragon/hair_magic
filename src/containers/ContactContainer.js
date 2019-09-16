import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';

class ContactContainer extends React.Component {
  render() {
    return(
      <MDBRow className="contact-container">
        <MDBCol md="6">
          <ContactForm />
        </MDBCol>

        <MDBCol md="6">
          <SocialMedia />
        </MDBCol>
      </MDBRow>
    )
  }
}

export default ContactContainer;
