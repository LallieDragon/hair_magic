import React from 'react';
import { initClient } from '../contentfulClient';
import { about } from '../contentful/Keys.json'
import InfoSection from '../components/InfoSection';
import Spinner from '../components/Spinner';

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
      return <Spinner />
    }

    return(
      <div style={{ position: "center", marginTop: "3rem"}}>
        <InfoSection content={this.state.content} />
      </div>
    )
  }
}

export default AboutContainer;
