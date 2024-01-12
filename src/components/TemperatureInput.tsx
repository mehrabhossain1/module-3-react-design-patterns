import React, { useState } from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}

const TemperatureInput = (props) => {
  const [temp, setTemp] = useState({ temperature: '' })

  const handleChange = (e) => {
    setTemp({ temperature: e.target.value })
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]} :</legend>
      <input value={temp.temperature} onChange={handleChange} />
    </fieldset>
  )
}

export default TemperatureInput
