import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { initClient } from '../contentfulClient';
import { social, location } from '../contentful/Keys';
// import ContactForm from '../components/ContactForm';
import Spinner from '../components/Spinner';
import SocialMedia from '../components/SocialMedia';

class ContactContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialContent: null,
      locationContent: null
    }

    this.getSocialContent = this.getSocialContent.bind(this);
    this.getLocationContent = this.getLocationContent.bind(this);
  }

  getSocialContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      socialContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  getLocationContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      locationContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.socialContent === null) {
      this.getSocialContent(social)
      return <Spinner />
    } else if (this.state.locationContent === null){
      this.getLocationContent(location)
      return <Spinner />
    }

    // <MDBCol md="6">
    //   <ContactForm />
    // </MDBCol>
    return(
      <MDBRow className="contact-container">
        <MDBCol md="12">
          <SocialMedia content={this.state.socialContent.links}/>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default ContactContainer;
