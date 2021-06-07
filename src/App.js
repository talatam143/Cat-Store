import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import './App.css';
import Root from "./components/root/root";
import Registration from "./components/registration/registration";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Root}/>
            <Route path="/auth" exact component={Registration}/>
        </Switch>         
        </BrowserRouter>
  );
}

export default App;
