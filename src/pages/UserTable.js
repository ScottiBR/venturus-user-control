import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../actions";
import Table from "../components/user/Table";

class UserTable extends Component {
  componentDidMount() {
    this.props.getUserData();
  }
  render() {
    const { userInfo } = this.props;
    const headers = [
      "username",
      "name",
      "e-mail",
      "city",
      "ride in group",
      "day of the week",
      "posts",
      "albums",
      "photos"
    ];
    return (
      <div className="app-main-content-wrapper ">
        <div className="app-main-content-header ">
          <h2 className="page-heading">users</h2>
          <div className="heading-border " />
          <input
            className="search-bar"
            type="text"
            name="name"
            placeholder="Filter Table Content"
          />
        </div>

        <div className="app-main-content-body ">
          <Table data={userInfo} headers={headers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { userInfo } = user;
  return { userInfo };
};
export default connect(
  mapStateToProps,
  { getUserData }
)(UserTable);
