import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
        <section className="body-wapper section-background" style={{position: 'relative'}}>
            <img src="assets/img/left.png" alt="Flowers" className=" yeo-flower"/>

        <div className="container">
            <div className=" yeo-signup "> 
                <div className=" font-weight-bold text-center">
                    <img src="assets/img/win.png" alt="Prize" className=" landing-win"/>
                </div>
            </div>
        </div>
        
        <div className="row py-3 two-steps" style={{fontSize: '13px'}}>
            <div className="col "> 
            <Link to="/buy-to-join">
                <div className="step-background text-center m-auto">
                <div className="step-center">
                    <img src="assets/img/step1.png" alt="Step1" className="step-icon"/>
                    <div className="pt-1">Buy to Join </div>
                </div>
                </div>
            </Link>
            </div>
            <div className="col "> 
            <Link to="/submit">
            <div className="step-background text-center m-auto">
                <div className="step-center">
                    <img src="assets/img/step2.png" alt="Step1" className="step-icon"/>
                    <div className="pt-1">Submit Receipt </div>
                </div>
            </div>
            </Link>
            
        </div>
        </div>

        <img src="assets/img/part1.png" alt="" className="yeo-girl2 d-none d-md-block"/>
        <img src="assets/img/mobile-bg1.png" alt="" className="yeo-girl2 d-block d-md-none"/>
        </section>

        <section className="body-wapper2 section-background" style={{position: 'relative'}}>
                <img src="assets/img/left-two.png" alt="Flowers" className=" yeo-flower2"/>
                <img src="assets/img/right.png" alt="Flowers" className=" yeo-flower-right"/>
                <div className="container">
                <div className=" pdrinks-wapper"> 
                    <div className=" font-weight-bold ">
                    <h4 className="text-center mb-sm-5 mb-4 section-header">
                        Yeo's Chrysanthemum Tea is Lovingly brewed fresh <br/>
                        with real Chrysanthemum flowers. Enjoy!

                    </h4>
                    <ul className="yeo-landing py-3 list-style-flower">
                        <li><img src="assets/img/right.png" alt="" className="list-flower"/> Premium Chrysanthemum - Grade A Hangbaiju flowers (chinese)</li>
                        <li><img src="assets/img/right.png" alt="" className="list-flower"/> Simple goodness - Chrysanthemum flowers (chinese) , Sugar (chinese) and Fructose (chinese)</li>
                        <li><img src="assets/img/right.png" alt="" className="list-flower"/> Cooling & refreshing</li>
                        <li><img src="assets/img/right.png" alt="" className="list-flower"/> No added preservatives, flavourings, colourings</li>
                    </ul>


            <div className="d-flex flex-wrap justify-content-between align-items-stretch py-3 logos-wapper" >
                <div><img src="assets/img/HCL.png" alt="" className="yeo-logos"/></div>
                <div><img src="assets/img/halal.png" alt="" className="yeo-logos"/></div>
                <div><img src="assets/img/veganlogo.png" alt="" className="yeo-logos"/></div>
            </div>
                    
                </div>
                </div>
                
                </div>
                
                <div className="landing-button text-center">
                <Link to="/buy-to-join">
                <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2">
                    <img src="assets/img/step1.png" alt="" className="button-icon"/> Buy to Join</button>
                </Link>
                <p style={{fontFamily: 'MarkerFelt'}}> *AC Nielsen Market Track for ASD, Jun 2019</p>
                </div>
               
                <img src="assets/img/Group18.png" alt="" className="yeo-no1 "/>
                <img src="assets/img/section1-bg.png" alt="" className="yeo-girl2 d-none d-md-block"/>
                <img src="assets/img/mobile-bg2.png" alt="" className="yeo-girl2 d-block d-md-none"/>
            
            </section>

            <section className="body-wapper2 section3-background" style={{position: 'relative',paddingBottom: '20px'}}>
                <img src="assets/img/Layer155.png" alt="Flowers" className=" yeo-flower2"/>
                <img src="assets/img/Leaf-Right.png" alt="Flowers" className=" yeo-leave-right"/>
                <div className="container">
                <div className=" pdrinks-wapper "> 
                <div className=" font-weight-bold ">
                    <h4 className="text-center mb-sm-5 mb-4 section-header">
                        Yeo's Soy bean drink is lovingly prepared fresh
                        <br/>
                        with premium whole Canadian soy beans. For your enjoyment!.

                    </h4>
                    <ul className="yeo-landing py-3">
                        <li><img src="assets/img/Layer156.png" alt="" className="list-flower"/> 100% Plant-based protein</li>
                        <li><img src="assets/img/Layer156.png" alt="" className="list-flower"/> Wholesomely simple - Soy beans (chinese) , Sugar (chinese) , Flavours (chinese)</li>
                        <li><img src="assets/img/Layer156.png" alt="" className="list-flower"/> Naturally lactose free, cholesterol free, trans fats free</li>
                        <li><img src="assets/img/Layer156.png" alt="" className="list-flower"/> No added preservatives & colourings</li>
                    </ul>

                <div className="d-flex flex-wrap justify-content-between align-items-stretch py-3 logos-wapper" >
                    <div><img src="assets/img/HCL.png" alt="" className="yeo-logos"/></div>
                    <div><img src="assets/img/halal.png" alt="" className="yeo-logos"/></div>
                    <div><img src="assets/img/veganlogo.png" alt="" className="yeo-logos"/></div>
                </div>
                    
            </div>
            </div>
            </div>

                <div className="landing-button2 text-center">
                <Link to="/buy-to-join">
                <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2 ">
                    <img src="assets/img/step1.png" alt="" className="button-icon"/> Buy to Join</button>
                </Link>
                </div>

                <img src="assets/img/SoyBeanDrink.png" alt="" className="yeo-soybean "/>
                <img src="assets/img/Group13.png" alt="" className="yeo-girl d-none d-md-block"/>
                <img src="assets/img/mobile-bg3.png" alt="" className="yeo-girl d-block d-md-none"/>
            </section>
            
        </>
    )
}

export default Home
