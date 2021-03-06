import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AttentionSeeker, Fade, Slide, Zoom } from 'react-awesome-reveal';
import Layout from '../components/Layout';
import { homeData } from '../mock/home';
import '../style/index.scss'
import { FaArrowCircleRight } from 'react-icons/fa';

function IndexPage(){
  const home = homeData;

  return (
    <Layout>
      <Container className="home-containter">
        <Row className="intro-wrapper">
          <Col md={12} sm={12} className="d-flex justify-content-center flex-column">
            <Slide duration={2000} direction="down" triggerOnce={true}>
              <p className="intro-title text-center">{ home.title }</p>
            </Slide>
            <Fade delay={700} triggerOnce={true}>
              <p className="intro-subtitle text-center">{ home.subtitle }</p>
            </Fade>
          </Col>
        </Row>

        <Row className="presentation-wrapper py-5 d-flex align-items-center">
          <Col md={12} sm={12}>
            <Fade delay={50} duration={1000} triggerOnce={true}>
                <p className="text-center"> { home.presentation_title }</p>
                <p className="text-center mb-3"> { home.presentation }</p>
                <p className="text-center mb-5"> { home.presentation_end }</p>
            </Fade>
          </Col>
        </Row>

        <Row className="qualities-wrapper">
          <Col md={12} sm={12} className="d-flex justify-content-center">
            <Slide delay={50} duration={1000} triggerOnce={true} direction="down">
              <p className="wrapper-title text-center">{home.qualities_title}</p>
            </Slide >
          </Col>
          {home.qualities.map((item: any, index: number) => {
            return <Col md={4} sm={6} className="pt-5 d-flex justify-content-center" key={index}>
              <Slide triggerOnce={true} duration={1000} direction={index == 2 || index == 5 ? "left": index == 0 || index == 5 ? "up" : "right"}>
                <div className="qualities-container">
                  <item.icon className="qualities-icon"/>
                  <p className="qualities-name pt-5">{item.title}</p>
                  <p className="qualities-subname">{item.description}</p>
                </div>
              </Slide>
            </Col>
          })}
        </Row>

        <Row className="course-wrapper">
          <Col md={12} sm={12} className="d-flex justify-content-center mb-5">
            <Fade duration={1000} triggerOnce={true}>
              <p className="wrapper-title">{home.course_title}</p>
            </Fade>
          </Col>
          <Fade duration={1000} triggerOnce={true}>
            <div className="course-steps-wrapper">
              {
                home.course.map((item: any, index: number) =>{
                  return <Col md={12} sm={12} className="course-step mb-3">
                  <Fade delay={50} duration={1000} triggerOnce={true}>
                    <div className="course-text-container">
                      <p className="course-date mt-3"> <span className="text-color-primary"> {item.time} </span> {item.time_desc} </p>
                      <p className="course-title mb-4"><item.icon className="me-2"/>{item.location}</p>
                      {
                        item.description.map((sub_item: any, index: number) => {
                          return <>
                            <p className="course-description mb-2"><strong> {sub_item.date} </strong> {sub_item.text}
                            {
                              sub_item.button  != null && 
                              <Button variant="link" className="p-0 ps-2 mb-1" target="_blank" href={sub_item.button.href}>{sub_item.button.text}<sub_item.button.icon/></Button>
                            }
                            </p>
                            <div className="d-flex flex-wrap">
                              {
                                sub_item.skills != null && sub_item.skills.map((skill: any, index: number) => {
                                  return <p className="course-badge me-1"> {skill} </p>
                                })
                              }
                            </div>
                          </>
                        })
                      }
                    </div>
                  </Fade>
                </Col>
                })
              }
            </div> 
          </Fade>
          <Col md={12} sm={12} className="d-flex justify-content-center mt-3">
            <AttentionSeeker effect="wobble" delay={500} duration={2000}>
              <Button href="/aboutme" className="btn-footer-color">Voir mon CV <FaArrowCircleRight/></Button>
            </AttentionSeeker>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default IndexPage;
