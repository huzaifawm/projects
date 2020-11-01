import React, { Component } from 'react'

// Components
import Header from './components/headers/Header'
import TodoDisplay from './components/body/TodoDisplay'

// Data
import userData from './userData.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeUser: 'Name 1',
      showCompleted: true
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState(
      {activeUser: event.target.value}
    )
  }

  render() {
    return (
      <div className="mainApp">
        <Header
          userData = {userData}
          handleChangeApp = {this.handleChange}
        />
        <TodoDisplay 
          userData = {userData}
          activeUser = {this.state.activeUser}
        />
      </div>
    );
  }
}

export default App;
