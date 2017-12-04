import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { SampleAction } from "../data/actions";

class App extends Component {
  componentWillMount() {
    return this.props.SampleAction("Hello! here is the boilerplate");
  }

  render() {
    return (
      <div>
        <Link to="/home">
          <div>{this.props.text}</div>
        </Link>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return state.SampleState;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ SampleAction: SampleAction }, dispatch);
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
