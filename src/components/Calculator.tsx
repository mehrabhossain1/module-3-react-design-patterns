import TemperatureInput from './TemperatureInput'

const Calculator = () => {
  //   const [temp, setTemp] = useState({ temperature: '' })

  //   const handleChange = (e) => {
  //     setTemp({ temperature: e.target.value })
  //   }

  return (
    <div>
      <TemperatureInput scale='c' />
      <TemperatureInput scale='f' />
    </div>
  )
}

export default Calculator
