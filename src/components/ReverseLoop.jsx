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
        <div className='py-4'>
            <h2 className='text-center pb-2 fw-bold'>Reverse Loop</h2>
            <h2 className='text-center mb-0'>Count: {count}</h2>
        </div>
    );
};

export default ReverseLoop;
