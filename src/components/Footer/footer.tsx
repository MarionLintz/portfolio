import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { RiChatSmile3Line } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";

import './footer.scss';
import PortfolioContext from '../../context/context';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <div className="footer-container">
      <div className="contact-me-card shadow-sm rounded p-5">
        <p className="mb-0"> Une question ? Envie d'en savoir plus ? Je serai ravie de vous répondre <RiChatSmile3Line/></p>
        <Button href="/contact" variant="outline-light">
          Allons-y !
        </Button>
      </div>
      <div className="footer-wrapper">
        <p>
          <FaCopyright className="me-2"/>
          Marion Lintz 2021 - Tous droits réservés
        </p>
        <p>
          <a href="https://github.com/MarionLintz/portfolio" className="icon-redirect"> <SiGithub/></a>  
          <a href="https://www.linkedin.com/in/marion-lintz-237522167/" className="icon-redirect"> <SiLinkedin/></a>  
        </p>
        <p>
          <a href="/legal"><u>Mentions légales</u></a>
        </p>
      </div>
    </div>    
  );
};

export default Footer;
