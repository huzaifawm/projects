import React, { Component } from 'react'
import MemeImg from './MemeImg'

class MemeGenerator extends Component {
  constructor() {
    super()

    this.state = {
      topText: "",
      bottomText: "",
      randImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.imgClick = this.imgClick.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => { 
        const {memes} = response.data
        memes.sort((a, b) => {
          return (a.height > b.height) ? 1 : -1 
        })
        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(event) {
    const { name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let meme = this.state.allMemeImgs[Math.floor(Math.random()*this.state.allMemeImgs.length)]
    this.setState({
      randImg: meme.url
    })
  }

  imgClick(imgURL) {
    this.setState({
      randImg: imgURL
    })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Random</button>
        </form>

        <div className="meme">
          <img src={this.state.randImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>

        <div className="list-memes">
          <h2>Gallary of Memes</h2>
          {this.state.allMemeImgs.map((item) => {
            let memeClass = (this.state.randImg === item.url) ? "meme-img-selected" : "meme-img"
            return (
              <MemeImg 
                key={item.id}
                memeImageURL={item.url}
                memeClass={memeClass}
                imgClick={this.imgClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default MemeGenerator