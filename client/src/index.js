import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from './components/App/App.jsx';
import LandingPage from './components/LandingPage/LandingPage';
import Error404 from './components/Error/Error404';
import Details from './components/Details/Details';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
   <Switch>
   <Route exact path="/"><LandingPage/></Route>
        {/* <Route path="/about">{<About /> }</Route> */}
    <Route path="/countries/:id"><Details/></Route> 
    <Route exact path="/home" ><App/></Route>
    <Route path="*"><Error404/></Route>

    </Switch>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

