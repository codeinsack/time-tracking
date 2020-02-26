import React, { Component } from "react"

import TimerForm from "../../../components/TimerForm/TimerForm"

class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
    const { onFormSubmit } = this.props

    onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state

    if (isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm
