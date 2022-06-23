import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="/" ><img className="logoFooter" src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mark-zuckerberg-618bba58/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/zuck" target="_blank"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/zuck/?hl=en" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
