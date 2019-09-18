import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    console.log(this.state)
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <form id="contact-form">
              <p className="h4 text-center mb-4">Write us to book an appointment</p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" onChange={this.handleChange} />

              <br />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" onChange={this.handleChange} />

              <br />

              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" className="form-control" onChange={this.handleChange} />

              <br />

              <label htmlFor="message">Message</label>
              <textarea type="text" message="message" className="form-control" rows="3" onChange={this.handleChange} />

              <div className="text-center mt-4">
                <MDBBtn style={{ marginBottom: "2rem" }} color="cyan lighten-3" outline type="submit" value="Send">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    );
  };
}

export default FormPage;
