import React from 'react';
import { MDBContainer } from 'mdbreact';

class FooterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
    this.getContent = this.getContent.bind(this);
  }

  getContent = () => {
    return
  }

  render() {
    return(
      <MDBContainer>
        <div>Footer</div>
      </MDBContainer>
    )
  }
}

export default FooterContainer;
