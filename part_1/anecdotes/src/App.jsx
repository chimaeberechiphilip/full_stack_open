import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.title}s</button>;
};

const Display = (props) => {
  if (
    props.displaytype === "1" &&
    props.usedArrayVoteName[props.usedArrayVoteNo] > 0
  ) {
    return (
      <div>
        {" "}
        <div>{props.usedArrayName[props.usedArrayNo]}</div>
        <div>has {props.usedArrayVoteName[props.usedArrayVoteNo]} votes</div>
      </div>
    );
  }
  if (props.displaytype === "0") {
    return (
      <div>
        {" "}
        <div>{props.usedArrayName[props.usedArrayNo]}</div>
        <div>has {props.usedArrayVoteName[props.usedArrayVoteNo]} votes</div>
      </div>
    );
  }
};

const CaptionHeader = (props) => {
  return <h1>{props.headerTitle}</h1>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [maxVoteSelected, setMaxVoteSelected] = useState(0);
  const [maxIndexSelected, setMaxIndexSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  console.log("Votes: ", votes);
  // const [votes, SetVotes] = useState({
  //   0: 0,
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  // });

  const randomSelection = () => {
    const anecdoteslength = anecdotes.length;
    const randomedNo = Math.floor(Math.random() * anecdoteslength);
    setSelected(randomedNo);
  };

  const castVote = () => {
    const updatevotes = [...votes];
    updatevotes[selected] += 1;
    console.log("updated votes: ", updatevotes);
    setVotes(updatevotes);
    const maxVotes = Math.max(...updatevotes);
    console.log("Max vote: ", maxVotes);
    const maxIndex = updatevotes.indexOf(maxVotes);
    setMaxVoteSelected(maxVotes);
    setMaxIndexSelected(maxIndex);
  };

  return (
    <div>
      <div>
        <CaptionHeader headerTitle="Ancecdote of the day" />
        <Display
          usedArrayName={anecdotes}
          usedArrayNo={selected}
          usedArrayVoteName={votes}
          usedArrayVoteNo={selected}
          displaytype="0"
        />

        <div>
          <Button onClick={castVote} title="vote" />
          <Button onClick={randomSelection} title="next anecdote" />
        </div>
        <div>
          <CaptionHeader headerTitle="Ancecdote with most votes" />
          <Display
            usedArrayName={anecdotes}
            usedArrayNo={maxIndexSelected}
            usedArrayVoteName={votes}
            usedArrayVoteNo={maxIndexSelected}
            displaytype="1"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
