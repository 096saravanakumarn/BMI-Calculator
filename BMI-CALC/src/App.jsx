
import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmistatus, setBmiStatus] = useState("")
  const [errorMessage, seterrorMessage] = useState("")
  const CalculateBmi = () => {
    const validHeight = /^\d+$/.test(height)
    const validWeight = /^\d+$/.test(weight)
    if (validHeight && validWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2))
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight")
      }
      else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight")
      }
      else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight")
      }
      else {
        setBmiStatus("Obese")
      }
      seterrorMessage("")
    }
    else {
      setBmi(null)
      setBmiStatus("")
      seterrorMessage(" Please enter a valid numerical values for height and weight")
    }
  }
  const HandelKeyDown = (e) => {
    if (e.key=="Enter") {
      CalculateBmi();
    }
  }
  const clearAll = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmiStatus("")
  }
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI  CALCULATOR</h1>
          <p className='error'>
            {errorMessage}</p>
            <div className="input-container">
              <label htmlFor="height">Height (cm)</label>
            <input type="text" id="height" value={height} onChange={(e) => {
              setHeight(e.target.value)
            }} />
            </div>
            <div className="input-container">
              <label htmlFor="weight">Weight (km)</label>
            <input type="text" id="weight" value={weight} onChange={(e) => {
              setWeight(e.target.value)
            }} onKeyDown={HandelKeyDown}/>
            </div>
          <button onClick={CalculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi != null && (<div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status:{bmistatus}</p>
          </div>)}
          </div>
        
     </div>
    </>
  )
}

export default App
