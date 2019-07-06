import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import WorkDetails from "./pages/WorkDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Router>
          <div className="wrapper clearfix">
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/work/" exact component={Work} />
                <Route path="/work/:id" exact component={WorkDetails} />
                <Route path="/about/" exact component={About} />
                <Route path="/contact/" exact component={Contact} />
                <Route component={Notfound} />
              </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;