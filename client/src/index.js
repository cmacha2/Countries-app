import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from './components/App/App.jsx';
import LandingPage from './components/LandingPage/LandingPage';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
   <Switch>
        {/* <Route path="/about">{<About /> }</Route>
        <Route path="/users">{/ <Users /> }</Route> */}
        <Route path="/home" ><App/></Route>
        <Route exact path="/"><LandingPage/></Route>
    </Switch>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

