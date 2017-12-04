import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./app";

class RootRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={App} />
          <Route
            path="/home"
            render={() => (
              <div>
                <Link to="/">
                  <button>Go Home</button>
                </Link>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default RootRouter;
