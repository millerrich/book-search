import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='body'>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
        <Route exact path={process.env.PUBLIC_URL + "/search"} component={Search} />
        <Route exact path={process.env.PUBLIC_URL + "/saved"} component={Saved} />
        <Route path={process.env.PUBLIC_URL + "*"} component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;