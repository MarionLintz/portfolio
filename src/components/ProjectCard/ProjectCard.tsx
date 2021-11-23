import React, { ReactNode, useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Project, ProjectInfo } from "../../mock/projects";
import './project-card.scss'

interface PropsHoverCard {
    item: Project;
    onClick: (e:any) => void;
}

function ProjectCard(props: PropsHoverCard) : JSX.Element{
    const [dataAreDisplayed, setDisplayed] = useState<boolean>(false);

    return <Card className="card-hover" onMouseEnter={() => setDisplayed(true)} onMouseLeave={() => setDisplayed(false)} onClick={props.onClick}>
        <Card.Img className="card-img" variant="top" src={props.item.projectInfo.imageUrl} />
        <Card.ImgOverlay className="card-text">
            {
                dataAreDisplayed && <>
                    <p className="card-title">{props.item.projectInfo.title}</p>
                    <p>{props.item.projectInfo.subTitle}</p>
                    <div>
                        {
                            props.item.projectInfo.languages.map((element, key) => (
                                <Badge key={key} className="badge-custom me-1">{element}</Badge>
                            ))
                        }
                    </div>
                </>
            }
        </Card.ImgOverlay>
    </Card>
  }

export default ProjectCard;