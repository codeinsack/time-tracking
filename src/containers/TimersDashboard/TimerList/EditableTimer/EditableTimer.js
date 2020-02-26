import React, { Component } from "react"

import Timer from "./Timer/Timer"
import TimerForm from "../../../../components/TimerForm/TimerForm"

class EditableTimer extends Component {
  render() {
    const { editFormOpen } = this.props
    if (editFormOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <Timer { ...this.props } />
      );
    }
  }
}

export default EditableTimer
