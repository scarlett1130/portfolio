import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectcard";
import projImg11 from "../assets/img/project1-1.png";
import projImg12 from "../assets/img/project1-2.png";
import projImg13 from "../assets/img/project1-3.png";
import projImg21 from "../assets/img/project2-1.png";
import projImg22 from "../assets/img/project2-2.png";
import projImg23 from "../assets/img/project2-3.png";
import projImg31 from "../assets/img/project3-1.png";
import projImg32 from "../assets/img/project3-2.png";
import projImg41 from "../assets/img/project4-1.png";
import projImg42 from "../assets/img/project4-2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg12,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg13,
    }
  ];

  const project2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg21,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg22,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg23,
    }
  ];

  const project3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg31,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg32,
    }
  ];

  const project4 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg41,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg42,
    }
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>nothing to see for now</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          project4.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}