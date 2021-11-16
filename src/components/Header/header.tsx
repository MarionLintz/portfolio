import React, { useContext, useEffect, useState } from 'react';
import PortfolioContext from '../../context/context';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap';
import { Url } from '../../interfaces.ts/interfaces';
import './header.scss';

function Header() {
  const { header } = useContext(PortfolioContext);
  
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="page-header">
      <Container className="p-0">
        <Navbar.Brand className="header-text" href="/">{header.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {header.urls.map((url: Url) => <Nav.Link key={url.link} className="header-text" href={url.link}>{url.name}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
