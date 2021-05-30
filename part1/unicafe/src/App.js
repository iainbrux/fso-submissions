import React, { useState } from "react";

const Heading = (props) => {
  return <h1>{props.text}</h1>;
};

const Statistic = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = ({ good, bad, neutral, average }) => {
  if (good > 0 || bad > 0 || neutral > 0 || average > 0) {
    return (
      <>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={good + neutral + bad} />
        <Statistic text="average" value={average / (good + neutral + bad) || 0} />
        <Statistic
          text="positive"
          value={((good / (good + neutral + bad)) * 100 || 0) + "%"}
        />
      </>
    );
  }
  return (
    <p>No feedback given</p>
  )
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <div>
      <Heading text="give feedback" />
      <Button
        handleClick={() => (setGood(good + 1), setAverage(average + 1))}
        text="good"
      />
      <Button
        handleClick={() => (setNeutral(neutral + 1), setAverage(average + 0))}
        text="neutral"
      />
      <Button
        handleClick={() => (setBad(bad + 1), setAverage(average - 1))}
        text="bad"
      />
      <Heading text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} average={average} />
    </div>
  );
};

export default App;
