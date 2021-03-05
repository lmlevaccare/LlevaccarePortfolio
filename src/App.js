
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MenuListComposition from "./components/Header"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import MediaCard from "./components/About"
import Footer from "./components/Footer"


function App() {
    return (

      <Router>
        <div >

          <MenuListComposition  />



          <Route exact path="/"/>
          
          <Route exact path="/contact" component={Contact}/>
          
          <Route exact path="/projects" component={Projects} />

          <Route exact path="/about" component={MediaCard}/>
        

          <Footer/>
          
        </div>
      </Router>

     

    );
  }

  export default App;

