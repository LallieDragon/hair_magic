import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = (props) => {

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form id="contact-form" action={`https://formspree.io/${props.email}`} method="POST">
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


export default FormPage;
