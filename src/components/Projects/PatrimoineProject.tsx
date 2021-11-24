import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import './../ProjectCard/project-card.scss'
import screenErp from '../../images/screen_erp.png';
import Image from 'react-bootstrap/Image'
import { PatrimoineInfo } from "../../mock/projects";


function PatrimoineProject(props: any) : JSX.Element{
    return <>
        <Row>
            <Col md={12} className="mt-3">
                <p className="section-title">A propos</p>
            </Col>
            <Col md={12}>
                <p>
                    Dans le cadre du module "Tests et validation" en école d'ingénieurs j'ai été amené à mettre
                    en pratique la méthode Test Driven Development lors du développement d'une application de gestion de patrimoine.
                </p>
            </Col>

            <Col md={12}>
                <p className="section-title">Test Driven Development : kézako ?</p>
                <p>
                    C'est une méthode de développement logiciel qui préconise de concevoir les tests <strong>avant</strong> même de développer.
                    Cette théorie est en cohérence avec les <strong>méthodes agiles</strong> et pousse à faire preuve de plus
                    de rigueur dans la réflexion de son code pour un logiciel construit par <strong>validation des tests</strong> plutôt que par le suivi des spécifications.
                    <br/>
                    Le développeur développe en fonction des <strong>spécifications fonctionnelles</strong> puis écrit les cas de <strong>tests unitaires</strong>.
                    <br/> <br/>
                    Le TDD se découpe en 3 phases : 
                    <br/>
                    "RED" = on écrit un test qui ne passe pas et on teste l'intention métier du traitement
                    <br/>
                    "GREEN" = on écrit le code le plus direct pour faire passer notre Test
                    <br/>
                    "REFACTOR" = on retravaille le code 
                </p>
                <a href="https://fr.m.wikipedia.org/wiki/Test_driven_development">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Cycle-global-tdd.png" style={{width: "100%", borderRadius: "10px"}}/>
                </a>
                <p>Voir <a href="https://www.amazon.fr/dp/B095SQ9WP4/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">Test Driven Development : By Example - Kent Beck</a></p> 
            </Col>

            <Col md={12} className="mt-3">
                <p className="section-title">Technologies</p>
            </Col>
            <Col md={12}>
            {
                PatrimoineInfo.languages.map((element: any, key: any) => (
                    <Badge key={key} bg="secondary" className="me-1 p-2">{element}</Badge>
                ))
            }
            </Col>

            <Col md={12} className="mt-3">
                <p className="section-title">Principales fonctionnalités</p>
            </Col>
            <Col md={12}>
                <p>
                    - Simuler l'évolution d'un patrimoine en fonctions de différents
                    critères et différents produits d'épargne et d'investissement.
                    <br/>
                    - Estimer le coût d'un crédit immobilier (calcul des mensualités, tableau d'amortissement).
                </p>
            </Col>
        </Row>
    </>;
}

export default PatrimoineProject;