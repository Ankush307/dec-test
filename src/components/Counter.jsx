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
        <div className='bg-black py-4'>
            <h1 className='text-center text-white fw-semibold'>Use State</h1>
            <h2 className='text-center text-white'>Count: {count}</h2>
            <div className="d-flex align-items-center justify-content-center">
                <button className='py-3 px-5 rounded-3  bg-white fw-bold' onClick={incrementHandler}>Add</button>
                <button className='py-3 px-5 rounded-3 bg-white fw-bold' onClick={decrementHandler}>Subtract</button>
            </div>
        </div>
    )
}

export default Counter