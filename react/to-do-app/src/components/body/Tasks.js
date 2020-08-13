import React, { Component } from 'react'

import Task from './Task'

class Tasks extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.user)
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