'use client';

import React, { useState } from 'react'

function Counter({ data }) {
    const [counter, setCounter] = useState(0);
    console.log(data);

    return (
        <div>
            <h3>Fetched Data contains {data.length} items </h3>
            <p>{counter}</p>
            <button onClick={() => setCounter((prevVal) => prevVal + 1)}>Click to increase counter</button>
        </div>
    )
}

export default Counter