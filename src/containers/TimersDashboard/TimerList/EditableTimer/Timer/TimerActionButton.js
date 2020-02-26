import React from "react"

const TimerActionButton = ({ onStopClick, onStartClick, timerIsRunning }) => (
  timerIsRunning
    ? <div className='ui bottom attached red basic button' onClick={onStopClick}>Stop</div>
    : <div className='ui bottom attached green basic button' onClick={onStartClick}>Start</div>
)

export default TimerActionButton
