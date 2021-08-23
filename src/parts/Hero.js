import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Brand from 'assets/images/img-location/logo.png';
import 'assets/css/Hero.css';

export default function Hero() {
  return (
    <section className="h-100 w-100">
      <div className="header-6-3 container-xl mx-auto p-0">
        {/* navbar */}
        <nav className="main-nav navbar navbar-expand-lg navbar-light bg-body">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={Brand}/>
          </a>
          
          {/* togler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* End togler */}

            {/* wrapper-navlink */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link px-md-3" href="#benefit">Benefit</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-3" href="#ourAdventure">Our Adventure</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-3" href="#service">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-3" href="#location">Location</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-3" href="#contact">Contact</a>
                </li>
              </ul> 
            </div>
            {/* End Wrapper navlink */}
          </nav>
          {/* End navbar */}

          {/* Copywriting */}
          <div className="main mx-auto  flex-lg-row flex-column">
            <div className=" left-col flex-lg-grow-0 align-items-lg-start text-lg-start">
              <h1 className="title-font">
                Maximize your camping<br/> 
                experience with us
              </h1>
              <p className="caption-font">
                Kami lahir karena ingin anda bahagia.<br/>
                Kami bantu siapa pun untuk membuat nyata rencana liburan impian nya.
              </p>
              <div className="d-flex">
                <Link to="/formOrder" className="btn btn-register btn-fill text-white">Daftar</Link>
              </div>
            </div>
          </div>
          {/* End Copywriting */}
      </div>
    </section>
  )
}
