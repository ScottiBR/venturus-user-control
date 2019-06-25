import React from "react";
import PropTypes from "prop-types";

class ConfirmModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle">
        <div className="modalStyle">
          <div className="modalContainer">
            {this.props.children}

            <div className="modalFooterButtons">
              <button
                className="button b-save"
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
        </div>
      </div>
    );
  }
}

export default ConfirmModal;
