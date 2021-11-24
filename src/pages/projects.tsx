import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/projects.scss'
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { Project, SmartServiceInfo, ErpInfo, PatrimoineInfo, NuitDeLinfoInfo, FinEtudeInfo } from '../mock/projects';
import SmartServiceProject from '../components/Projects/SmartServiceProject';
import ErpProject from '../components/Projects/ErpProject';
import PatrimoineProject from '../components/Projects/PatrimoineProject';
import NuitDeLinfoProject from '../components/Projects/NuitDeLinfoProject';
import FinEtudeProject from '../components/Projects/FinEtudeProject';
import { Fade } from 'react-awesome-reveal';

function ProjectsPage(){
  const [show, setVisibility] = useState(false);
  const [projectClickedDetail, setClickDetail] = useState<any>({});

  const projectList : Project[] =[
    {
        projectInfo: SmartServiceInfo,
        component: SmartServiceProject
    },
    {
        projectInfo: ErpInfo,
        component: ErpProject
    },
    {
        projectInfo: PatrimoineInfo,
        component: PatrimoineProject
    },
    {
        projectInfo: NuitDeLinfoInfo,
        component: NuitDeLinfoProject
    },
    {
        projectInfo: FinEtudeInfo,
        component: FinEtudeProject
    }
  ];

  let previousPage:string = "";

  const handleBackButtonClick = (e: any) => {
    setVisibility(false);
    setClickDetail({});
  };

  const handleCardClick = (e: any, projectConcerned: any) => {
    window.history.pushState(null, "", window.location.pathname);

    setVisibility(true);
    setClickDetail(projectConcerned);
  }

  const handleHideOffcanvas = () => {
    setVisibility(false); 
    window.history.replaceState(null, "", previousPage);
  }

  useEffect(() => {
    previousPage = document.referrer;
    window.addEventListener('popstate', handleBackButtonClick);

    return () => {
      window.removeEventListener('popstate', handleBackButtonClick);
    }
  }, [])

  return (
    <Layout>
      <Container className="mt-5 pt-5 mb-5">
        <div className="grid-projects">
            {
              projectList.map((item, key) => (
                <Fade delay={200 + 150*key} key={key} duration={1000} triggerOnce={true}>  
                  <ProjectCard onClick={(e) => handleCardClick(e, item)} item={item}/>
                </Fade>
              ))
            }
        </div>

        <Offcanvas show={show} onHide={handleHideOffcanvas} placement="end" restoreFocus={false}>
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