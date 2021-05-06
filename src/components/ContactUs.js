import React,{useState} from 'react'
import Thankyou from './Thankyou'

const ContactUs = () => {
    const [submit,setSubmit]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        setSubmit('success')
    }
    return (
        <>
        { submit ? <Thankyou/> :
        <section className="body-wapper">
                <div className="container">
                <div className=" yeo-signup ">
                    <form className=" font-weight-bold " onSubmit={submitHandler}>
                    <h2 className="text-center mb-5">Contact Us</h2>
                    <div className="form-group row">
                        <label htmlFor="staticName" className="col-sm-4 col-form-label">Name : </label>
                        <div className="col-sm-8">
                            <input type="text"  className="form-control" id="staticName" />
                        </div>
                        </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email :</label>
                        <div className="col-sm-8">
                        <input type="text"  className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    
                    
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                        <label className="form-check-label px-2" htmlFor="exampleCheck1">
                            Enquires
                        </label>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input " id="exampleCheck2"/>
                        <label className="form-check-label px-2" htmlFor="exampleCheck2">
                            Technical issues
                        </label>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="exampleFormControlTextarea1" className="col-sm-4 col-form-label">Description :</label>
                        <div className="col-sm-8">
                    
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                    </div>
                    

                    <div className="form-group row text-center py-2">
                    <button type="submit" className="btn btn-brown m-auto signup-btn py-1">Send</button>
                    </div>
                    </form>
                </div>
                    
                </div>
            </section>
            }
            
            <img src="assets/img/Background2.png" alt="" className="yeo-girl "/>
        </>
    )
}

export default ContactUs
