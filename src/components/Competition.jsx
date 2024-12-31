import React from 'react';
import { COMPETITION_LIST } from '../utils/helper';

const Competition = () => {
    return (
        <div className="bg-bluish-purple align-content-center h-screen py-5">
            <div className="custom-container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h1 className="text-product text-white fw-semibold product-heading">Competition</h1>
                        <p className="m-0 text-white description"> Given our best in class offering, we need to cut through by opting for penetration pricing.</p>
                        <p className="mt-sm-2 mt-2 m-0 text-white description"> This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.</p>
                        <p className="mt-sm-2 mt-2 m-0 text-white description"> The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.</p>
                        <p className="mt-sm-2 mt-2 m-0 text-white description">  As well as being the cheapest in market, our product offers everything a sole trader needs  in one place, whilst pricing innovation of zero commission rather than a commission, will  drive customers that are particularly price sensitive.</p>
                    </div>
                    <div className='col-xl-6 table-responsive d-flex bg-deep-sea-blue border-radius-xl'>
                        <div className='d-flex align-items-center justify-content-center table-y-spacing'>
                            <table className='mobile-table'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='border-top-radius text-center bg-white fw-semibold table-heading'>Rift</th>
                                        <th className='border-top-radius text-center bg-white fw-semibold table-heading'>Taxscout</th>
                                        <th className='border-top-radius text-center bg-white fw-semibold table-heading'>Coconut</th>
                                        <th className='border-top-radius  text-center bg-aqua-marine fw-semibold table-heading'>Pie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {COMPETITION_LIST.map((obj, i) => (
                                        <tr key={i}>
                                            <td className={`text-white fw-normal table-data-1 bg-transparent custom-border-b-none`}>{obj.feature}</td>
                                            <td className={`text-center ${i === 5 ? 'fees-year border-bottom-radius' : ''} bg-white table-data bg- custom-border-b-none`}>{obj.rift}</td>
                                            <td className={`text-center ${i === 5 ? 'fees-year border-bottom-radius' : ''} bg-white table-data bg- custom-border-b-none`}>{obj.taxscout}</td>
                                            <td className={`text-center ${i === 5 ? 'fees-year border-bottom-radius' : ''} bg-white table-data bg- custom-border-b-none`}>{obj.coconut}</td>
                                            <td className={`text-center bg-aqua-marine table-data custom-border-b-none ${i === 5 ? 'fees-year border-bottom-radius' : ''}`}>{obj.pie}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competition;
