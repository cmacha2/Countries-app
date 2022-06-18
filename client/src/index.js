import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./Redux/store";
import LandingPage from './components/LandingPage/LandingPage';
import Error404 from './components/Error/Error404';
import Details from './components/Details/Details';
import FormActivity from './components/FormActivity/FormActivity';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <Switch>
    <Route exact path="/"><LandingPage/></Route>
     <Route exact path="/activities">{<FormActivity /> }</Route>
     <Route path="/countries/:id"><Details/></Route> 
     <Route exact path="/home" ><App/></Route>
     <Route path="*"><Error404/></Route>
     </Switch>
   </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

