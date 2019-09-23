import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { initClient } from '../contentfulClient';
import { social } from '../contentful/Keys';
import ContactForm from '../components/ContactForm';
import Spinner from '../components/Spinner';
import SocialMedia from '../components/SocialMedia';

class ContactContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialContent: null
    }
    this.getSocialContent = this.getSocialContent.bind(this);
  }

  getSocialContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      socialContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.socialContent === null) {
      this.getSocialContent(social)
      return <Spinner />
    }

    return(
      <MDBRow className="contact-container">
        <MDBCol md="6">
          <ContactForm email={this.state.socialContent.links[2]}/>
        </MDBCol>
        <MDBCol md="6">
          <SocialMedia content={this.state.socialContent.links}/>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default ContactContainer;
