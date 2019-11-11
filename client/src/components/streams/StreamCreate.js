import React, { Component } from "react";
import { connect } from "react-redux";

import StreamFrom from "./StramForm";
import { createStream } from "../../actions/index";

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create A Stream</h3>
        <StreamFrom onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
