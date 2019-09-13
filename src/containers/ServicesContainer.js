import React from 'react';
import { MDBContainer } from 'mdbreact';
import { initClient } from '../contentfulClient';

import InfoSection from '../components/InfoSection';
import PriceList from '../components/PriceList';
import { cuts, color, additional, treatments, disclaimer } from '../contentful/Keys';

class ServicesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cutsContent: null,
      disclaimerContent: null,
      treatmentsContent: null,
      colorContent: null,
      additionalContent: null
    }
    this.getCutsContent = this.getCutsContent.bind(this);
    this.getColorContent = this.getColorContent.bind(this);
    this.getTreatmentsContent = this.getTreatmentsContent.bind(this);
    this.getDisclaimerContent = this.getDisclaimerContent.bind(this);
    this.getAdditionalContent = this.getAdditionalContent.bind(this);
  }

  getCutsContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      cutsContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getColorContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      colorContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getTreatmentsContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      treatmentsContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getDisclaimerContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      disclaimerContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getAdditionalContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      additionalContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  render() {
    if (this.state.cutsContent === null) {
      this.getCutsContent(cuts);
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    } else if (this.state.colorContent === null) {
      this.getColorContent(color);
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    } else if (this.state.treatmentsContent === null) {
      this.getTreatmentsContent(treatments);
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    } else if (this.state.additionalContent === null) {
      this.getAdditionalContent();
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    } else if (this.state.disclaimerContent === null) {
      this.getDisclaimerContent(disclaimer);
      return <MDBContainer style={{height: "100%"}}>Loading</MDBContainer>
    }else {
      return(
        <MDBContainer>
          <PriceList content={this.state.cutsContent} />
          <PriceList content={this.state.colorContent} />
          <PriceList content={this.state.treatmentsContent} />
          <PriceList content={this.state.additionalContent} />
        </MDBContainer>
      )
    }
  }
}

export default ServicesContainer;
