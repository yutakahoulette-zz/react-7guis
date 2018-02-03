import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Counter from './Counter'
import TemperatureConverter from './TemperatureConverter'
import FlightBooker from './FlightBooker'

const Guis =
<div>
  <Counter/>
  <TemperatureConverter/>
  <FlightBooker/>
</div>

ReactDOM.render(Guis, document.getElementById('root'))
