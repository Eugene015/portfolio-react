import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsLatest = [
    {
      title: "Educational Project",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://eugene015.github.io/expenses_react_app/",
    },
    {
      title: "Educational Project",
      description: "Design & Development",
      imgUrl: projImg4,
      url: "https://eugene015.github.io/fast-company",
    },
    {
      title: "Educational Project",
      description: "Design & Development",
      imgUrl: projImg5,
      url: "https://eugene015.github.io/react-product-list/",
    },
    {
      title: "Educational Project",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://eugene015.github.io/react_tasks_list/",
    },
    {
      title: "Educational Project",
      description: "Design & Development",
      imgUrl: projImg7,
      url: "https://eugene015.github.io/canban_draganddrop/",
    },
    {
      title: "Educational Project",
      description: "Design & Development",
      imgUrl: projImg8,
      url: "https://eugene015.github.io/js_aimgame/",
    },
  ];

  const projectsEarly = [
    {
      title: "Business Project",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://zemlevporyadnik.com.ua",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have the latest projects created on React Framework. Most
                    of them are related to my educational process in 2022. Also,
                    I have early projects from 2008 and 2013 that use clean
                    HTML, CSS, jQuery technologies. The second one is working
                    and commercially successful.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Latest Projects</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">Early Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsLatest.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsEarly.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
