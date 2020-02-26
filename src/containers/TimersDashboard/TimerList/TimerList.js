import React from "react"

import EditableTimer from "./EditableTimer/EditableTimer"

const TimerList = () => {
  return (
    <div id='timers'>
      <EditableTimer elapsed="5510288" runningSine={null} title="Mow the lawn" project="Project 1" />
      <EditableTimer elapsed="76671" runningSine={null} title="New timer" project="New project" />
      <EditableTimer editFormOpen />
    </div>
  )
}

export default TimerList
