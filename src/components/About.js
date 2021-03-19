import React from 'react'

import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";

import headshot from "../images/headshot2.jpg"
import Wrapper from "../components/Wrapper"
import "../App.css"
import Container from 'react-bootstrap/esm/Container';
import About from "./About"
export default function MediaCard() {

      let email = "mailto:laurenlevaccare@icloud.com";
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume"
    let urlGithub = "https://github.com/lmlevaccare" 
    

    return (
      // <Figure>

      //     <h1 style={{ color: "orange" }}>About.Me</h1>
      //     <Figure.Image
      //       style={{
      //         paddingLeft: "50px",
      //         paddingTop: "20px",
      //         paddingRight: "auto",
      //         filter: "brightness-130px",
      //       }}
      //       width={200}
      //       height={300}
      //       alt="271x380"
      //       src={headshot}
      //     />

      <Media>
        <img
          style={{
            paddingTop: "65px",
            paddingLeft: "40px",
            paddingRight: "auto",
            filter: "brightness-130px",
          }}
          width={220}
          height={330}
          alt="271x380"
          src={headshot}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h1 style={{ color: "orange" }}>About.Me</h1>
          <p
            style={{
              marginLeft: "45px",
              paddingRight: "20px",
              paddingLeft: "20px",
              marginRight: "45px",
              paddingTop: "30px",
              color: "orange",
              backgroundColor: "white",
              fontSize: "30px",
            }}
          >
            Full Stack Web developer with a background in sales and sales
            management. Graduate of the Northwestern Coding Boot Camp as well as
            holding a BA degree in business management with a minor in media
            marketing.As a full stack web developer I look forward to leveraging
            my management skill-set with new web development and programming
            techniques. <br></br> I have a strong curiosity for new tools,
            programs and technologies along with a passion for creating new
            applications and collaborating with others.
          </p>

          {/* <Button
            style={{
              marginLeft: "45px",
              marginRight: "45px",
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
          </Button> */}
        </Media.Body>
  
      </Media>
    );
}
