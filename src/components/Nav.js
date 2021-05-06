import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
              <section className="yeo-upload-wapper d-none d-sm-block">
                <div className="container">
                <div className="yeo-upload">  
                    <img src="assets/img/submit-con.png" alt="" className="submit-icon"/>
                    <img src="assets/img/step2.png" alt="" className="upload-icon"/>
                    <span className="upload-text">Submit Receipt</span>
                </div>
            </div>
            </section>

            <section className="yeo-navbar d-none d-sm-block">
            <div className="bg-brown">
                <div className="container">
                <Link to="/"> <img src="assets/img/logo.png" alt="Logo" className="yeo-logo"/></Link>
                <div className="float-right py-2">
                    <div className="btn btn-outline-white" >Login</div>
                    <Link to="/signup"> <div className="btn btn-outline-white" >Sign Up</div> </Link> 
                </div>
                <div className="clearfix"></div>
                </div>
            </div>
            
            <div className="sub-navbar ">
                <div className="container">
                <ul className="float-right">
                <li ><Link to="/how-to-join" > How to Join?</Link></li>
                <li><Link to="/buy-to-join"> Buy to Join </Link></li>
                <li><Link to="/daily-winner"> Daily Winner</Link></li>
                <li><Link to="/terms-and-conditions"> Terms & Conditions</Link></li>
                <li><Link to="/contact-us"> Contact Us</Link></li>
                
            </ul>
            <div className="clearfix"></div>
            </div>
            </div>
            </section>

            <section className="yeo-navbar-mobile d-block d-sm-none">
                <div className="bg-brown">
                <div className="container">
                    <div className="d-flex justify-content-between">
                    <div>
                        <Link to="/" data-direction='left' data-toggle="modal" data-target="#exampleModal"> <img src="assets/img/menu.png" alt="Logo" className="yeo-menu"/></Link>
                    </div>
                    <div className="m-auto"> <Link to="/"> <img src="assets/img/logo.png" alt="Logo" className="yeo-logo"/></Link> </div>
                    <div>
                        <Link to="/"> <img src="assets/img/file-upload.png" alt="Logo" className="yeo-menu"/></Link>
                    </div>
                    <div>
                </div>
                </div>
                </div>
                </div>
            </section>
            <div className="modal " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ul >
                    <li><Link to="/how-to-join"> How to Join?</Link></li>
                    <li><Link to="/buy-to-join"> Buy to Join </Link></li>
                    <li><Link to="/daily-winner"> Daily Winner</Link></li>
                    <li><Link to="/terms-and-conditions"> Terms & Conditions</Link></li>
                    <li><Link to="/contact-us"> Contact Us</Link></li>
                    <li><Link to="/signup"> Sign Up</Link></li>
                    <li><Link to="/"> Log In</Link></li>
                    
                </ul>
                </div>
                
                </div>
            </div>
            </div>
        </>
    )
}

export default Nav
