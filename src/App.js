import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Contact from "./Contact.js";
import Main from "./Main.js";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* To add to the sidebar, see "theme/Sidebar/Sidebar.js" */}
        {/* <Route exact path="/register" component={AppUserRegister} /> */}

        {/* To add to the navbar, see "theme/Navbar/Navbar.js" */}
        {/* <Navbar /> */}
        <Route exact path="/contact" component={Contact} />
        <Route path="/" exact component={Main} />
      </React.Fragment>
    );
  }
}

export default App;
