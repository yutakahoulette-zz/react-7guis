import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Counter from './Counter'
import TemperatureConverter from './TemperatureConverter'
import FlightBooker from './FlightBooker'
import Timer from './Timer'

const Guis =
  <div className='mw7 pa3 sans-serif center'>
    <h1>React 7GUIs</h1>
    <Counter />
    <TemperatureConverter />
    <FlightBooker />
    <Timer />
  </div>

ReactDOM.render(Guis, document.getElementById('root'))
