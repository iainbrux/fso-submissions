import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const points = new Array(6).fill(0)

  const [votes, setVotes] = useState(points)

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  /*
  This following function creates a new 'scores' array from the 'votes' array in state,
  mutates ONE SCORE ONE TIME ONLY (at the index of the current anecdote), 
  and then sets the sate of 'votes' to the 'scores' array.
  This is all accomplished without mutating any of the original data.
  Each time we invoke this function, 'scores' receives its value from the updated 'votes' state,
  allowing us to have the feeling of mutating the array, without mutating it, in a nice continuous lifecycle.
  */

  const voteForAnecdote = () => {
    const scores = [...votes]
    scores[selected] += 1;
    setVotes(scores)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => randomAnecdote()}>New anecdote</button>
      <button onClick={() => voteForAnecdote()}>Vote</button>
    </div>
  )
}

export default App