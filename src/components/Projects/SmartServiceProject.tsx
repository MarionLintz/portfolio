import React from "react";
import { Accordion, Badge, Card, Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './../ProjectCard/project-card.scss'

import smartservice from '../../images/smartservice.png';
import { SmartServiceInfo } from "../../mock/projects";

function SmartServiceProject(props: any) : JSX.Element{
    return <Row>
        <Col md={12} className="d-flex justify-content-center">
            <Image src={smartservice} style={{maxWidth: "60%", borderRadius: "10px"}}/>
        </Col>
        <Col md={12} className="d-flex justify-content-center">
            <a href="https://play.google.com/store/apps/details?id=com.incotecsoftware.incotec">Voir sur le PlayStore</a>
        </Col>
        <Col md={12} className="mt-3">
            <p className="section-title">A propos</p>
        </Col>
        <Col md={12}>
            <p>
                Smartservice est une application mobile disponible sur Android et iOS de gestion des temps et d'interventions.
                <br/>
                Elle vient remplacer l'ancienne application web responsive d'Incovar+ basé sur AngularJS. Réécrite en Ionic
                l'application est sortie officiellement en janvier 2020.
                <br/><br/>
                Ma principale mission a été la réécriture de l'application client ce qui a entraîné également des modifications  
                côté serveur. J'étais chargé de la partie gestion de temps et nous formions l'<strong>équipe mobilité</strong> avec le
                responsable des développement de la gestion des interventions.
            </p>
        </Col>

        <Col md={12} className="mt-3">
            <p className="section-title mb-0">Mes missions</p>
        </Col>
        <Col md={12}>
            <div className="container-border-bottom">
                Analyse technique
                recueil du besoin,
                rédaction des spécifications techniques,
                rédaction des spécifications fonctionnelles,
                <p className="subdetail mb-0">Analyse des technologies existantes et choix de la plus adaptée au projet
                (langages web, cross plateform). Analyse des enquêtes clients, recueil des améliorations souhaitées (interne/externe).</p>
            </div>
            <div className="container-border-bottom">
                Plannification et gestion du projet
                <p className="subdetail mb-0">Suivi des tâches, contraintes de temps.</p>
            </div>
            <div className="container-border-bottom">
                Conception UI/UX
                <Badge className="p-2 mx-2" bg="dark" pill>Adobe Illustrator</Badge> 
                <Badge className="p-2" bg="dark" pill>Draw.io</Badge> 
                <p className="subdetail mb-0">Maquettage et réflexion autour de l'expérience utilisateur et l'interface en collaboration
                avec d'autres équipes.</p>
            </div>
            <div className="container-border-bottom">
                Développements
                <Badge className="p-2 mx-2" bg="dark" pill>Ionic</Badge>
                <Badge className="p-2 me-2" bg="dark" pill>TypeScript</Badge>
                <Badge className="p-2 me-2" bg="dark" pill>ASP.NET</Badge>
                <Badge className="p-2 me-2" bg="dark" pill>C#</Badge>
            </div>
            <div className="container-border-bottom">
                Déploiement
                <Badge className="p-2 mx-2" bg="dark" pill>Google Play Console</Badge>
                <Badge className="p-2" bg="dark" pill>App Store Connect</Badge>
                <p className="subdetail mb-0">Achat de licences, création de l'application, publication et mis à jour.</p>
            </div>
            <div className="container-border-bottom">
                Rédaction des documentations
                <Badge className="p-2 mx-2" bg="dark" pill>Suite office</Badge>
                <p className="subdetail mb-0">Rédaction d'un "mode d'emploi", documentation d'installation et de déploiement, documentations techniques justifiant les choix techniques,
                utilisation des services, architecture ...</p>
            </div>
            <div className="container-border-bottom">
                Développement d'un Push Notification Serveur
                <Badge className="p-2 mx-2" bg="dark" pill>NodeJS</Badge>
                <Badge className="p-2 me-2" bg="dark" pill>Javascript</Badge>
                <Badge className="p-2" bg="dark" pill>Firebase</Badge>
                <p className="subdetail mb-0">Développement d'une application serveur (NodeJS) API REST appelé par
                différents services d'Incovar+ pour envoyer en temps réél des notifications à un agent authentifié sur mobile via Firebase.</p>
            </div>  
        </Col>
    </Row>;
}

export default SmartServiceProject;