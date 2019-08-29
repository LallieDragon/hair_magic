import React from 'react';
import { initClient } from '../contentfulClient';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

import logo from '../files/logo.png';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarContent: null,
      isOpen: false
    }
    this.getNavbarContent = this.getNavbarContent.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }


  toggleCollapse = () => {
    const currentlyOpen = this.state.isOpen;
    this.setState({ isOpen: !currentlyOpen });
  }

  getNavbarContent = () => {
    let client = initClient()

    client.getEntry('qi8y0CEKgmOUbusm7Bqid')
    .then((entry) => this.setState({
      navbarContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.navbarContent === null) {
      this.getNavbarContent();
      return <div>Loading</div>
    } else {
      console.log(this.state)

      let content = this.state.navbarContent.links.map((link) =>
        <MDBNavItem key={link}>
          <MDBNavLink style={{ color: "#E15BDD" }}className="nav-links" id={link} to={ `${link}` }>{link}</MDBNavLink>
        </MDBNavItem>
      )

      return(
        <MDBNavbar color="elegant-color-dark" dark expand="md" style={{ height: '150px', width: "100%" }}>
          <MDBNavbarBrand>
            <img alt="logo" href="/Contact" src={ logo } style={{ height: '100px'}}/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              {content}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      )
    }
  }
}

export default NavbarContainer;
