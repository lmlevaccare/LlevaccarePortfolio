import React from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "../App.css"
// import Button from "./Button";
import image1 from "../images/designerWishlist.png";
import image2 from "../images/kindnessClubAPP.png";
import image3 from "../images/notepadApp.png";
import image4 from "../images/schedulepln.png";
import image5 from "../images/weatherApp.png";
import image6 from "../images/Screen Shot 2020-11-20 at 12.55.48 PM.png";




const Projects = () => {
    const urlArray = [
        {
            id: 1,
            urlio: "https://thedreamteam-nubootcamp.github.io/ReadHere/",
            urlgit: "https://github.com/lmlevaccare/ReadHere",
            image1: { image1 }
        },

        {
            id: 2,
            urlio: "http://kindnessclub.herokuapp.com/home",
            urlgit: "https://github.com/Project-2-Group-4/The-Kindness-Club",
        },
        {
            id: 3,
            urlgit: "https://github.com/lmlevaccare/employeeGenerator",
            urlio: "https://drive.google.com/file/d/12sZi3E_6z62gm3Xi4wqKSFvSDvrSpzOg/view",
        },
        {
            id: 4,
            urlio: "https://lmlevaccare.github.io/designer-wish-app/",
            urlgit: "https://github.com/lmlevaccare/designer-wish-app",
        },
        {
            id: 5,
            urlio: "https://express-notepad-2020.herokuapp.com/",
            urlgit: "https://github.com/lmlevaccare/MyVirtualNotePad",
        },
        {
            id: 6,
            urlio: "https://lmlevaccare.github.io/weatherappHW/",
            urlgit: "https://github.com/lmlevaccare/weatherappHW",
        },
    ];
    console.log(urlArray);


    const urlsArray = urlArray.map(urls => (urls.urlio));

    console.log("urls", urlsArray)
    const urlArray2 = urlArray.map(urls => (urls.urlgit));
    console.log("gits", urlsArray)
    
    return (
        <div>
            <Jumbotron fluid className="jumbotron">
                <Container>
                    <h1>My Projects</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
    </p>
                </Container>
            </Jumbotron>
            <Form className="UserForm">
                <Form.Row>
                 

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Instrument Seeking</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Accordion</option>
                            <option>Acoustic Guitar</option>
                            <option> Flute</option>
                            <option>Clarinet</option>
                            <option>Saxophone</option>
                            <option>Drums</option>
                            <option>Electric Guitar</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>

                        </Form.Control>
                    </Form.Group>
                    <br></br>
                </Form.Row>
                </Form>
               
   
       
          <ul><span><a href={urlsArray[0]}>ReadMe.App-@github.pages</a></span></ul>
                <ul><span><a href={urlArray2[0]}>ReadMe.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[1]}>Kindness.App-@heroku</a></span></ul>
            <ul><span><a href={urlArray2[1]}>Kindness.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[2]}>EmployeeGeneratorApp-GoogleLink</a></span></ul>
            <ul><span><a href={urlArray2[2]}>EmployeeGenerator.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[3]}>DesignerWish.App-@github.pages</a></span></ul>
            <ul><span><a href={urlArray2[3]}>DesignerWish.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[4]}>ExpressNotePad.App-@heroku</a></span></ul>
            <ul><span><a href={urlArray2[4]}>ExpressNotePad.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[5]}>WeatherApi.App-@github.pages</a></span></ul>
    <ul><span><a href={urlArray2[5]}>WeatherApi.App-githubRepo</a></span></ul>    
    
            </div>

    );
};



export default Projects
    

    