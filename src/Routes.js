import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/CasterContainer";
import Play from "./pages/Play";
import Cam from "./pages/Cam";

function Routes() {

  return (
      <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/play"} component={Play}/>
          <Route exact path={"/cam"} component={Cam}/>
      </Switch>
  )
}



export default Routes;