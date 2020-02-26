import React, { Component } from "react"

import TimerActionButton from "./TimerActionButton"
import { renderElapsedString } from "../../../../../utils"

class Timer extends Component {
  render() {
    const { elapsed, runningSince, title, project } = this.props
    const elapsedString = renderElapsedString(elapsed, runningSince)
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>{title}</div>
          <div className='meta'>{project}</div>
          <div className='center aligned description'>
            <h2>{elapsedString}</h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <TimerActionButton />
      </div>
    );
  }
}

export default Timer
