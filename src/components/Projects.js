import React from "react";

const Projects = () => {
    const urlArray = [
        {
            urlio: "https://thedreamteam-nubootcamp.github.io/ReadHere/",
            urlgit: "https://github.com/lmlevaccare/ReadHere",
        },

        {
            urlio: "http://kindnessclub.herokuapp.com/home",
            urlgit: "https://github.com/Project-2-Group-4/The-Kindness-Club",
        },
        {
            urlgit: "https://github.com/lmlevaccare/employeeGenerator",
            urlio:"https://drive.google.com/file/d/12sZi3E_6z62gm3Xi4wqKSFvSDvrSpzOg/view",
        },
        {
            urlio: "https://lmlevaccare.github.io/designer-wish-app/",
            urlgit: "https://github.com/lmlevaccare/designer-wish-app",
        },
        {
            urlio: "https://express-notepad-2020.herokuapp.com/",
            urlgit: "https://github.com/lmlevaccare/MyVirtualNotePad",
        },
        {
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
            {/* <p>Read.Here.App</p> */}
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
     )
}

 
    


export default Projects;
