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
              Utilized CDNJS GSAP for smooth animations and improved user engagement.
              Ensured efficient code structure for readability and scalability.
              Crafted captivating animations to enhance the user experience"
              ghLink="https://github.com/bhanuteja-2003/SwingBar"
              demoLink="https://bhanuteja-2003.github.io/SwingBar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="OpticBloom"
              description="This project is currently in development.It is a social media web application for photography freaks, built with the MERN stack. Users can create accounts, share posts, connect with others, and their best captured moments . Features include a liking posts, dark mode, and commenting capabilities."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ElectroChat"
              description="Developed an innovation aimed at assisting users with their queries related to electronic gadgets.Leveraged NLTK (Natural Language Toolkit) and Python to build the chatbot’s functionality and enhance its natural language processing capabilities.Guided 100+ users on knowing insights about the electronic gadgets."
              ghLink="https://github.com/bhanuteja-2003/ElectroChat"
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
