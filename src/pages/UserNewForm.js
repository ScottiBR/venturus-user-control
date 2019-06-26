import React, { Component } from "react";
import { createUser } from "../actions";
import { connect } from "react-redux";
import { RADIO_ALWAYS, RADIO_SOMETIMES, RADIO_NEVER } from "../constants/util";
class UserNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      city: "",
      name: "",
      email: "",
      rideGroup: 1,
      dayOfWeek: []
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };
  handleRadioChange = value => {
    this.setState({ rideGroup: value });
  };

  validateBeforeSave = () => {
    const { username, name, email, rideGroup, dayOfWeek } = this.state;
    if (username && name && rideGroup && dayOfWeek) {
      const hasUser = this.props.userInfo.filter(
        user => user.username === this.state.username
      );
      if (hasUser.length > 0) {
        alert("Usuário Já Cadastrado");
        return false;
      }
      return true;
    } else {
      alert("Preencha os campos obrigatórios");
    }

    return false;
  };

  handleOnSave = e => {
    if (this.validateBeforeSave()) {
      this.props.createUser(this.state);
      this.handleOnDiscard();
    }
    e.preventDefault();
  };
  handleOnDiscard = e => {
    this.setState({
      username: "",
      city: "",
      name: "",
      email: "",
      rideGroup: 1,
      dayOfWeek: []
    });

    e.preventDefault();
  };

  handleCheckedChange = value => {
    if (this.state.dayOfWeek.filter(day => day === value).length > 0) {
      this.setState({
        dayOfWeek: this.state.dayOfWeek.filter(day => day !== value)
      });
    } else {
      this.setState({ dayOfWeek: [...this.state.dayOfWeek, value] });
    }
  };
  render() {
    const { username, city, name, email, rideGroup, dayOfWeek } = this.state;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="app-main-content-wrapper ">
        <div className="app-main-content-header ">
          <h2 className="page-heading">registration</h2>
          <div className="heading-border " />
        </div>
        <form className="app-main-content-body" onSubmit={this.handleOnSave}>
          <div className="app-main-content-user-form">
            <label>Username</label>
            <input
              className="text-input"
              type="text"
              value={username}
              onChange={this.handleChange("username")}
            />
            <span className="input-instructions">
              Fill the username without numbers
            </span>
            <label>Name</label>
            <input
              className="text-input"
              type="text"
              value={name}
              onChange={this.handleChange("name")}
            />
            <span className="input-instructions">First and Last Name</span>
            <label>E-mail</label>
            <input
              className="text-input"
              type="email"
              value={email}
              onChange={this.handleChange("email")}
            />
            <span className="input-instructions">Enter a valid e-mail</span>
            <div className="form-button-group">
              <button className="button b-save">Save</button>
              <button
                className="button b-discard"
                onClick={this.handleOnDiscard}
              >
                Discard
              </button>
            </div>
          </div>
          <div className="app-main-content-user-form">
            <label>City</label>
            <input
              className="text-input"
              type="text"
              value={city}
              onChange={this.handleChange("city")}
            />
            <span className="input-instructions">Enter a valid e-mail</span>
            <label>Ride in group?</label>
            <div className="radio-button-group">
              <input
                className="radio-input"
                type="radio"
                name="rideGroup"
                value={rideGroup}
                checked={rideGroup === RADIO_ALWAYS}
                onChange={() => this.handleRadioChange(RADIO_ALWAYS)}
              />
              <label className="radio-label">Always</label>
              <input
                className="radio-input"
                type="radio"
                name="rideGroup"
                value={rideGroup}
                checked={rideGroup === RADIO_SOMETIMES}
                onChange={() => this.handleRadioChange(RADIO_SOMETIMES)}
              />
              <label className="radio-label">Sometimes</label>
              <input
                className="radio-input"
                type="radio"
                name="rideGroup"
                value={rideGroup}
                checked={rideGroup === RADIO_NEVER}
                onChange={() => this.handleRadioChange(RADIO_NEVER)}
              />
              <label className="radio-label">Never</label>
            </div>
            <label>Days of Week</label>
            <div className="radio-button-group">
              {days.map((day, index) => {
                return (
                  <>
                    <input
                      key={index}
                      className="checkbox-input"
                      type="checkbox"
                      name="dayOfWeek"
                      value={dayOfWeek}
                      checked={
                        dayOfWeek &&
                        dayOfWeek.filter(value => value === day).length === 1
                      }
                      onChange={() => this.handleCheckedChange(day)}
                    />
                    <label className="checkbox-label">{day}</label>
                  </>
                );
              })}
            </div>
          </div>
        </form>
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
  { createUser }
)(UserNewForm);
