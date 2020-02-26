import React, { Component } from "react"

import Timer from "./Timer/Timer"
import TimerForm from "../../../../components/TimerForm/TimerForm"

class EditableTimer extends Component {
  state = {
    editFormOpen: false,
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (timer) => {
    const { onFormSubmit } = this.props

    onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    const { editFormOpen } = this.state
    const {
      id,
      title,
      project,
      elapsed,
      runningSince,
      onTrashClick,
      onStartClick,
      onStopClick,
    } = this.props

    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onTrashClick={onTrashClick}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
          onEditClick={this.handleEditClick}
        />
      );
    }
  }
}

export default EditableTimer
