const React = require('react')

class Button extends React.Component {
    constructor(props) {
      super(props)
      this.startTimer = this.startTimer.bind(this)
    }
    startTimer(event) {
        this.props.setStartTime(this.props.time)
      return this.props.startTimer(this.props.time)
    }
    render() {
      return <button
        type="button"
        className='btn-default btn'
        onClick={this.startTimer}>
        {
          // onClick={()=>{this.props.startTimer(this.props.time)}}>
        }
        {this.props.time} seconds
      </button>
    }
}

module.exports = Button