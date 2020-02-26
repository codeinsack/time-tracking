import React from "react"

import EditableTimer from "./EditableTimer/EditableTimer"

const TimerList = ({ timers, onFormSubmit, onTrashClick, onStartClick, onStopClick }) => {
  return (
    <div id='timers'>
      {timers.map((timer) => (
        <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
          onFormSubmit={onFormSubmit}
          onTrashClick={onTrashClick}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
        />
      ))}
    </div>
  )
}

export default TimerList
