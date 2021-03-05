
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MenuListComposition from "./components/Header"
import Contact from "./components/Contact"
import About from "./components/About"
import Projects from "./components/Projects"
// import Footer from "./components/Footer"


  function App() {
    return (

      <Router>
        <div className="container" >

          <MenuListComposition />



          <Route exact path="/"/>
          
          <Route exact path="/contact" component={Contact}/>
          
          <Route exact path="/about" component={About} />

          <Route exact path="/projects" component={Projects}/>
        

          
          
        </div>
      </Router>

     

    );
  }

  export default App;

