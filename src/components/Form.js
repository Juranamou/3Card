import {threeCardPoker} from "../functions.js"

import React, { useState } from 'react'

export default function Form() {

    const [input, setInput] = useState(0);
    const [winner, setWinner] = useState();

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        setWinner(threeCardPoker(input));
    }

    return (
    <div className='form-wrapper'>
        <form onSubmit={(e) => handleSubmit(e)}>
            {winner && <div>Winner is Player {winner}!</div>}
            <input type="text" onChange={(e) => {setInput(e.target.value)}} required></input>
            <input type="submit"></input>
        </form>
    </div>
    )
}
