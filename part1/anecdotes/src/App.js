import React, { useState } from "react";

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <p>
        {anecdote}
        <br />
        has {votes} votes
      </p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const points = new Array(6).fill(0);

  const [votes, setVotes] = useState(points);
  const [selected, setSelected] = useState(0);
  const [bestAnecdote, setBestAnecdote] = useState(
    "No anecdote has received the most votes yet. Vote for your favourite so it can take the crown!"
  );
  const [highestVoted, setHighestVoted] = useState(0);

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  /*
  This following function creates a new 'scores' array from the 'votes' array in state,
  mutates ONE SCORE ONE TIME ONLY (at the index of the current anecdote), 
  and then sets the sate of 'votes' to the 'scores' array.
  This is all accomplished without mutating any of the original data.
  It then finds the highest number in the 'scores' array, and sets the 'highestVoted' state to the largest number found.
  Finally, it then finds the index of the highest score within the 'scores' array, then uses that index to find the anecdote in the 'anecdotes' array...
  ... allowing it to then be set in the 'bestAnecdote' state!
  */

  const voteForAnecdote = () => {
    const scores = [...votes];
    scores[selected] += 1;
    setVotes(scores);

    const isHighestVoted = Math.max(...scores);
    setHighestVoted(isHighestVoted);

    const isBestAnecdote = scores.indexOf(isHighestVoted);
    setBestAnecdote(anecdotes[isBestAnecdote]);
  };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={() => voteForAnecdote()}>Vote</button>
      <button onClick={() => randomAnecdote()}>Next Anecdote</button>
      <Title text="Anecdote with most votes" />
      <Anecdote anecdote={bestAnecdote} votes={highestVoted} />
    </div>
  );
};

export default App;
