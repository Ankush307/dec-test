import React from 'react'

const Product = () => {
    return (
        <div className="h-screen py-5 bg-Bluish-purple d-flex justify-content-center align-items-center">
            <div className="custom-container">
                <div className="d-flex flex-column flex-xl-row gap-3">
                    <div className="product-description">
                        <h1 className="text-white Product-heading">Product</h1>
                        <p className="m-0 text-white description"> Due to the confusing nature of tax, the lack of awareness of the tax deduction system and the complicated tax refund process, we have experienced exceptional demand from the public for our service. From release in 2015, our original tax product has achieved 60x growth, bringing in over £5m revenue in 2022.</p>
                        <p className="mt-2 m-0 text-white description"> With over 8 years of industry experience, we have listened to our clients to evolve our app into a whole-of-market product that will also meet the needs of the tax return market as well as the tax refund market. The App is packed with all the features users need to meet the requirements of the upcoming switch to Making Tax Digital.</p>
                        <p className="mt-2 m-0 text-white description">Once we establish the ourself in the UK, we plan to expand intoother territories to take advantage of the £500 billion globalmarket</p>
                        <p className="mt-2 m-0 text-white description">We have highlighted some of our key features that will be thecornerstone of our product launch in April 23.</p>
                    </div>
                    <div className="d-flex grid-container justify-content-center align-items-center w-100 h-100">
                        <div className="d-grid grid-box h-100">
                            <div className="grid-content-1 d-flex">
                                <img className="card-small-img" src='/assets/images/png/card-img1.png' alt="products-img" />
                                <img className="card-large-img" src='/assets/images/png/card-img2.png' alt="products-img" />
                            </div>
                            <div className="grid-content-2 d-flex">
                                <img className="card-small-img" src='/assets/images/png/card-img3.png' alt="GridThree" />
                                <img className="card-large-img" src='/assets/images/png/card-img4.png' alt="GridFour" />
                            </div>
                            <div className="grid-content-3 d-flex">
                                <img className="card-large-img" src='/assets/images/png/card-img5.png' alt="GridOne" />
                                <img className="card-small-img" src='/assets/images/png/card-img6.png' alt="GridTwo" />
                            </div>
                            <div className="grid-content-4 d-flex">
                                <img className="card-large-img" src='/assets/images/png/card-img7.png' alt="GridThree" />
                                <img className="card-small-img" src='/assets/images/png/card-img8.png' alt="GridFour" />
                            </div>
                            <div className="grid-content-5 d-flex">
                                <img className="card-small-img" src='/assets/images/png/card-img9.png' alt="GridOne" />
                                <img className="card-large-img" src='/assets/images/png/card-img10.png' alt="GridTwo" />
                            </div>
                            <div className="grid-content-6 d-flex">
                                <img className="card-small-img" src='/assets/images/png/card-img11.png' alt="GridThree" />
                                <img className="card-large-img" src='/assets/images/png/card-img12.png' alt="GridFour" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product