import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import UserTable from "./UserTable";
import configureStore, { history } from "../store/index";
import "../styles/app.scss";
import UserNewForm from "./UserNewForm";

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users" />} />
          <Route exact path="/users" component={UserTable} />
          <Route path="/users/new" component={UserNewForm} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
