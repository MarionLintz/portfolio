import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

function FinEtudeProject(props: any) : JSX.Element{
    return <Row>
    <Col md={12} className="d-flex justify-content-center">
        <Image src="https://cdn.pixabay.com/photo/2016/11/03/11/53/text-editor-1794110_960_720.png" style={{maxWidth: "60%", borderRadius: "10px"}}/>
    </Col>
    <Col md={12} className="mt-3">
        <p className="section-title">A propos</p>
    </Col>
    <Col md={12}>
        <p>
            Constituant le point d'orgue de ma formation d'ingénieur, le projet de fin d'étude se déroule sur 10 mois, 
            donne matière à la rédaction d'un mémoire et se clôt par une soutenance.
            <br/>
            Le projet est naît d'une simple idée et devait être mené de son analyse à la production.
        </p>
    </Col>

    <Col md={12} className="mt-3">
        <p className="section-title">Mon approche</p>
    </Col>
    <Col md={12}>
        <p>
            Ce projet était l'opportunité d'appliquer les différentes méthodes exercées tout au long de ma formation d'ingénieur : 
            <br/>
            <br/> - <strong>2TUP</strong> (two track unified process) propose un cycle de développement en Y, qui dissocie les aspects techniques des aspects fonctionnels.
            <br/> - <strong>UML</strong> pour la modélisation graphique nécessaire aux développements.
            <br/> - On donne de la valeur au besoin, tout part de celui-ci. Rédaction des <strong>user stories</strong>, organisation des développements autour de ceux-ci.
            <br/> - Phase de développement organisé en <strong>sprint</strong> (méthode SCRUM).
            <br/> - Méthode de développement <strong>TDD</strong> pour optimiser la qualité du code.
        </p>
    </Col>
    
    <Col md={12} className="mt-3">
        <p className="section-title mb-0">Mes missions</p>
    </Col>
    <Col md={12} className="mt-2">
        <Badge className="p-2 m-1" bg="secondary">Etude préliminaire</Badge> 
        <Badge className="p-2 m-1" bg="secondary">Animation des réunions</Badge> 
        <Badge className="p-2 m-1" bg="secondary">Aide à la défnition du périmètre</Badge> 
        <Badge className="p-2 m-1" bg="secondary">Spécifications fonctionnelles et techniques</Badge> 
        <Badge className="p-2 m-1" bg="secondary">Conception UI/UX</Badge> 
        <Badge className="p-2 m-1" bg="secondary">Développements</Badge> 
    </Col>

    <Col md={12} className="mt-3">
        <p className="section-title mb-0">Technologies</p>
    </Col>
    <Col md={12} className="mt-2">
        <Badge className="p-2 m-1" bg="secondary">Angular</Badge>
        <Badge className="p-2 m-1" bg="secondary">Typescript</Badge>
        <Badge className="p-2 m-1" bg="secondary">ASP.NET</Badge>
        <Badge className="p-2 m-1" bg="secondary">C#</Badge>
    </Col>
</Row>;
}

export default FinEtudeProject;