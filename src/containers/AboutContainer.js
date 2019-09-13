import React from 'react';
import { MDBContainer } from 'mdbreact';
import { initClient } from '../contentfulClient';

import { about } from '../contentful/Keys.json'

import InfoSection from '../components/InfoSection';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
    this.getContent = this.getContent.bind(this);
  }

  getContent = (navKey) => {
    let client = initClient()

    client.getEntry(navKey)
    .then((entry) => this.setState({
      content: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.content === null) {
      this.getContent(about);
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    }

    console.log(this.state)
    return(
      <MDBContainer>
        <InfoSection content={this.state.content} />
      </MDBContainer>
    )
  }
}

export default AboutContainer;
