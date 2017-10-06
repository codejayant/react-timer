const React = require('react')

class Reset extends React.Component {
  constructor(props)  {
    super(props)
    this.resetTimer = this.resetTimer.bind(this)
  }
  resetTimer() {
    console.log('reset timer : ' + this.props.starttime)
    return this.props.timer(this.props.starttime)
  }
  render()  {
    return <button
      type="button"
      className='btn-default btn'
      onClick={this.resetTimer}>
      Reset Time {this.props.starttime}
      </button>
    }

}

module.exports = Reset