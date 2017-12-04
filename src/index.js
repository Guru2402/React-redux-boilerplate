import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./data/store";
import RootRouter from "./app/RootRouter";

class Main extends Component {
  componentWillMount() {
    return null;
  }

  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
