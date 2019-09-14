import React from 'react';
import { MDBContainer } from 'mdbreact';
import { initClient } from '../contentfulClient';
import { policies } from '../contentful/Keys';
import InfoSection from '../components/InfoSection';

class PoliciesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policiesContent: null
    }
    this.getPoliciesContent = this.getPoliciesContent.bind(this);
  }

  getPoliciesContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      policiesContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.policiesContent === null) {
      this.getPoliciesContent(policies);
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    }

    return(
      <MDBContainer>
        <InfoSection content={this.state.policiesContent} />
      </MDBContainer>
    )
  }
}

export default PoliciesContainer;
