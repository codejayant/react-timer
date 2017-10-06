const React = require('react')

class ToggleTimer extends React.Component   {
    constructor(props)  {
        super(props)
        this.toggletimer = this.toggletimer.bind(this)
    }

    toggletimer(event) {
        return this.props.toggletimer(this.props.time)
    }

    render()  {
      return <button
        type="button"
        className='btn-default btn'
        onClick={this.toggletimer}>
    }
}