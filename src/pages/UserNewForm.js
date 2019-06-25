import React, { Component } from "react";
import { createUser } from "../actions";
import { connect } from "react-redux";
import { RADIO_ALWAYS, RADIO_SOMETIMES, RADIO_NEVER } from "../constants/util";
class UserNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      city: undefined,
      name: undefined,
      email: undefined,
      ride: 1,
      daysValue: []
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRadioChange = value => {
    this.setState({ ride: value });
  };

  validateBeforeSave = () => {
    this.state.foreach(field => {
      console.log(field);
    });

    if (
      this.props.userInfo.filter(user => user.username === this.state.username)
        .length > 0
    ) {
      return false;
    }
    return true;
  };

  handleOnSave = e => {
    e.preventDefault();
    /*if (this.validateBeforeSave) {
      this.props.createUser(this.state);
      this.handleOnDiscard();
    }*/
    console.log(1);
    this.props.createUser(this.state);
  };
  handleOnDiscard = () => {
    this.setState({
      username: undefined,
      city: undefined,
      name: undefined,
      email: undefined,
      ride: 1,
      daysValue: []
    });
  };

  handleCheckedChange = value => {
    this.setState({ daysValue: [...this.state.daysValue, value] });
  };
  render() {
    const { username, city, name, email, ride, daysValue } = this.state;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="app-main-content-wrapper ">
        <div className="app-main-content-header ">
          <h2 className="page-heading">registration</h2>
          <div className="heading-border " />
        </div>
        <form
          className="app-main-content-body"
          onSubmit={this.props.handleOnSave}
        >
          <div className="app-main-content-user-form">
            <label>Username</label>
            <input
              className="text-input"
              type="text"
              name="username"
              value={username}
              onChange={e => this.handleChange(e)}
            />
            <span className="input-instructions">
              Fill the username without numbers
            </span>
            <label>Name</label>
            <input
              className="text-input"
              type="text"
              name="name"
              value={name}
              onChange={e => this.handleChange(e)}
            />
            <span className="input-instructions">First and Last Name</span>
            <label>E-mail</label>
            <input
              className="text-input"
              type="email"
              name="email"
              value={email}
              onChange={e => this.handleChange(e)}
            />
            <span className="input-instructions">Enter a valid e-mail</span>
            <div className="form-button-group">
              <button
                className="button b-save"
                type="submit"
                onClick={this.props.handleOnSave}
              >
                Save
              </button>
              <button
                className="button b-discard"
                onClick={this.props.handleOnDiscard}
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
              name="city"
              value={city}
              onChange={e => this.handleChange(e)}
            />
            <span className="input-instructions">Enter a valid e-mail</span>
            <label>Ride in group?</label>
            <div className="radio-button-group">
              <input
                className="radio-input"
                type="radio"
                name="ride"
                value="teste"
                checked={ride === RADIO_ALWAYS}
                onChange={() => this.handleRadioChange(RADIO_ALWAYS)}
              />
              <label className="radio-label">Always</label>
              <input
                className="radio-input"
                type="radio"
                name="ride"
                value={ride}
                checked={ride === RADIO_SOMETIMES}
                onChange={() => this.handleRadioChange(RADIO_SOMETIMES)}
              />
              <label className="radio-label">Sometimes</label>
              <input
                className="radio-input"
                type="radio"
                name="ride"
                value={ride}
                checked={ride === RADIO_NEVER}
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
                      name="days"
                      checked={
                        daysValue &&
                        daysValue.filter(value => value === index).length === 1
                      }
                      onChange={() => this.handleCheckedChange(index)}
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
