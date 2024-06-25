import { useState } from 'react';

const Player = ({name, symbol}) => {

    const [ isEditing, setIsEditing] = useState(false);

    const handleClick = () =>{
        setIsEditing((editing) => !editing);
    };

    let playerName = <span className='player-name'>{name}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        playerName = <input type="text" required value={name}></input>
        btnCaption = 'Save';
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnCaption}</button>
        </li>
    );
};

export default Player;