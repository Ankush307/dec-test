import React, { useState, useEffect } from 'react';

const ReverseLoop = () => {
    const [count, setCount] = useState(9);

    useEffect(() => {
        for (let i = 9; i >= 0; i--) {
            setTimeout(() => {
                setCount(i);
                console.log(i);
            }, (9 - i) * 1000); 
        }
    }, []);

    return (
        <div>
            <h1 className='text-center py-2 fw-semibold'>Reverce Loop</h1>
            <h2 className='text-center pb-4'>Count: {count}</h2>
        </div>
    );
};

export default ReverseLoop;
