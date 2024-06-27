import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

export const INPUT_TYPE = {
  init: "initialInvestment",
  annual: "annualInvestment",
  expected: "expectedReturn",
  dur: "duration",
};

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0 && userInput.initialInvestment > 0 && userInput.expectedReturn > 0;

  const handleUserInput = (inputType, newValue) => {
    setUserInput((prevUserInput) => {
      const newUserInput = {
        ...prevUserInput,
        [inputType]: +newValue,
      };

      return newUserInput;
    });
  };

  return (
    <main>
      <Header/>
      <UserInput inputValues={userInput} onChange={handleUserInput}/>
      {inputIsValid && (<Results input={userInput}/>)}
      {!inputIsValid && (
        <p className="center">
          Please enter values greater than zero
        </p>
      )}
    </main>
  )
}

export default App
