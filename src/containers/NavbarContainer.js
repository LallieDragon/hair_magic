import React from 'react';
import { initClient } from '../contentfulClient';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { tabs } from '../contentful/Keys.json';
import logo from '../files/logo.png';
import Spinner from '../components/Spinner';
import '../styles/navbar.css';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarContent: null,
      isOpen: false
    }
    this.getContent = this.getContent.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse = () => {
    const currentlyOpen = this.state.isOpen;
    this.setState({ isOpen: !currentlyOpen });
  }

  getContent = (key) => {
    let client = initClient()

    client.getEntry(key)
    .then((entry) => this.setState({
      navbarContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.navbarContent === null) {
      this.getContent(tabs);
      return <Spinner />
    } else {
      let links = this.state.navbarContent.tabs;

      let content = links.map((link) =>
        <MDBNavItem key={link}>
          <MDBNavLink className="nav-links" id={link} to={ `${link}` }>{link}</MDBNavLink>
        </MDBNavItem>
      )

      return(
        <MDBNavbar color="elegant-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <img alt="logo" href="/" src={ logo } style={{ height: '150px'}}/>
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
