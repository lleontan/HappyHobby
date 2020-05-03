import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import DailyHobbyView from "./client/views/DailyHobbyView";
import InterestSelectionView from "./client/views/InterestSelectionView";
import HeaderView from "./client/views/HeaderView";
import FooterView from "./client/views/FooterView";
import LoginView from "./client/views/LoginView";

import './App.css';

function App() {
  return (
    <div>
      <HeaderView/>
      <main>
        <Switch>
          <Route exact path="/" component={LoginView}/>
          <Route path="/interests" component={InterestSelectionView}/>
          <Route path="/hobby" component={DailyHobbyView}/>
          <Redirect to="/"/>
        </Switch>
      </main>
      <FooterView/>
    </div>
  );
}

export default App;
