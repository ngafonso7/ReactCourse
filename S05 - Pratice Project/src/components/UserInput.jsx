import { INPUT_TYPE } from "../App";

const UserInput = ({ inputValues, onChange }) => {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputValues.initialInvestment}
            onChange={(event) =>
                onChange(INPUT_TYPE.init, event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputValues.annualInvestment}
            onChange={(event) =>
                onChange(INPUT_TYPE.annual, event.target.value)
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
            value={inputValues.expectedReturn}
            onChange={(event) =>
                onChange(INPUT_TYPE.expected, event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={inputValues.duration}
            onChange={(event) =>
                onChange(INPUT_TYPE.dur, event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
