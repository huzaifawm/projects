import React, { Component } from 'react'

import Task from './Task'

class Tasks extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="tasks">
        {this.props.user.tasks.map((task) => {
          return <Task key = {task.id} task = {task.description}/>
        })}
      </div>
    )
  }
}

export default Tasks