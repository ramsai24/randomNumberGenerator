// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onGenerator = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    console.log(randomNum)

    this.setState({random: randomNum})
  }

  render() {
    const {random} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>

          <button
            onClick={this.onGenerator}
            className="btn-generate"
            type="button"
          >
            Generate
          </button>
          <br />
          <p className="spanEl">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
