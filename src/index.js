import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Counter from './Counter'
import TemperatureConverter from './TemperatureConverter'

const Guis =
<div>
  <Counter/>
  <TemperatureConverter/>
</div>

ReactDOM.render(Guis, document.getElementById('root'))
