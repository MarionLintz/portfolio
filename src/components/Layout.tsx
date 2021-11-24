import React, { useState, useEffect } from 'react';

import { headData } from '../mock/global';

import { Helmet } from 'react-helmet';
import Header from './Header/header';
import Footer from './Footer/footer';

import logo from './../images/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

function Layout({children}: any) {
    const { pageTitle, lang } = headData;

    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Bonjour, je suis Marion ! Bienvenue, je vous invite à découvrir mon univers, mes projets et les solutions que je pourrais apporter à votre entreprise."/>
            <meta name="author" content="Marion Lintz"/>
            <meta name="keywords" content="Marion, Lintz, Chef de Projet, Ingénieur logiciel, Informatique, Ingénieur, Strasbourg"/>
            <meta name="robots" content="index"/>
            <link rel = "icon" type = "image/png" href={logo} />
            <title>{pageTitle}</title>
            <html lang={lang} />
        </Helmet>
        <Header />
          <main className="app-container">
            {children}
          </main>
        <Footer />
      </>
    );
}

export default Layout;
