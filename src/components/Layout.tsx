import React, { useState, useEffect } from 'react';

import { PortfolioProvider } from '../context/context';
import { HeaderData } from '../interfaces.ts/interfaces';
import { headData } from '../mock/global';
import { headerData } from '../mock/layout';

import { Helmet } from 'react-helmet';
import Header from './Header/header';
import Footer from './Footer/footer';

import '../style/main.scss';

function Layout({children}: any) {
    const { pageTitle, lang } = headData;
    const [header, setHeader] = useState<HeaderData>(headerData);
    useEffect(() => {
      setHeader(headerData);
    }, []);

    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Bonjour, je suis Marion ! Bienvenue, je vous invite à découvrir mon univers, mes projets et les solutions que je pourrais apporter à votre entreprise."/>
            <meta name="author" content="Marion Lintz"/>
            <meta name="keywords" content="Marion, Lintz, Chef de Projet, Informatique, Ingénieur, Strasbourg"/>
            <meta name="robots" content="index"/>
            <title>{pageTitle}</title>
            <html lang={lang} />
        </Helmet>
        <PortfolioProvider value={{ header }}>
          <Header />
          <div className="app-container">
            {children}
          </div>
          <Footer />
        </PortfolioProvider>
      </>
    );
}

export default Layout;
