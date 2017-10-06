const React = require('react')
const ReactDOM = require('react-dom')
const Timer = require('./timer.jsx')
const Button = require('./button.jsx')
const Reset = require('./reset.jsx')

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      starttime: null,
      timeLeft: null, 
      timer: null
    }
    this.startTimer = this.startTimer.bind(this)
    this.setStartTime = this.setStartTime.bind(this)
    this.pausetime = this.pausetime.bind(this)
    this.resumetime = this.resumetime.bind(this)
  }
  setStartTime(starttime)  {
    return this.setState({starttime: starttime})
  }
  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
        console.log('2: Inside of setInterval')
        var timeLeft = this.state.timeLeft - 1
        if (timeLeft == 0) clearInterval(timer)
        this.setState({timeLeft: timeLeft})
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({timeLeft: timeLeft,
      timer: timer})
  }
  pausetime() {
    console.log('pausing time at time : ' + this.state.timeLeft)
    clearInterval(this.state.timer)
    return this.setState({
      timeLeft: this.state.timeLeft
    })
  }
  resumetime()  {
    console.log('resuming time from time : ' + this.state.timeLeft)
    return this.startTimer(this.state.timeLeft)
  }

  render() {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group" >
          <Button time="5" startTimer={this.startTimer} setStartTime={this.setStartTime}/>
          <Button time="10" startTimer={this.startTimer} setStartTime={this.setStartTime}/>
          <Button time="15" startTimer={this.startTimer} setStartTime={this.setStartTime}/>
        </div>
        <div>
          <button 
            type="button" 
            className='btn-default btn'
            onClick={this.pausetime}>
            PAUSE
          </button>
          <button 
            type="button" 
            className='btn-default btn'
            onClick={this.resumetime}>
            RESUME
          </button>
        </div>
        <Reset starttime={this.state.starttime} timer={this.startTimer}/>
        <Timer timeLeft={this.state.timeLeft}/>
      <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
      </div>
    )
  }
}

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
)