import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Submit = () => {
    const [step,setStep]=useState(1)
    const [success,setSuccess]=useState(null)
    const Step1 =()=>{
        return(
            <>
                <form method="post" action="#" enctype="multipart/form-data" novalidate="" className="box has-advanced-upload mt-5">
                <div className="box__input">
                <img src="assets/img/upload.png" alt="" className="box__icon" />
                <input type="file" name="files[]" id="file" className="box__file" data-multiple-caption="{count} files selected" multiple="" style={{display: 'none'}}/>
                <label htmlFor="file" className="text-center d-block pt-3 upload-color"><strong>Upload</strong></label>
                </div>
                <div className="box__uploading">Uploading…</div>
                <div className="box__success">Done! <a href="https://css-tricks.com/examples/DragAndDropFileUploading//?submit-on-demand" className="box__restart" role="button">Upload more?</a></div>
                <div className="box__error">Error! <span></span>. <a href="https://css-tricks.com/examples/DragAndDropFileUploading//?submit-on-demand" className="box__restart" role="button">Try again!</a></div>
                <input type="hidden" name="ajax" value="1"/>
                </form>
                <div className="text-center mt-5 d-none">
                <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"> Upload</button>
                <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"> Take a Photo</button>
                </div>

                <div className="text-center mt-5 mb-5">
                    <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2" onClick={(e)=>setStep(2)}> Next</button>
                </div>
            </>
        )
    }
    const Step2=()=>{
        return(
            <>
            <form className="mt-5">
                    <div className="form-group row">
                        <label htmlFor="staticAmount" className="col-sm-4 col-form-label">Amount Spent:</label>
                        <div className="col-sm-8">
                        <input type="text"  className="form-control" id="staticAmount" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticDate" className="col-sm-4 col-form-label">Date of Purchase:</label>
                        <div className="col-sm-8">
                        <input type="text"  className="form-control" id="staticDate" />
                        </div>
                    </div>
                    <div className="text-center my-5">
                        <button className="btn btn-brown  signup-btn py-1 mx-2 my-2" onClick={submitHandler} > Submit</button>
                    </div>
                </form>
            </>
        )
    }
    const SuccessOrFail=()=>{
        if (success===true){
            return(
                <div className="mt-5">
                    <h2 className="text-center mb-3 text-red" >Success</h2>
                    <h4 className="text-center ">Good luck!</h4>
                    <h4 className="text-center mb-5">Look out for your name on the Daily Winner page!</h4>
                    <div className="text-center mt-5">
                    <Link to="/">
                    <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"> Back to Home</button>
                    </Link>
                    <Link to="/buy-to-join">
                    <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"><img src="assets/img/step1.png" alt="" className="button-icon"/> Buy to Join</button>
                    </Link>
                    </div>
                </div>
            )
        }else if (success===false){
            return(
                <div className="mt-5">
                    <h2 className="text-center mb-3" >Sorry</h2>
                    <h4 className="text-center mb-5">Yoru receipt was not submitted, please try again!</h4>
                    <div className="text-center mt-5">
                    <button onClick={resetHandler} type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"><img src="assets/img/step2.png" alt="" className="button-icon"/> Submit Receipt</button>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        setStep(0)
        setSuccess(false)
    }
    const resetHandler=(e)=>{
        e.preventDefault()
        setStep(1)
        setSuccess(null)
    }
    return (
        <>
        <section className="body-wapper pb-5">
            <div className="container">
                <div className=" yeo-signup font-weight-bold text-center text-sm-left px-5">
                    <h2 className="text-center mb-5">Submit</h2>
                    <img src="assets/img/win.png" alt="Prize" className="img-fluid"/>
                    { step ===1 ? <Step1/>:null }
                    { step ===2 ? <Step2/>:null }
                    <SuccessOrFail/>
                </div>
            </div>
            </section>
            <img src="assets/img/Background2.png" alt="" className="yeo-girl "/>
        </>
    )
}

export default Submit
