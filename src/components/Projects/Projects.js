import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              isBlog={false}
              title="SwingBar"
              description="Developed SwingBar,a dynamic website using HTML, CSS, and JavaScript.
              Utilized GSAP for smooth animations and improved user engagement.
              Ensured efficient code structure for readability and scalability.
              Crafted captivating animations to enhance the user experience"
              ghLink="https://github.com/bhanuteja-2003/SwingBar"
              demoLink="https://bhanuteja-2003.github.io/SwingBar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TickTrack"
              description="Developed end-to-end backend infrastructure for a feature-rich todo list application.
              Implemented secure user authentication via cookies, bolstering system integrity.
              Employed JWT tokenization to encrypt and protect sensitive data during transmission.
              Utilized Bcrypt hashing for secure storage and protection of user passwords.
              Deployed the system on Render, ensuring seamless and reliable hosting for enhanced accessibility and performance.
              "
              ghLink="https://github.com/bhanuteja-2003/BackendLearning/tree/main/TodoBackend"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="MarkDone"
              description="Spearheaded the development of a feature-rich to-do list application using React.
              Implemented advanced React Hooks like useState and useEffect for efficient state management and component lifecycle handling.
              Utilized localStorage to persist data, eliminating the need for resetting to default state upon project reload.
              Ensured code cleanliness and maintainability, reflecting a dedication to high-quality development practices.
              "
              ghLink="https://github.com/bhanuteja-2003/To-Do_Project"
              demoLink="https://bhanuteja-2003.github.io/To-Do_Project/"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Boundless"
              description="Developed a dynamic React JS eCommerce site with clean code and UI/UX focus.
              Designed an engaging Home page with trending products and user-friendly features.
              Created sleek category-specific product pages with detailed descriptions.
              "
              ghLink="https://github.com/bhanuteja-2003/Boundless-project"
              demoLink=""

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Foodie"
              description="Implemented an intuitive and visually appealing user interface using React, ensuring an engaging and efficient user
              experience.
              Integrated JSON server to store and manage the applications data , ensuring seamless data retrieval and manipulation.
              Collaborated closely with five members of a cross-functional team, including designers, to guarantee the smooth
              integration of frontend components."
              ghLink="https://github.com/bhanuteja-2003/Foodie"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Complain-Ease"
              description="Developed a good looking web application using HTML/CSS , React.JS, Node.JS where users can lodge complaints
              regarding their locality problems which can be viewed directly by respective authority employees.
              Around 20-30 users have registered and filed complaints with ease."
              ghLink="https://github.com/bhanuteja-2003/ComplainEase"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
