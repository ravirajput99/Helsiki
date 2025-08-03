import { useState } from 'react'
import Button from './component/Button'
const Statistics = ({good,neutral,bad,all,average,positive}) => {
  if(all === 0) return <p>No feedback given</p>
  return (
  <div>
    <h1>statistics</h1>
    <p>good {good}</p><p>neutral {neutral}</p><p>bad {bad}</p>
    <p>all {all}</p><p>average {average}</p><p>positive {positive}%</p>
  </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all


  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
      </div>
    </div>
  )
}

export default App