import React from 'react'
import image1 from "../images/kindnessClubAPP.png"
import resume from "../images/Lauren Levaccare Resume FEB 2021.pdf"
import MenuListComposition from "./Header"

// import  "../App.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



  
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {

    let email = "mailto:laurenlevaccare@icloud.com"
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume"
    let urlGithub = "https://github.com/lmlevaccare"

    const classes = useStyles();
    

    return (
       
        <Card >
        
         
                <CardMedia
                    className={classes.media}/>
               
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        About.Me
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Full Stack Web developer with a background in sales and sales
                        management. Graduate of the Northwestern Coding Boot Camp as well as
                        holding a BA degree in business management with a minor in media
                        marketing.As a full stack web developer I look forward to leveraging
                        my management skill-set with new web development and programming
                        techniques.I have a strong curiosity for new tools, programs and
                        technologies along with a passion for creating new applications and
                        collaborating with others.
                         
          </Typography>
                </CardContent>
       
            {/* <CardActions>
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

                    <span><a href={urlLinkedin }>Linkedin</a></span>

                </Button>
            </CardActions> */}
        </Card>
    );
}
