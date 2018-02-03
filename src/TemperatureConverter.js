import React, { Component } from 'react'

class Counter extends Component {
  state = {
    c: 5,
    f: 41
  }
  toC = (ev) => {
    const num = ev.target.value
    this.setState({
      c: Math.round((num - 32) * (5/9)),
      f: num
    })
  }
  toF = (ev) => {
    const num = ev.target.value
    this.setState({
      c: num,
      f: Math.round(num * (9/5) + 32)
    })
  }
  render() {
    return (
      <section>
        <h2>Temperature Converter</h2>
        <label>Celsius</label>
        <input value={this.state.c} onChange={this.toF} type='number' />
        <label>Farenheight</label>
        <input value={this.state.f} onChange={this.toC} type='number' />
      </section>
    )
  }
}

export default Counter
