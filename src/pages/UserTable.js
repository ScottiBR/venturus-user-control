import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData, removeUser } from "../actions";
import Table from "../components/user/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "../components/dialogs/ConfirmModal";

class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      show: false,
      removeId: null
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
  handleOnDiscard = () => {
    this.setState({ show: false });
  };
  handleRemoveUser = id => {
    this.setState({ show: true, removeId: id });
  };
  handleOnSave = () => {
    this.props.removeUser(this.state.removeId);
    this.setState({ show: false, removeId: null });
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
        <ConfirmModal
          show={this.state.show}
          handleOnDiscard={this.handleOnDiscard}
          handleOnSave={this.handleOnSave}
        >
          <h3 className="page-heading">Confirma essa exclusão?</h3>
        </ConfirmModal>
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
