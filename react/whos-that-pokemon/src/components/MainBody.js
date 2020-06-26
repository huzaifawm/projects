import React, { Component } from "react"

import Button from "./Button"
import Game from "./Game"

class MainBody extends Component {
  constructor() {
    super()
    this.state = {
      activeGame: false,
      listOfPokemons: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.updateGameStatus = this.updateGameStatus.bind(this)
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(response => {
      this.setState({
        listOfPokemons: response.results
      })
    })
  }

  handleClick(event) {
    const { name, value } = event.target
    this.setState((prevState) => {
      if (name === "activeGame") {
        return {
          activeGame: !prevState.activeGame
        }
      }
      return
    })
  }

  updateGameStatus( status ) {
    this.setState({
      gameStatus: status,
      activeGame: false
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="mainBody">
        {
          (this.state.activeGame) ?
            <Game
              listOfPokemons={this.state.listOfPokemons}
              parentHandleClick={this.handleClick}
              updateGameStatus={this.updateGameStatus}
            />
          :
            <Button
              msg="Start Game"
              styling="startGame"
              task="activeGame"
              handleClick={this.handleClick}
            />
        }
      </div>
    )
  }
}

export default MainBody