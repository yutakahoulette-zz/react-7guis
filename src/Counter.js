import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }
  inc = () => this.setState({count: this.state.count + 1})
  render() {
    return (
      <section>
        <h2>Counter</h2>
        <p>{this.state.count}</p>
        <button onClick={this.inc}>Count</button>
      </section>
    )
  }
}

export default Counter
