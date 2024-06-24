import { useState } from "react";

export default function App() {
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = () => {
    setShowWarning(!showWarning);
  };

  return (
    <div>
      {showWarning ? (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleClick}>Proceed</button>
        </div>
      ) : (
        <button onClick={handleClick}>Delete</button>
      )}
    </div>
  );
}
