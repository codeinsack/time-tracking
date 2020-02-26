import React, { Component } from "react"

import TimerList from "./TimerList/TimerList"
import ToggleableTimerForm from "./ToggleableTimerForm/ToggleableTimerForm"

import { newTimer } from "../../utils"
import { createTimer, deleteTimer, getTimers, startTimer, stopTimer, updateTimer } from "../../api"

class TimersDashboard extends Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    this.loadTimersFromServer();
  }

  loadTimersFromServer = () => {
    getTimers((serverTimers) => {
        this.setState({ timers: serverTimers })
      }
    );
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  createTimer = (timer) => {
    const { timers } = this.state

    const t = newTimer(timer);
    this.setState({
      timers: timers.concat(t),
    });

    createTimer(t);
  };

  updateTimer = (attrs) => {
    const { timers } = this.state

    this.setState({
      timers: timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });

    updateTimer(attrs);
  };

  deleteTimer = (timerId) => {
    const { timers } = this.state

    this.setState({
      timers: timers.filter(t => t.id !== timerId),
    });

    deleteTimer({
      id: timerId,
    });
  };

  startTimer = (timerId) => {
    const now = Date.now();
    const { timers } = this.state

    this.setState({
      timers: timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });

    startTimer({
      id: timerId,
      start: now,
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();
    const { timers } = this.state

    this.setState({
      timers: timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });

    stopTimer({
      id: timerId,
      stop: now,
    });
  };

  render() {
    const { timers } = this.state

    return (
      <div className='ui three column centered grid' style={{ width: '100%' }}>
        <div className='column'>
          <TimerList
            timers={timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default TimersDashboard
