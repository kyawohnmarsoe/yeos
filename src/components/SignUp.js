import React from 'react'

const SignUp = () => {
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('ok')
    }
    return (
        <>
            <section className="body-wapper">
                <div className="container">
                    <div className=" yeo-signup ">
                    <form className=" font-weight-bold " onSubmit={submitHandler}>
                        <h2 className="text-center mb-5">Sign Up</h2>
                        <div className="form-group row">
                            <label htmlFor="staticName" className="col-sm-4 col-form-label">Name as per NRIC</label>
                            <div className="col-sm-8">
                            <input type="text"  className="form-control" id="staticName" />
                            </div>
                        </div>
                        <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input type="text"  className="form-control" id="staticEmail" />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" id="inputPassword"/>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label  className="col-sm-12 col-form-label"> 
                            <small>
                            By participating in this Promotion, I hereby agree and accept the following <a href="terms-and-conditions.html">PROMOTION T&C</a> , <a href="terms-of-use.html">TERMS OF USE</a> , <a href="privacy-policy.html">PRIVACY POLICY</a> AND <a href="#">COOKIE POLICY</a>.
                        
                            </small>
                        </label>
                        </div>
                        <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            <small>I Agree To Receive Any Future Invites, Vouchers And Promotions From YHS (Singapore) Pte Ltd  
                            And Partners.</small>
                        </label>
                        </div>
                        <div className="form-group row text-center ">
                        <button type="submit" className="btn btn-brown m-auto signup-btn py-1">Sign Up</button>
                        </div>
                    </form>
                    </div>
                    
                </div>
                </section>
                <img src="assets/img/Group17.png" alt="" className="yeo-girl "/>
        </>
    )
}

export default SignUp
