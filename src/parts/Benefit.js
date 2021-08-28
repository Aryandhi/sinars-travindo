import React from 'react';
import 'assets/css/Benefit.css';

export default function Benefit() {
  return (
    <section className="h-100 w-100 bg-white">
      <div className="content-2-1 container-xxl mx-auto p-0  position-relative">
      
        <div id="benefit" className="text-center title-text">
          <h1 className="text-title">Benefit</h1>
          <h5 className="text-caption">Nikmati berbagai macam fasilitas tanpa memerlukan biaya tambahan</h5>
        </div>
      
        <div className="grid-padding text-center">
          <div className="row">
            <div className="col-lg-4 column">
            <div className="icon">
              <img src="https://tinyurl.com/yeerhgax"
                alt="" />
            </div>
            <h3 className="icon-title">Best price,<br/>no hidden fees</h3>
            <p className="icon-caption">
              Liburan,<br />
              Tanpa Khawatir Biaya
            </p>
          </div>

          <div className="col-lg-4 column">
            <div className="icon">
              <img src="https://tinyurl.com/ygr3tr2q" alt="" />
            </div>

            <h3 className="icon-title">Experience and Trustworhtiness</h3>
              <p className="icon-caption">
                Memastikan kamu nyaman,<br />
                agar come back liburan lagi
              </p>
          </div>

          <div className="col-lg-4 column">
            <div className="icon">
              <img src="https://tinyurl.com/yeq8s976" alt="" />
            </div>
            
            <h3 className="icon-title">Friendly and Qualitified stuff</h3>
              <p className="icon-caption">
                Ramah-Tamah<br />
                Bersama-sama
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
