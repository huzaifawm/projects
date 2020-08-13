import React, { Component } from 'react'

// Components
import Button from '../Button'

class User extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="users">
        <div className="userList">
        <select onChange={this.props.handleChangeApp}>
          {this.props.userData.map((user) => {
            return (
              <option key={user.identifier} value={user.user}>{user.user}</option>
            )
          })}
        </select>
          <Button
            type='+'
          />
        </div>
      </div>
    )
  }
}

export default User