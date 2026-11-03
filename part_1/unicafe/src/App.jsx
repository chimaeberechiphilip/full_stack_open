import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = (props) => {
  const { good, bad, neutral, average, positive, all, allClicks } = props;

  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [all, setAll] = useState(0);
  const [positive, setPositive] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleGoodClick = () => {
    const plusGood = good + 1;
    const allCall = all + 1;
    const calAverage = (plusGood * 1 + bad * -1) / allCall;
    console.log(`Ave Good: (${plusGood} * 1 + ${bad} * -1) / ${allCall}`);
    const positiveCal = (plusGood / allCall) * 100;
    setGood(plusGood);
    setAverage(calAverage);
    setAll(allCall);
    setPositive(positiveCal);
    setAllClicks(allClicks.concat("G"));
  };

  const handleNeutralClick = () => {
    const plusNeutral = neutral + 1;
    const allCall = all + 1;
    const calAverage = (bad * -1 + good * 1) / allCall;
    console.log(`Ave Neu: (${good} * 1 + ${bad} * -1) / ${allCall}`);
    const positiveCal = (good / allCall) * 100;
    setNeutral(plusNeutral);
    setAverage(calAverage);
    setAll(allCall);
    setPositive(positiveCal);
    setAllClicks(allClicks.concat("N"));
  };

  const handleBadClick = () => {
    const plusBad = bad + 1;
    const allCall = all + 1;
    const calAverage = (plusBad * -1 + good * 1) / allCall;
    console.log(`Ave Bad: (${plusBad} * -1 + ${good} * 1) / ${allCall}`);
    const positiveCal = (good / allCall) * 100;
    setBad(plusBad);
    setAverage(calAverage);
    setAll(allCall);
    setPositive(positiveCal);
    setAllClicks(allClicks.concat("B"));
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        average={average}
        positive={positive}
        all={all}
        allClicks={allClicks}
      />
    </div>
  );
};
export default App;
