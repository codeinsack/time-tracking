import React, { Component } from "react"

class ToggleableTimerForm extends Component {
  render() {
    return (
      <div className='ui basic content center aligned segment'>
        <button className='ui basic button icon'>
          <i className='plus icon' />
        </button>
      </div>
    );
  }
}

export default ToggleableTimerForm
