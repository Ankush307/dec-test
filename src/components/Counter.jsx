import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const decrementHandler = () => {
        setCount(count - 1);
    }
    const incrementHandler = () => {
        setCount(count + 1);
    }

    return (
        <div className='py-4'>
            <h2 className='text-center fw-bold'>Use State</h2>
            <h2 className='text-center'>Count: {count}</h2>
            <div className="d-flex align-items-center justify-content-center gap-3">
                <button className='py-3 px-5 rounded-3  bg-black text-white fw-bold' onClick={incrementHandler}>Add</button>
                <button className='py-3 px-5 rounded-3 bg-black text-white fw-bold' onClick={decrementHandler}>Subtract</button>
            </div>
        </div>
    )
}

export default Counter