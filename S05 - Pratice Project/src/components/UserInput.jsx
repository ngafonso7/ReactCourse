import { useState } from "react";

const INPUT_TYPE = {
  init: "initialInvestment",
  annual: "annualInvestment",
  expected: "expectedReturn",
  dur: "duration",
};

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInput = (inputType, newValue) => {
    setUserInput((prevUserInput) => {
      const newUserInput = {
        ...prevUserInput,
        [inputType]: newValue,
      };

      return newUserInput;
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleUserInput(INPUT_TYPE.init, event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleUserInput(INPUT_TYPE.annual, event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleUserInput(INPUT_TYPE.expected, event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleUserInput(INPUT_TYPE.dur, event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
