import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData, removeUser } from "../actions";
import Table from "../components/user/Table";

class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }
  componentDidMount() {
    this.props.getUserData();
  }
  filterUserTable = ({ username, name }) => {
    return (
      name.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
      username.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
  };

  handleSearchValue = e => {
    this.setState({ searchValue: e.target.value });
  };
  handleRemoveUser = id => {
    this.props.removeUser(id);
  };
  render() {
    const { userInfo } = this.props;
    const headers = [
      "",
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
            value={this.state.searchValue}
            onChange={e => this.handleSearchValue(e)}
          />
        </div>

        <div className="app-main-content-body ">
          <Table
            data={userInfo.filter(this.filterUserTable)}
            headers={headers}
            handleRemoveUser={this.handleRemoveUser}
          />
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
  { getUserData, removeUser }
)(UserTable);
