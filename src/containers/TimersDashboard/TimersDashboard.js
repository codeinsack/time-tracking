import React, { Component } from "react"

import TimerList from "./TimerList/TimerList"
import ToggleableTimerForm from "./ToggleableTimerForm/ToggleableTimerForm"

class TimersDashboard extends Component {
  render() {
    return (
      <div className='ui three column centered grid' style={{ width: '100%' }}>
        <div className='column'>
          <TimerList />
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
}

export default TimersDashboard
