import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/singleroom";
import Error from "./pages/error";
import Navbar from "./components/Navbar"
import {Route,Switch} from "react-router-dom";
function App() {
  return <>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact  path="/rooms" component={Room}/>
  <Route exact path="/rooms/:slug" component={SingleRoom}/>
  <Route component={Error}/>
  </Switch>
  </>
}

export default App;
