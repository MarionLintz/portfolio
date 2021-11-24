import React, { useEffect } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './../ProjectCard/project-card.scss'

import smartservice from '../../images/smartservice.png';

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
                Elle a pour vocation de remplacer l'ancienne application web responsive d'Incovar+ basé sur AngularJS. Réécrite en Ionic
                l'application est sortie officiellement en janvier 2020.
                <br/><br/>
                Ma principale mission a été la réécriture de l'application client ce qui a entraîné également des modifications  
                côté serveur. J'étais chargé de la partie gestion de temps et nous formions l'<strong>équipe mobilité</strong> avec le
                responsable des développement de la partie gestion des interventions.
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
                <p className="subdetail mb-0 mt-1">Analyse des technologies existantes et choix de la plus adaptée au projet
                (langages web, cross plateform). Analyse des enquêtes clients, recueil des améliorations souhaitées (interne/externe).</p>
            </div>
            <div className="container-border-bottom">
                Plannification et gestion du projet
                <p className="subdetail mb-0 mt-1">Suivi des tâches, contraintes de temps.</p>
            </div>
            <div className="container-border-bottom">
                Conception UI/UX
                <br/><Badge className="p-2 me-1" bg="dark">Adobe Illustrator</Badge> 
                <Badge className="p-2" bg="dark">Draw.io</Badge> 
                <p className="subdetail mb-0 mt-1">Maquettage et réflexion autour de l'expérience utilisateur et l'interface en collaboration
                avec d'autres équipes.</p>
            </div>
            <div className="container-border-bottom">
                Développements
                <br/><Badge className="p-2 me-1" bg="dark">Ionic</Badge>
                <Badge className="p-2 me-1" bg="dark">TypeScript</Badge>
                <Badge className="p-2 me-1" bg="dark">ASP.NET</Badge>
                <Badge className="p-2 me-1" bg="dark">C#</Badge>
            </div>
            <div className="container-border-bottom">
                Déploiement
                <br/><Badge className="p-2 me-1" bg="dark">IIS</Badge>
                <Badge className="p-2 me-1" bg="dark">Google Play Console</Badge>
                <Badge className="p-2" bg="dark">App Store Connect</Badge>
                <p className="subdetail mb-0 mt-1">Paramétrage, achat de licences pour la publication, création de l'application, publication et mis à jour.</p>
            </div>
            <div className="container-border-bottom">
                Rédaction des documentations 
                <br/><Badge className="p-2 me-1" bg="dark">Suite office</Badge>
                <p className="subdetail mb-0 mt-1">Rédaction d'un "mode d'emploi", documentation d'installation et de déploiement, documentations techniques justifiant les choix techniques,
                utilisation des services, architecture ...</p>
            </div>
            <div className="container-border-bottom">
                Développement d'un Server Push (Notifications)
                <br/><Badge className="p-2 me-1" bg="dark">NodeJS</Badge>
                <Badge className="p-2 me-1" bg="dark">Javascript</Badge>
                <Badge className="p-2" bg="dark">Firebase</Badge>
                <p className="subdetail mb-0 mt-1">Développement d'une application serveur (NodeJS) API REST appelé par
                différents services d'Incovar+ pour envoyer en temps réél des notifications à un agent authentifié sur mobile via Firebase.</p>
            </div>  
        </Col>
    </Row>;
}

export default SmartServiceProject;