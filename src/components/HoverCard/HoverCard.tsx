import React, { ReactNode, useEffect, useState } from "react"
import { Badge, Card } from "react-bootstrap";
import './hover-card.scss'

export interface CardItem{
    title: string;
    detail: string;
    badges: string[];
    imageUrl: string;
}

interface PropsHoverCard {
    cardItem: CardItem;
    onClick: (e:any) => void;
}

function HoverCard(props: PropsHoverCard) : JSX.Element{
    const [dataAreDisplayed, setDisplayed] = useState<boolean>(false);

    return <Card className="card-hover mb-5" onMouseEnter={() => setDisplayed(true)} onMouseLeave={() => setDisplayed(false)} onClick={props.onClick}>
        <Card.Img className="card-img" variant="top" src={props.cardItem.imageUrl} />
        <Card.ImgOverlay className="card-text">
            {
                dataAreDisplayed && <>
                    <p className="card-title">{props.cardItem.title}</p>
                    <h5>{props.cardItem.detail}</h5>
                    <div>
                        {
                            props.cardItem.badges.map((element, key) => (
                                <Badge key={key} className="badge-custom me-1">{element}</Badge>
                            ))
                        }
                    </div>
                </>
            }
        </Card.ImgOverlay>
    </Card>
  }

export default HoverCard;