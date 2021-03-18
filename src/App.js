
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
import WorkImg from "./components/WorkImg"
import Wrapper from "./components/Wrapper"

import HpageLogo from "./components/HpageLogo"



function App() {
  
   
  
  
    return (
      <Router>
        <NavBar />
        <div>
          <Route exact path="/" component={HpageLogo}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={WorkImg} />
          <Route exact path="/about" component={MediaCard} />
          {/* <Footer /> */}
          
        </div>
      </Router>
    );
  }

  export default App;

