import React from "react"

const TimerActionButton = ({ timerIsRunning }) => (
  timerIsRunning
    ? <div className='ui bottom attached red basic button'>Stop</div>
    : <div className='ui bottom attached green basic button'>Start</div>
)

export default TimerActionButton
