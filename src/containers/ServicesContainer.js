import React from 'react';
import { MDBContainer } from 'mdbreact';
import { initClient } from '../contentfulClient';

import InfoSection from '../components/InfoSection';
import ServiceList from '../components/ServiceList';

class ServicesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesContent: null
    }
    this.getServicesContent = this.getServicesContent.bind(this);
  }

  getServicesContent = () => {
    let client = initClient()

    client.getEntry('2XQVPTy9l1D7oU408s1eJ9')
    .then((entry) => this.setState({
      servicesContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  render() {
    if (this.state.servicesContent === null) {
      this.getServicesContent();
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    } else {
      return(
        <MDBContainer>
          <ServiceList content={this.state.servicesContent} />
        </MDBContainer>
      )
    }
  }
}

export default ServicesContainer;
