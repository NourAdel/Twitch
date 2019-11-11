import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions/index";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "741627866499-437v1dmk7kltl47qg26ag67mcl8735qh.apps.googleusercontent.com",
          scop: "emai l"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSingInClick = () => {
    this.auth.signIn();
  };
  onSingOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSingOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSingInClick}>
          <i className="google icon" />
          Sign In with Gmail
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapSateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapSateToProps,
  { signIn, signOut }
)(GoogleAuth);
