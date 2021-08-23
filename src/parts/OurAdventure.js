import React from 'react';
import 'assets/css/OurAdventure.css';
import Card1 from 'assets/images/img-adventure/card-1.JPG';
import Card2 from 'assets/images/img-adventure/card-2.JPG';
import Card3 from 'assets/images/img-adventure/card-3.JPG';

export default function OurAdventure() {
  return (
    <section id="ourAdventure"className="h-100 w-100">
        <div className="content-7-4">
          {/*title*/}
          <div
            className="container-xxl mx-auto main-top d-flex flex-md-row flex-column justify-content-between align-items-lg-end align-items-start gap-md-0 gap-4">
            <h2 className="title-text">Our Adventure</h2>
          </div>
          {/* Container-card */}
          <div id="owl-content-7-4" className="container-xxl mx-auto main-carousel owl-carousel owl-theme">
            {/* Card-testi-1 */}
            <div className="item">
              <img id="1" className="slide-img"
                src={Card1}
                alt="card1" />
              <a className="card-testi" href="">
                <div className="card-item position-relative">
                  <h3 className="slide-title">Pahawang Island</h3>
                  <div className="d-flex justify-content-between">
                    <p className="slide-caption">Relax, dan kembali produktif</p>
                  </div>
                </div>
              </a>
            </div>
            {/* End Card-testi-1 */}

            {/* Card-testi-2 */}
            <div className="item">
              <img id="2" className="slide-img"
                src={Card2}
                alt="Card2" />
              <a className="card-testi" href="">
                <div className="card-item position-relative">
                  <h3 className="slide-title">Tegal Mas Island</h3>
                  <div className="d-flex justify-content-between">
                    <p className="slide-caption">Bebas Expresikan dirimu !</p>
                  </div>
                </div>
              </a>
            </div>
            {/* End Card-testi-2 */}

            {/* Card-testi-3 */}
            <div className="item">
              <img id="3" className="slide-img"
                src={Card3}
                alt="card3" />
              <a className="card-testi" href="">
                <div className="card-item position-relative">
                  <h3 className="slide-title">Pahawang Island</h3>
                  <div className="d-flex justify-content-between">
                    <p className="slide-caption">Bertemu teman baru, Jadi Pribadi baru</p>
                  </div>
                </div>
              </a>
            </div>
            {/* End Card-testi-3 */}
          </div>
          {/* End Container Card */}
        </div>
      </section>
  )
}
