import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import './../ProjectCard/project-card.scss'
import Image from 'react-bootstrap/Image'
import { erpInfo } from "../../mock/projects";

import screenErp from '../../images/screen_erp.png';
import screenErp1 from '../../images/screen_erp.png';
import screenErp2 from '../../images/screen_erp_2.png';
import screenErp3 from '../../images/screen_erp_3.png';
import screenErp4 from '../../images/screen_erp_4.png';
import screenErp5 from '../../images/screen_erp_5.png';
import screenErp6 from '../../images/screen_erp_6.png';


function ErpProject(props: any) : JSX.Element{
    return <>
        <Row>
            <Col md={12}>
                <Image src={screenErp} style={{width: "100%", borderRadius: "10px"}}/>
            </Col>

            <Col md={12} className="mt-3">
                <p className="section-title">A propos</p>
            </Col>
            <Col md={12}>
                <p>
                    Dans le cadre du module "Processus métier et ERP" en école d'ingénieurs toute la promotion
                    a développé un ERP pour les associations étudiantes, réparti en groupe de 5 par module.
                    Mon groupe avait la charge du développement du module de gestion des stocks et comptabilité. 
                    <br/>
                    La première complexité du projet était de s'accorder avec les autres équipes. Chaque 
                    équipe a développé une API, déployée, accessible par les autres groupes, documentée, dans la 
                    technologie de son choix.
                    <br/>
                    Nous nous sommes réparti les tâches au sein du groupe, nous étions 2 sur les développements frontend.
                </p>
            </Col>

            <Col md={12} className="mt-3">
                <p className="section-title">Technologies</p>
            </Col>
            <Col md={12}>
                {
                    erpInfo.languages.map((element: any, key: any) => (
                        <Badge key={key} bg="secondary" className="me-1 p-2">{element}</Badge>
                    ))
                }
            </Col>

            <Col md={12} className="mt-5">
                <p className="section-title">Principales fonctionnalités</p>
            </Col>
            <Col md={12}>
                <p><strong>Ecran d'accueil :</strong> dashboard</p>
                <Image src={screenErp2} style={{width: "70%", borderRadius: "10px"}}/>
                
                <p className="mt-3"><strong>Gestion des événements : </strong> Ajout, modification, 
                consultation de la balance (calcul de rentabilité de l'événement en fonction des écritures 
                comptables liées)</p>
                <div className="d-flex gap-5">
                    <Image src={screenErp3} style={{width: "45%", borderRadius: "10px"}}/>
                    <Image src={screenErp4} style={{width: "45%", borderRadius: "10px"}}/>
                </div>

                <p className="mt-3"><strong>Gestion des articles : </strong> Bibliothèque de références, 
                prix de vente, historique des modifications</p>
                <div className="d-flex gap-5">
                    <Image src={screenErp5} style={{width: "45%", borderRadius: "10px"}}/>
                    <Image src={screenErp6} style={{width: "45%", borderRadius: "10px"}}/>
                </div>

                <p className="mt-3"><strong>Gestion des stocks :</strong>  Saisie des achats, ajustements, 
                génération automatique des écritures comptables</p>
                <Image src={screenErp1} style={{width: "70%", borderRadius: "10px"}}/>
            </Col>
        </Row>
    </>;
}

export default ErpProject;