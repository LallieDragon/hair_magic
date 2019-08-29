import React from 'react';
import { MDBContainer } from 'mdbreact';
import { initClient } from '../contentfulClient';

import InfoSection from '../components/InfoSection';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutContent: null
    }
    this.getAboutContent = this.getAboutContent.bind(this);
  }

  getAboutContent = () => {
    let client = initClient()

    client.getEntry('14r9bMB6zAnCRIEhzhu0rB')
    .then((entry) => this.setState({
      aboutContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.aboutContent === null) {
      this.getAboutContent();
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    }

    return(
      <MDBContainer>
        <InfoSection content={this.state.aboutContent} />
      </MDBContainer>
    )
  }
}

export default AboutContainer;
