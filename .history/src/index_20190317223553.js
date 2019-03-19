import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import Axios from "axios";

import registerServiceWorker from "./registerServiceWorker";
import App from "./pages/App";
import ParksApp from "./components/ParksApp";
import ShowPark from "./components/ShowPark";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import reducers from "./reducers/index";
import authGuard from "./components/HOCs/authGuard";
import Request from "./components/Request";

const jwtToken = localStorage.getItem("JWT_TOKEN");
Axios.defaults.headers.common["Authorization"] = jwtToken;

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      {
        auth: {
          token: jwtToken,
          isAuthenticated: jwtToken ? true : false
        }
      },
      applyMiddleware(reduxThunk)
    )}
  >
    <BrowserRouter>
      <App>
        <Route exact path="/" component={authGuard(ParksApp)} />
        <Route exact path="/Request" component={authGuard(Request)} />
        <Route
          exact
          path="/park/:title::date"
          component={props => (
            <ShowPark
              title={props.match.params.title}
              date={props.match.params.date}
              {...props}
            />
          )}
        />

        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Park this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
