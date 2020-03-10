import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
