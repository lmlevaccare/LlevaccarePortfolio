import React from 'react'
import resume from "../images/Lauren Levaccare Resume FEB 2021.pdf"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import { AiFillGithub } from "react-icons/ai";
import Button from '@material-ui/core/Button';
import "../App.css"

let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume"
// let urlGithub = "https://github.com/lmlevaccare"
let urlGithub = ["https://github.com/lmlevaccare"]
const onClick = () => {
    
   urlGithub = ["https://github.com/lmlevaccare"]
    const gitHub = urlGithub.map((index)=>index)
    console.log("git",gitHub)
}

const Footer = () => {
    let email = "mailto:laurenlevaccare@icloud.com"  
    return (
                    <div className="footer">

                    <Card >
                        <CardActions className="contact" >
                    <Button size="small" color="primary" on>
                      

                        <span><a href={email} >Email.Me</a></span>
                            </Button>
                            <Button size="small" color="primary">

                                <span><a href={urlGithub} >Github.Page</a></span>

                    </Button> 
                        

                    
                            <Button size="small" color="primary">

                                <span><a href={resume}>Resume</a></span>

                            </Button>
                            <Button size="small" color="primary">

                                <span><a href={urlLinkedin}>Linkedin</a></span>

                            </Button>
                        </CardActions>
                    </Card>

        </div>
    )
}
export default Footer