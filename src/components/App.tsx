import React from "react";
import { Switch, Route, Redirect  } from "react-router-dom";
import Header from "./Header";
import LinkList from "./LinkList";
import Login from "./Login";
import SubmitLink from "./SubmitLink";
import Search from "./Search";

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/new/1" />} />
        <Route exact path="/top" component={LinkList} />
        <Route exact path="/new/:page" component={LinkList} />
        <Route exact path="/submit" component={SubmitLink} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </div>
);

export default App;
