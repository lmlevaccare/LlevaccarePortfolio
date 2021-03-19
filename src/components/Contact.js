import React from 'react'
import resume from "../images/Lauren Levaccare Resume FEB 2021.pdf"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';


import "../App.css"
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const Contact = () => {

     
    let email = "mailto:laurenlevaccare@icloud.com"
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume"
    let urlGithub = "https://github.com/lmlevaccare"



    return (
      <Container>
        <Row>
          <Col>
            <Button
              style={{
                marginLeft: "45px",
                marginRight: "45px",
                marginTop: "30px",
                paddingTop: "30px",
                alignContent: "center",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span>
                <a style={{ color: "orange" }} href={urlGithub}>
                 Github.Account
                </a>
              </span>
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                marginLeft: "45px",
                marginRight: "45px",
                marginTop: "30px",
                paddingTop: "30px",
                alignContent: "center",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span>
                <a style={{ color: "orange" }} href={urlLinkedin}>
                  Linkedin.Account
                </a>
              </span>
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                marginLeft: "45px",
                marginRight: "45px",
                marginTop: "30px",
                paddingTop: "30px",
                alignContent: "center",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span>
                <a style={{ color: "orange" }} src={resume}>
                  Resume
                </a>
              </span>
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                marginLeft: "45px",
                marginRight: "45px",
                marginTop: "30px",
                paddingTop: "30px",
                alignContent: "center",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span>
                <a style={{ color: "orange" }} href={email}>
                  Email.Me
                </a>
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
    );
}
export default Contact