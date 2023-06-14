import React, { useState } from 'react';

const CounterFunction = () => {
    const [Count, handleUpdate] = useState({number: 0});
   
    
    return (
        <div>
            <h1>Counter: {(Count.number)}</h1>
            <hr></hr>
            <button onClick={() =>handleUpdate({number:Count.number +1})}>Increase</button>
            <button onClick={() =>handleUpdate({number:Count.number -1})}>Decrease</button>
        </div>
    );
}

export default CounterFunction;
