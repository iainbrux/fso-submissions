import React, {useState} from 'react'

const Heading = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Display = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0)

  return (
    <div>
      <Heading text="give feedback" />
      <Button handleClick={() => (setGood(good + 1), setAverage(average + 1)) } text="good" />
      <Button handleClick={() => (setNeutral(neutral + 1), setAverage(average + 0)) } text="neutral" />
      <Button handleClick={() => (setBad(bad + 1), setAverage(average - 1)) } text="bad" />
      <Heading text="statistics" />
      <Display text="good" value={good}/>
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={good + neutral + bad} />
      <Display text="average" value={average / (good + neutral + bad) || 0} />
      <Display text="positive" value={((good / (good + neutral + bad)) * 100 || 0) + '%'}/>
    </div>
  )
}

export default App