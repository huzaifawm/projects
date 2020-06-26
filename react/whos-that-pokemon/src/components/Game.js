import React, { Component } from "react"
import Button from "./Button"
import Image from "./Image"

// Images
import whosThatPokemonIMG from "../images/whos-that-pokemon-background.png"

class Game extends Component {
  constructor() {
    super()
    this.state = {
      gameStatus: "",
      randomPokemon: {
        // name: "Bulbasaur",
        // img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        name: "",
        img: "",
      },
      options: []
    }

    this.getRandomPokemon = this.getRandomPokemon.bind(this)
    this.getOptions = this.getOptions.bind(this)
    this.shuffleArray = this.shuffleArray.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    let pokemonList = this.props.listOfPokemons
    this.getRandomPokemon(pokemonList)
  }

  shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  getOptions(pokemonList, randPokemon) {
    let options = [{key: 1, name: randPokemon}]
    while (options.length < 4) {
      let PokemonOption = pokemonList[Math.floor(Math.random()*pokemonList.length)]
      let pokemonNames = options.map((pokemon) => {
        return pokemon.name
      })
      if (!pokemonNames.includes(PokemonOption.name)) {
        options.push(
          {
            key: options.length + 1,
            name: PokemonOption.name
          }
        )
      }
    }
    this.setState({
      options: this.shuffleArray(options)
    })
  }

  getRandomPokemon(pokemonList) {
    let randPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)]
    fetch(randPokemon.url)
    .then(response => response.json())
    .then(response => {
      this.getOptions(pokemonList, response.name)
      this.setState({
        randomPokemon: {
          name: response.name,
          img: response.sprites.front_default
        }
      })
    })
  }

  handleClick(event) {
    let guess = event.target.name
    if (guess == this.state.randomPokemon.name) {
      this.setState({
        gameStatus: "right",
      })
      // this.props.updateGameStatus("right")
    } else {
      this.setState({
        gameStatus: "wrong",
      })
      // this.props.updateGameStatus("wrong")
    }
  }

  render() {
    let num = 1
    let pokemonStyle = (this.state.gameStatus) ? "pokemonImageColor" : "pokemonImageBlack"
    return (
      <div>
        <div className="whosThatPokemonDiv">
          <Image
            url={whosThatPokemonIMG}
            style="whosThatPokemon"
          />
          <div className="pokemonImageDiv rotate">
            <Image
              url={this.state.randomPokemon.img}
              style={pokemonStyle}
            />
          </div>
        </div>
        {
          (this.state.gameStatus) ?
            <div>
              <div className="gameStatus">
                {this.state.gameStatus}!!!<br/>
                IT'S... {this.state.randomPokemon.name}
              </div>
              <Button
                msg="End Game"
                styling="endGame"
                task="activeGame"
                handleClick={this.props.parentHandleClick}
              />
            </div>
          :
            <div className="options">
              {this.state.options.map((pokemon) => {
                return (
                  <Button
                    key={pokemon.key}
                    msg={pokemon.name}
                    task={pokemon.name}
                    styling={"option" + num++}
                    handleClick={this.handleClick}
                  />
                )
              })}
            </div>
        }
      </div>
    )
  }
}

export default Game