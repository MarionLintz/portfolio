import React from 'react';
import Layout from '../components/Layout';
import Image from 'react-bootstrap/Image';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../style/aboutme.scss'
import {AttentionSeeker, Fade, Slide} from 'react-awesome-reveal';

import cover from '../images/about-me-min.png';
import parse from 'html-react-parser';
import { aboutData } from '../mock/aboutme';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaArrowCircleRight } from 'react-icons/fa';


function AboutMePage(){
  const about = aboutData;

  return (
    <Layout>
      <Container className="aboutme-containter">
        <Slide direction="up" delay={500} duration={2000} triggerOnce={true}>
          <Fade duration={4000} triggerOnce={true}>
            <Image className="lazy-img" alt="aboutme" src={cover} fluid></Image>
          </Fade>
        </Slide>
        <div className="about-me-presentation m-1 pt-3">
          <Fade delay={1600} duration={1000} triggerOnce={true}>
            <p className="about-me-title">
              {about.title}
            </p>
          </Fade>
          <Fade delay={1300} duration={1000} triggerOnce={true}>
            <p className="about-me-desc"> 
              {about.presentation}
            </p>
          </Fade>
          <Fade delay={800} duration={1000} triggerOnce={true}>
            <p className="about-me-desc-end">
              {about.end_presentation}
            </p>
          </Fade>
        </div>

        <div className="about-me-presentation m-1 pt-5">
          <Fade delay={1800} duration={1000}>
            <p className="about-me-title">
              {about.skills_title}
            </p>
          </Fade>

          <div className="mt-5">
            <p className="about-me-subtitle"> 
              {about.lang_title}
            </p>
            {
              about.lang.map((item: any, key:number) => {
                return  <p key={key} className="about-me-detail-title ms-3"> <u>{item.title}</u> {item.text}</p>
              })
            }
          </div>

          {
            about.skills.map((item: any, key:number) => {
              return <div key={key} className="mt-5">
                <Fade>
                  <p className="about-me-subtitle mb-0"> 
                    {item.title}
                  </p>
                </Fade>
                <div className="skills-wrapper my-4">
                  <Fade cascade duration={400}>
                  {
                    item.items.map((skill: any, key:number) => {
                      return <div className="skill-container" key={key}>
                        <skill.icon className="skill-icon"/>
                        <p className="about-me-detail mt-2"> {skill.title} </p>
                      </div>
                    })
                  }
                  </Fade>
                </div>
              </div>
            })
          }
        </div>

        <div className="about-me-presentation mx-1">
          {
            about.xp.map((xp: any) => {
              return <>
              <Fade delay={50} duration={1000}>
                <p className="about-me-title mt-5">
                  {xp.title}
                </p>
              </Fade>
              {
                xp.detail.map((detail: any) => {
                  return <Fade delay={50} duration={1000}>
                    <div className="mt-3">
                      <p className="about-me-subtitle mb-0"> 
                        {detail.title} <span className="date">{detail.date}</span>
                      </p>
                      <p className="about-me-detail-title">
                        {detail.location}
                      </p>
                      {
                        detail.desc.map((desc: any) => {
                          return  <p className="about-me-detail mt-2">{parse(desc.text)}
                          { desc.button != null &&
                            <Button variant="link" className="p-0 ps-1 pb-2" target="_blank" href="https://www.francecompetences.fr/recherche/rncp/18275/"> Titre RNCP <BsBoxArrowUpRight/></Button>
                          } <br/>
                          { desc.detail != null &&
                            <span className="lighter">{parse(desc.detail)}</span>
                          } <br/>
                        </p>
                        })
                      }
                    </div>
                  </Fade>
                })
              }
              </>
            })
          }
        
          <div className="about-me-presentation pt-5">
            <Fade delay={50} duration={1000}>
              <p className="about-me-title">
                {about.interest_title}
              </p>
            </Fade>
            <Container>
              <Row>
                {
                  about.interests.map((interest: any, index: number) => {
                    return <Col md={6} sm={12}>
                    <Slide delay={50} duration={2000} direction={index == 0 || index == 2 ? "left" : "right"}>
                      <Card style={{ width: '100%' }} className="my-3">
                        <Card.Img variant="top" src={interest.img} />
                        <Card.Body className="text-center">
                          <Card.Title className="about-me-subtitle">{interest.title}</Card.Title>
                          <Card.Text className="about-me-detail">{interest.text}</Card.Text>
                        </Card.Body>
                      </Card> 
                    </Slide>
                  </Col>
                  })
                }
              </Row>
            </Container>
          </div>

          <Row>
            <Col md={12} sm={12} className="d-flex justify-content-center mt-3">
              <AttentionSeeker effect="wobble" delay={500} duration={2000}>
                <Button href="/projects" className="btn-footer-color"> Voir mes projets <FaArrowCircleRight/></Button>
              </AttentionSeeker>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default AboutMePage;
