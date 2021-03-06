import React from 'react'
import {Link} from 'react-router-dom'
const DailyWinner = () => {
    return (
        <>
        <section className="body-wapper pb-5">
            <div className="container">
                <div className=" yeo-signup font-weight-bold text-center text-sm-left px-5">
                    <h2 className="text-center mb-5">Daily Winner</h2>
                    <h4 className="text-center text-red" >Congratulations to</h4>
                    <h4 className="text-center mb-5 text-red" > all our lucky winners!</h4>
                    
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Winner Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1.1.2021</td>
                            <td>Mark Otto</td>
                        </tr>
                        <tr>
                            <td>2.1.2021</td>
                            <td>Jacob Thornton</td>
                        </tr>
                        <tr>
                            <td>3.1.2021</td>
                            <td>Larry the Bird</td>
                        </tr>
                        </tbody>
                    </table>
                
                    <div className="text-center my-5">
                    <Link to="/buy-to-join">
                    <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"><img src="assets/img/step1.png" alt="" className="button-icon"/> Buy to Join</button>
                    </Link>
                    <Link to="/submit">
                    <button type="submit" className="btn btn-brown  signup-btn py-1 mx-2 my-2"><img src="assets/img/step2.png" alt="" className="button-icon"/> Submit Receipt</button>
                    </Link>
                    </div>
            
                </div>
                
            </div>
            </section>
            <img src="assets/img/Background2.png" alt="" className="yeo-girl "/>
        </>
    )
}

export default DailyWinner
