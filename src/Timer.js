import React, { Component } from 'react'

class Timer extends Component {
  state = {
    duration: 30,
    running: false,
    hitLimit: false,
    elapsed: 0,
    pausedElapsed: 0
  }

  setDuration = (ev) => {
    const val = ev.target.value
    const elapsed = this.state.elapsed
    const duration = Number(elapsed) >= Number(val)
      ? elapsed
      : val
    this.setState({ duration: Math.round(Number(duration)) })
    if (this.state.hitLimit && (elapsed <= this.state.duration)) {
      this.setState({
        hitLimit: false,
        pausedElapsed: elapsed
      })
      this.start()
    }
  }

  startStop = () => {
    if(this.state.running) {
      this.stop()
    } else {
      this.start()
    }
  }

  start = () => {
    const startTime = new Date()
    const tick = () => {
      window.setTimeout(() => {
        if(this.state.running && (this.state.elapsed <= this.state.duration)) {
          this.setState({
            elapsed: this.state.pausedElapsed + (new Date() - startTime) / 1000
          })
          tick()
        }  else {
          this.setState({
            running: false,
            hitLimit: true
          })
        }
      }, 100)
    }
    this.setState({ running: true })
    tick()
  }

  stop = () => {
    this.setState({
      running: false,
      pausedElapsed: this.state.elapsed
    })
  }

  reset = () => {
    this.setState({
      running: false,
      pausedElapsed: 0,
      elapsed: 0
    })
  }

  percentElapsed = () => (this.state.elapsed / this.state.duration) * 100

  render () {
    return (
      <section>
        <h2>Timer</h2>
        <p>{this.state.duration} second timer</p>
        <div className='progressBar'>
          <div className='progressBar-inner' style={
            {width: `${this.percentElapsed()}%` }
          }></div>
        </div>
        <p>{Math.round(this.state.elapsed)} seconds elapsed</p>
        <div className='mt3'>
          <input type='range' 
            value={this.state.duration} 
            onChange={this.setDuration}
            step='1' min='0' max='60' />
        </div>
        <button onClick={this.startStop}>{this.state.running ? 'Stop' : 'Start'}</button>
        <button onClick={this.reset}>Reset</button>
      </section>
    )
  }
}

export default Timer
