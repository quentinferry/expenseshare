import React from 'react';
import './App.scss';
import NavBar from "./components/layout/NavBar";
import {Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import JoinPage from "./components/pages/JoinPage";
import CreatePage from "./components/pages/CreatePage";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return (

          <React.Fragment>
              <NavBar/>
              <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/JoinPage' component={JoinPage} />
                  <Route path='/CreatePage' component={CreatePage} />
                  <Route path='/AboutPage' component={AboutPage} />


              </Switch>
          </React.Fragment>

  );
}

export default App;
