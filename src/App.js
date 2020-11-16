import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import About from "./pages/About";
// import About from "./components/pages/About";
import Portfolio from "./pages/Porfolio";
import Contact from "./pages/Contact";
// import Technologies from "./components/pages/Technologies";
import BurgerMenu from "./components/animations/BurgerMenu"
// import background from "./assets/black background.jpg"

function App() {
  return (
    
    // <Router>
    //   <Switch>
    //   <div>
    //     <NavTabs />
    //     <Route exact path="/Home" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route exact path="/Technologies" component={Technologies} />
    //   </div>
    //   </Switch>
    // </Router>
    <>

    <Router>
      <BurgerMenu/>
      <Switch>
        <Route  exact path="/about"  component ={About}/>
        {/* <Route exact path="/About" component ={About}/> */}
        <Route exact path="/contact" component ={Contact}/>
        {/* <Route exact path="/Technologies" component ={Technologies}/> */}
        <Route exact path="/portfolio" component ={Portfolio}/>
      </Switch>
      {/* <Router> */}
    {/* //   <Switch>
    //   <div>
    //     <NavTabs />
    //     <Route exact path="/Home" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route exact path="/Technologies" component={Technologies} />
    //   </div>
    //   </Switch>
    // </Router> */}
       </Router> 
   </>
    
  );
}

export default App;