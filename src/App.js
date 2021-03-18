
import './App.css';
// import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import MenuListComposition from "./components/Header"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import MediaCard from "./components/About"
// import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import TypedScript from "./components/TypedScript"

// import { Button } from '@material-ui/core';



   

  


function App() {
  
   
  
  
    return (
  
      <Router>
      
        <div >
     

          <NavBar />

       

          <Route exact path="/" component={TypedScript}/>
          
          <Route exact path="/contact" component={Contact} />
          
          <Route exact path="/projects" component={Projects} />
        

          <Route exact path="/about" component={MediaCard} />
    
          {/* <Footer /> */}
        

        </div>
    
      </Router>

     

    );
  }

  export default App;

