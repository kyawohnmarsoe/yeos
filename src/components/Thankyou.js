import React from 'react'
import {Link} from 'react-router-dom'

const Thankyou = () => {
    return (
        <>
        <section className="body-wapper">
                <div className="container">
                <div className=" yeo-signup text-center ">
                <h2 className="mb-5">Thank You</h2>
                <h5 className="font-weight-bold pb-3"> A customer service officer will revert on your enquiries soon.</h5>
                <div className="form-group row text-center py-5">
                
                <Link to="/" className="btn btn-brown m-auto signup-btn py-1">Back to Home</Link>
               
                </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Thankyou
