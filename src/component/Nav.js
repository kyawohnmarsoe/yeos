import React from 'react'

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-gold">
                <a className="navbar-brand" href="#"><img src="../img/logo.png" alt="" className="site-logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse align-self-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <span className="nav-link active" >FOLLOW US ON</span>
                    </li>
        
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="../img/instagram.svg" alt="" className="social-icon" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="../img/facebook.svg" alt="" className="social-icon" /></a>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Nav
