import { useState } from 'react';

const Player = ({name, symbol}) => {

    const [ isEditing, setIsEditing] = useState(false);

    const handleClick = () =>{
        setIsEditing(true);
    };

    return (
        <li>
            <span className="player">
                {isEditing ? (<input></input>) : (<span className='player-name'>{name}</span>)}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>Edit</button>
        </li>
    );
};

export default Player;