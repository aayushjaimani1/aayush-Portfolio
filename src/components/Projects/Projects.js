import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import frosh from "../../Assets/Projects/frosh.png";
import pro4 from "../../Assets/Projects/pro4.jpg";
import take from "../../Assets/Projects/take.png";
import ue4 from "../../Assets/Projects/ue4.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              isBlog={false}
              title="SmartStock Ai"
              description="Developed a complete business management system which includes sophisticated 
              inventory forecasting and customized recommendation functionalities."
              ghLink="https://github.com/aayushjaimani1/BillingApp"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frosh}
              isBlog={false}
              title="FROSH- EduWellness"
              description="Our Angular-based platform which offers features such as a student guide, BMI checker, 
              food recipe database, peaceful places info, and a vaccine center directory. We use various APIs for up-to-date information"
              ghLink="https://github.com/aayushjaimani1/Frosh"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={take}
              isBlog={false}
              title="Take-Care Virtual Guardian"
              description=" A great tool for every parent to ensure the safety of their child no matter where they are in 
              this world"
              ghLink="https://github.com/aayushjaimani1/Take-Care"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ue4}
              isBlog={false}
              title="ARYA RPG"
              description="A fully functional Unreal Engine 4 Game with a Functional HUD and 2 different in game skills which include a projectile attack and a heal skill."
              ghLink="https://github.com/aayushjaimani1/UE4-ARYA-RPG"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
