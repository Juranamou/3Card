import React, { useState } from 'react'

export default function Form() {
    const [input, setInput] = useState(0);
    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
    }

    return (
    <div className='form-wrapper'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => {setInput(e.target.value)}} required></input>
            <input type="submit"></input>
        </form>
    </div>
    )
}
