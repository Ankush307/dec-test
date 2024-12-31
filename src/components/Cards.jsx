import React from 'react';
import { CARDS_DATA_LIST } from '../utils/helper';
import { useSearchParams } from 'react-router';


const Cards = () => {
    const [params, setParams] = useSearchParams();

    const clickHandler = (heading) => {
        setParams({ name: heading.toLowerCase() });
    };

    return (
        <div className='d-flex align-items-center gap-4 justify-content-center h-screen  flex-column flex-xl-row gap-3 pb-5 pt-lg-0 pt-3 px-4'>
            {CARDS_DATA_LIST.map((obj, i) => (
                <div key={i} onClick={() => clickHandler(obj.heading)} className='card p-lg-4 p-3'>
                    <img src={obj.img} alt="img" className='param-cards-img w-100' />
                    <h2 className='text-center pt-lg-4 pt-3 m-0'>
                        {obj.heading}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Cards;
