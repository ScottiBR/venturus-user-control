import React, { Component } from "react";
import { connect } from "react-redux";

class UserNewForm extends Component {
  render() {
    const { header } = this.props;
    return (
      <div>
        <h1>userForm</h1>
        <h1>{header}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ userForm }) => {
  return userForm;
};
export default connect(
  mapStateToProps,
  null
)(UserNewForm);
