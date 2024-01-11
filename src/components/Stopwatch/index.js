// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {secounds: 0, Minutes: 0}

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  startBtn = () => {
    this.timerID = setInterval(this.countDownStart, 1000)
  }
  // this is the start button
  stopBtn = () => {
    clearInterval(this.timerID)
  }

  resetBtn = () => {
    clearInterval(this.timerID)
    this.setState({Minutes: 0, secounds: 0})
  }

  countDownStart = () => {
    const {secounds} = this.state
    this.setState(prevState => {
      const calculateMinutes =
        secounds >= 59
          ? {secounds: 0, Minutes: prevState.Minutes + 1}
          : {secounds: prevState.secounds + 1}
      return calculateMinutes
    })
  }

  render() {
    const {secounds, Minutes} = this.state
    const changingSecounds = secounds <= 9 ? '0'.concat(secounds) : secounds
    const changingMinutes = Minutes === 0 ? '00' : Minutes
    return (
      <div className="CardContainer">
        <div className="mainContainer">
          <h1>Stopwatch</h1>
          <div className="timerContainer">
            <div className="timeTextContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="clockImage"
              />
              <p>Timer</p>
            </div>
            <p className="MinutesAndSecounds">
              {changingMinutes}:{changingSecounds}
            </p>
            <div className="ButtonContainer">
              <button
                type="button"
                onClick={this.startBtn}
                className="Buttons startBtn"
              >
                start
              </button>
              <button
                type="button"
                onClick={this.stopBtn}
                className="Buttons stopBtn"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.resetBtn}
                className="Buttons resetBtn"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
