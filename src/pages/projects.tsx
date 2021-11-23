import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/projects.scss'
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projectList } from '../mock/projects';

function ProjectsPage(){
  const [show, setVisibility] = useState(false);
  const [projectClickedDetail, setClickDetail] = useState<any>({});

  const handleCardClick = (e: any, projectConcerned: any) => {
    setVisibility(true);
    setClickDetail(projectConcerned);
  }

  return (
    <Layout>
      <Container className="mt-5 pt-5 mb-5">
        <div className="grid-projects">
            {
              projectList.map((item, key) => (
                <ProjectCard onClick={(e) => handleCardClick(e, item)} item={item} key={key}/>
              ))
            }
        </div>

        <Offcanvas show={show} onHide={() => setVisibility(false)} placement="end" restoreFocus={false}>
          <Offcanvas.Header closeButton className="p-0">
            <p className="mb-0">Détails</p>
            <hr className="mb-4"/>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Offcanvas.Title className="offcanvas-title">{projectClickedDetail.projectInfo?.title}</Offcanvas.Title>
            <p className="offcanvas-subtitle mb-0"> {projectClickedDetail.projectInfo?.subTitle} </p>
            
            <div className="mt-3">
              {
                projectClickedDetail.component && <projectClickedDetail.component/>
              }
            </div>
          </Offcanvas.Body>
      </Offcanvas>
      </Container>
    </Layout>
  );
}

export default ProjectsPage;

{/* <div className="d-flex align-items-center flex-column">
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
</div> */}