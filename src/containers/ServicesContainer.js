import React from 'react';
import { MDBContainer } from 'mdbreact';
import { initClient } from '../contentfulClient';
import Spinner from '../components/Spinner';
import InfoSection from '../components/InfoSection';
import PriceList from '../components/PriceList';
import { cuts, color, additionalTreatments, treatments, disclaimer } from '../contentful/Keys';

const client = initClient()

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
    client.getEntry(key)
    .then((entry) => this.setState({
      cutsContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getColorContent = (key) => {
    client.getEntry(key)
    .then((entry) => this.setState({
      colorContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getTreatmentsContent = (key) => {
    client.getEntry(key)
    .then((entry) => this.setState({
      treatmentsContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getDisclaimerContent = (key) => {
    client.getEntry(key)
    .then((entry) => this.setState({
      disclaimerContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  getAdditionalContent = (key) => {
    client.getEntry(key)
    .then((entry) => this.setState({
      additionalContent: entry.fields
     }))
    .catch('Error: ' + this.state + console.error)
  }

  render() {
    if (this.state.cutsContent === null) {
      this.getCutsContent(cuts);
      return <Spinner />
    } else if (this.state.colorContent === null) {
      this.getColorContent(color);
      return <Spinner />
    } else if (this.state.treatmentsContent === null) {
      this.getTreatmentsContent(treatments);
      return <Spinner />
    } else if (this.state.additionalContent === null) {
      this.getAdditionalContent(additionalTreatments);
      return <Spinner />
    } else if (this.state.disclaimerContent === null) {
      this.getDisclaimerContent(disclaimer);
      return <Spinner />
    }else {
      return(
        <MDBContainer>
          <PriceList content={this.state.cutsContent} />
          <PriceList content={this.state.colorContent} />
          <PriceList content={this.state.treatmentsContent} />
          <PriceList content={this.state.additionalContent} />
          <InfoSection content={this.state.disclaimerContent} />
        </MDBContainer>
      )
    }
  }
}

export default ServicesContainer;
