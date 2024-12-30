import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [countdown, setCountDown] = useState(1);

    useEffect(() => {
        if (countdown < 100) {
            setTimeout(() => {
                setCountDown(prevCount => prevCount + 1);
            }, 1000);
        }
    }, [countdown]);

    return (
        <div>
            <h1 className='text-center '>CounDown</h1>
            <h2 className='text-center'>Count: {countdown}</h2>
        </div>
    );
};

export default CountDown;
