import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="yeo-footer-wapper">
            <div className="yeo-footer bg-brown ">
                <div className="container">
                <div className="d-sm-flex justify-content-between">
                    <div className="d-none d-sm-block">
                    Copyright © 2019. Yeo Hiap Seng Singapore Pte Ltd. All Rights Reserved.
                    </div>
                    <div>
                    <a href="/"><img src="assets/img/facebook.png" alt="Social Icon" className="footer-social"/></a>
                    <a href="/"><img src="assets/img/instagram.png" alt="Social Icon" className="footer-social"/></a>
                    </div>

                    <div className="d-block d-sm-none">
                    Copyright © 2019. Yeo Hiap Seng Singapore Pte Ltd. All Rights Reserved.
                    </div>

                    <div>
                    <a href="terms-of-use.html" style={{marginRight:'10px'}}>Terms of Use</a>	
                    <a href="privacy-policy.html">Privacy Policy</a>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Footer
