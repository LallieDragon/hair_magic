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
  }
  render () {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <form id="contact-form">
              <p className="h4 text-center mb-4">Write us to book an appointment</p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" />

              <br />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" />

              <br />

              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" className="form-control" />

              <br />

              <label htmlFor="message">Message</label>
              <textarea type="text" message="message" className="form-control" rows="3" />

              <div className="text-center mt-4">
                <MDBBtn color="info-color-dark" outline type="submit" value="Send">
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
