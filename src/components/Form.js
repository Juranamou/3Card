import {threeCardPoker} from "../functions.js"

import React, { useState } from 'react'

export default function Form() {

    const [input, setInput] = useState(0);
    const [winner, setWinner] = useState();

    function handleSubmit(e){
        e.preventDefault();
        setWinner(threeCardPoker(input));
    }

    return (
    <div className='form-wrapper'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input className='form-input' type="text" onChange={(e) => {setInput(e.target.value)}} required></input>
            <input type="submit"></input>
        </form>
        {winner && <div className='alert'>Winner is Player {winner}!</div>}
    </div>
    )
}
