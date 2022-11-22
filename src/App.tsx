import { useState, useEffect } from "react";
import wcsLogo from "./assets/wcs-logo.png";
import { CHALLENGES } from "./data";
import "./App.css";
import { SolutionValidator } from "./SolutionValidator";

interface SolvedObject {
  [id: string]: boolean;
}

function App() {
  // retrieve solved object's initial state from local storage
  let initialSolved: SolvedObject = {};
  CHALLENGES.forEach(({ id }) => {
    initialSolved[id] = Boolean(localStorage.getItem(id));
  });
  // define the solved object as a component state
  let [solved, setSolved] = useState(initialSolved);

  // log the ids of all the challenges, these are used to index
  // the solved object above
  useEffect(() => {
    console.table(solved, ["challenge", "is it solved?"]);
  }, []);

  // a thunk to calculate number of challenges completed and
  // remaining
  const numChallengesTotal = () => Object.values(solved).length;
  const numChallengesCompleted = () =>
    Object.values(solved).filter(Boolean).length;
  const numChallengesRemaining = () =>
    numChallengesTotal() - numChallengesCompleted();

  // a utility function to change the solved object state and save
  // that in local storage
  function utilSetSolved(id: string, value: boolean) {
    if (Object.prototype.hasOwnProperty.call(solved, id)) {
      setSolved((prevSolved) => {
        prevSolved[id] = value;
        return prevSolved;
      });
      localStorage.setItem(id, value === true ? "1" : "");
    } else console.error(`Solved object was accessed with invalid id ${id}`);
  }

  // the return (render) of the component
  return (
    <div className="App">
      <div>
        <a href="https://www.wildcodeschool.com/en-GB" target="_blank">
          <img src={wcsLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Security Challenges</h1>
      <code>
        ... not for the faint of heart (<div
          style={{display: 'inline-block'}}>
        {numChallengesRemaining()} of{" "}
        {numChallengesTotal()} remaining<br />
        <progress value={numChallengesCompleted()/numChallengesTotal()} /></div>)
      </code>

      {CHALLENGES.map(({ id, name, url, solution, level, notice }) => (
        <div key={id} className="card">
          <h2>
            <a href={url} target="_blank">
              {name}
            </a>{" "}
            (level {level >= 4 ? "IV" : Array(level).fill("I")})
          </h2>
          <p>
            <em>{notice}</em>
          </p>
          <p className="link">
            <a href={url}>{url}</a>
          </p>
          <SolutionValidator
            solved={solved[id]}
            attemptAnswer={(answer: string) => {
              utilSetSolved(id, answer === solution);
              return answer === solution;
            }}
          />
        </div>
      ))}

      <p className="read-the-docs">Copyrights&#169; are wasted 🍺🍻</p>
    </div>
  );
}

export default App;
