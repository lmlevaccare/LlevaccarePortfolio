import React from 'react'
import resume from "../images/Lauren Levaccare Resume FEB 2021.pdf"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import "../App.css"



const Contact = () => {

     
    let email = "mailto:laurenlevaccare@icloud.com"
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume"
    let urlGithub = "https://github.com/lmlevaccare"



    return (
        <div>
            
        <Card >
            <CardActions className="contact">
                <Button size="small" color="primary">
                    <span><a href={email}>Email.Me</a></span>
                </Button>
                <Button size="small" color="primary">

                    <span><a href={urlGithub}>Github.Page</a></span>

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
export default Contact