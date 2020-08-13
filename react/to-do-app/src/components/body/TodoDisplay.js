import React, { Component } from 'react'

import Toggle from './Toggle'
import Tasks from './Tasks'

class TodoDisplay extends Component {
  constructor() {
    super()
  }
  
  render() {
    let userRec = this.props.userData.filter((record) => {
      return this.props.activeUser == record.user
    })[0]

    return (
      <div className="todoDisplay">
        <Toggle />
        <Tasks 
          user = {userRec}
        />
      </div>
    )
  }
}

export default TodoDisplay