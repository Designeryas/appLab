import React, { useState } from "react";
import './navbar.scss';
import logo from '../../assets/images/AppLab.png';


const Navbar = ()=> {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return ( 
        <nav id="menu" className="navbar navbar-expand-lg navbar-light mt-1 mt-sm-3">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="120"/>
                </a>
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>                
                {/* <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup"> */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Key Features</a>
                        <a className="nav-link" href="#">Pricing</a>                        
                        <a className="nav-link" href="#">Testiminal</a>                        
                        <a className="nav-link" href="#">FAQ</a>                        
                        <a className="nav-link cta" href="#">Try for free</a>                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;