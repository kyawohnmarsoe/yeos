import React from 'react'


const HowToJoin = () => {
    return (
        <>
            <section className="body-wapper">
                <div className="container">
                    <div className=" yeo-signup "> 
                    <div className=" font-weight-bold ">
                        <h2 className="text-center mb-sm-5 mb-4">How to Join?</h2>
                        <img src="assets/img/win.png" alt="Prize" className="img-fluid"/>

                        <div className="row py-3 " style={{fontSize: '13px'}}>
                            <div className="col-sm-4 "> 
                                <div className="step-background text-center m-auto">
                                <div className="step-center">
                                    <img src="assets/img/step1.png" alt="Step1" className="step-icon"/>
                                    <div className="pt-1">Buy to Join </div>
                                </div>
                                </div>
                                <div className="m-auto text-center py-2">Buy Yeo’s Product</div>
                            </div>
                            <div className="col-sm-4 "> 
                          
                            <div className="step-background text-center m-auto">
                                <div className="step-center">
                                    <img src="assets/img/step2.png" alt="Step1" className="step-icon"/>
                                    <div className="pt-1">Submit Receipt </div>
                                </div>
                            </div>
                            
                            <div className="m-auto text-center py-2">Submit the receipts</div>
                        </div>

                        <div className="col-sm-4 "> 
                            <div className="step-background text-center m-auto">
                                <div className="step-center">
                                    <img src="assets/img/step3.png" alt="Step1" className="step-icon"/>
                                    <div className="pt-1">Accummulate </div>
                                </div>
                            </div>
                            <div className="m-auto text-center py-2">Accummulate your receipts & every $5 entitle you to a chance to win</div>
                        </div>
                        </div>
                </div>
                    </div>
                    
                </div>
                </section>
                <img src="assets/img/Background2.png" alt="" className="yeo-girl "/>
        </>
    )
}

export default HowToJoin
