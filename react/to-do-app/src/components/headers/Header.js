import React, { Component } from 'react'

// Components
import Title from './Title'
import User from './User'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="header">
        <Title />
        <User 
          userData = {this.props.userData}
          handleChangeApp = {this.props.handleChangeApp}
        />
      </div>
    )
  }
}

export default Header