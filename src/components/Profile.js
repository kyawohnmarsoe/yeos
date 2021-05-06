import React from 'react'

const Profile = () => {
    return (
        <>
            <section className="body-wapper pb-5">
                <div className="container">
                    <div className=" yeo-signup font-weight-bold text-center text-sm-left px-5">
                        <h2 className="text-center mb-5">Profile</h2>
                        <div className="form-group row">
                            <label htmlFor="staticName" className="col-sm-6 col-form-label">Accumulated Receipts value:  $</label>
                            <div className="col-sm-6">
                                <span className="no-of-chance">34</span>
                            </div>
                        </div>
                        <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-6 col-form-label">Number of Lucky draw chances: </label>
                        <div className="col-sm-6">
                        <span className="no-of-chance ">34</span>
                        </div>
                        </div>
                    
                    
                    
                        <div className="text-center my-5">
                        <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"><img src="assets/img/step2.png" alt="" className="button-icon"/> Submit Receipt</button>
                        <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"><img src="assets/img/step1.png" alt="" className="button-icon"/> Buy to Join</button>
                        </div>
                
                    </div>
                    
                </div>
                </section>
                <img src="assets/img/Background2.png" alt="" className="yeo-girl "/>
        </>
    )
}

export default Profile
