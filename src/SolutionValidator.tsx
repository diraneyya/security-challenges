import { useState } from "react";

export const SolutionValidator = ({ solved, attemptAnswer }) => {
  let [answer, setAnswer] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder={solved ? "You already solved this" : "Type answer here" }
        value={solved ? '' : answer}
        onChange={(e) => { setAnswer(e.target.value) }}
      />
      {solved || attemptAnswer(answer) ? " ✅" : " ❌"}
    </>
  );
};
