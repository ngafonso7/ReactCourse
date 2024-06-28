import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [nameDefined, setNameDefined] = useState(false);

  const handleChange = (event) => {
    setNameDefined(false);
    setPlayerName(event.target.value);
  };

  const handleClick = () => {
    setNameDefined(true);
  };

  return (
    <section id="player">
      {/* <h2>Welcome {`${nameDefined ? playerName : "unknown entity"}`}</h2> */}
      <h2>Welcome {nameDefined ? playerName : "unknown entity"}</h2>
      <p>
        <input onChange={handleChange} value={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
