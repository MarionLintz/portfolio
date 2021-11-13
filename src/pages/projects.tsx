import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';

class ProjectsPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <Container className="mt-5 pt-5 vh-100 mb-5">
            <div className="d-flex align-items-center flex-column">
                <p className="project-title"> Work In Progress </p>
                <iframe src="https://giphy.com/embed/Yj6d4OMmDV3bnYtOow" width="480" height="270" frameBorder="0" allowFullScreen></iframe>
                <p style={{fontSize: "10px"}}><a href="https://giphy.com/gifs/CBeebiesHQ-painting-diy-Yj6d4OMmDV3bnYtOow">via GIPHY</a></p>

                <p className="project-detail"> En attendant que cette page soit complète, voici un résumé de mes projets :  </p>

                <p className="mb-0 fw-bold">[Projet école d'ingénieurs] Application de gestion de Stock et Comptabilité, intégré à un ERP pour association étudiante </p>
                <p className="mb-0">Frontend : React, CoreUI, Axios / Backend : Node.js, fastify, prisma / Tests : cucumber</p>
                <p>Mon rôle : développement frontend </p> 

                <p className="mb-0 fw-bold">[Projet école d'ingénieurs] Application de gestion de patrimoine</p>
                <p className="mb-0">Objectif : prise en main de la méthode TDD</p>
                <p className="">Client Lourd WinFrom, application serveur .NET Framework 5.0, projet de test xUnit</p>

                <p className="mb-0 fw-bold">[Incotec] Développement d'un module de note de frais intégré à une application existante</p>
                <p className="">ASP.NET MVC / Angular</p>

                <p className="mb-0 fw-bold">[Incotec] Réécriture de l'application mobile</p>
                <p className="mb-0">ASP.NET MVC / Ionic => publication AppStore et PlayStore</p>
                <a className="mb-3" href="https://www.incotec-software.com/actualites/gestion-des-temps/smartservice-la-seule-application-mobile-dediee-la-gestion-des-temps">Voir l'article</a>
            
                <p className="mb-0 fw-bold">[Incotec : projet de fin d'étude] Développement d'un nouveau module Incovar+</p>
                <p className="mb-3">ASP.NET MVC / Angular / TDD</p>
            </div>
        </Container>
      </Layout>
    );
  }
}

export default ProjectsPage;