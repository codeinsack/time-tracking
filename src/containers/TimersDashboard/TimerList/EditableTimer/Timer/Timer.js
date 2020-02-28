import React, { Component } from "react"

import TimerActionButton from "./TimerActionButton"
import { renderElapsedString } from "../../../../../utils"

class Timer extends Component {
  componentDidUpdate() {
    const { runningSince } = this.props;
    if (runningSince) {
      this.forceUpdateInterval = setTimeout(() => {
        clearInterval(this.forceUpdateInterval);
        this.forceUpdate()
      }, 1000);
    } else {
      clearInterval(this.forceUpdateInterval);
    }
  }

  handleStartClick = () => {
    const { onStartClick, id } = this.props
    onStartClick(id);
  };

  handleStopClick = () => {
    const { onStopClick, id } = this.props
    onStopClick(id);
  };

  handleTrashClick = () => {
    const { onTrashClick, id } = this.props
    onTrashClick(id);
  };

  render() {
    const { elapsed, runningSince, title, project, onEditClick } = this.props
    console.log('elapsed', elapsed);

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
            <span className='right floated edit icon' onClick={onEditClick}>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon' onClick={this.handleTrashClick}>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <TimerActionButton
          timerIsRunning={!!runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
}

export default Timer
