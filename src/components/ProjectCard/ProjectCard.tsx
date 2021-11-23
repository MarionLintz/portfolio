import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Project } from "../../mock/projects";
import { BiRightArrowCircle } from 'react-icons/bi';

import './project-card.scss'

interface PropsHoverCard {
    item: Project;
    onClick: (e:any) => void;
}

function ProjectCard(props: PropsHoverCard) : JSX.Element{
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [dataAreDisplayed, setDisplayed] = useState<boolean>();

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth <= 800);
        setDisplayed(window.innerWidth <= 800);
    }
    
    useEffect(() => {
        handleWindowSizeChange();

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return <Card className="card-hover" onMouseEnter={() => setDisplayed(true)} onMouseLeave={() => setDisplayed(isMobile)} onClick={props.onClick}>
        <Card.Img className="card-img" variant="top" src={props.item.projectInfo.imageUrl} />
        <Card.ImgOverlay className="card-text">
            {
                dataAreDisplayed && <>
                    <p className="card-title">{props.item.projectInfo.title}
                        {isMobile && <BiRightArrowCircle className="m-1"/>}
                    </p>
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