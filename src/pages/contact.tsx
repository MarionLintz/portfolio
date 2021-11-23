import React, { useState } from 'react';
import { Button, Container} from 'react-bootstrap';
import Layout from '../components/Layout';
import Image from 'react-bootstrap/Image';

import contact from '../images/contact.png';
import './../style/contact.scss';
import { FcCheckmark } from 'react-icons/fc';
import {email, mailDomain} from './../mock/global';

function ContactPage() {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  
  const getEmail = ():string => {
    return email + '@' + mailDomain;
  }
  const onEmailClick = () => {
    navigator.clipboard.writeText(getEmail());
    setShowMessage(true);
  }

  return (
    <Layout>
      <Container className="contact-container mt-5 pt-5 mb-5 pb-5 d-flex flex-column justify-content-center align-items-center">
        <p className="text">Vous pouvez m'écrire</p>
        <a href="mailto:contact@marionl.fr">
          <Image className="lazy-img" alt="mail" src={contact} fluid></Image>
        </a>  
        <Button className="btn-footer-color mt-5" onClick={onEmailClick}>
          Copier dans le presse papier
          {
            showMessage && 
              <FcCheckmark className="ms-1 mb-1"/>
          }
        </Button>
      </Container>
    </Layout>
  );
}

export default ContactPage;