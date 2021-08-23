import React from 'react';
import 'assets/css/Service.css';
import ImgService from 'assets/images/img-adventure/card-3.JPG';
import {saveAs} from 'file-saver';

export default function Service() {
  const saveFilePahawang = () => {
    saveAs(
      "https://drive.google.com/file/d/1zTmsYvB-KI9JjY11Qcqf81t0-yw6dpH0/view?usp=sharing",
      "1 Day Pahawang ( New Normal 2021 ).pdf"
    );
  };

  const saveFileTegalmas = () => {
    saveAs(
      "https://drive.google.com/file/d/1o8YCVJLjynciuhz26XpZIO0S2aefxobC/view?usp=sharing",
      "1 Day Tegal Mas ( New Normal KTP ).pdf"
    )
  }
  return (
    <section id="service" className="h-100 w-100" >
        <div className="content-4-4 main container-xxl mx-auto position-relative">
          {/* Wrapper-title */}
          <div className="text-center content-section">
            <h1 className="text-title">Service</h1>
            <p className="caption-description">
              Kamu bebas tentukan, kemana akan berlibur !
            </p>
          </div>
          {/* End Wrapper-title */}

          {/* Wrapper-card-layanan */}
          <div className="row d-flex justify-content-lg-between justify-content-center gap-lg-0 gap-5">
            {/* Img-Layanan */}
            <div className="items col-lg-4 col-12">
              <div className="h-100 text-lg-start text-center">
                <img className="mx-lg-0 mx-auto"
                  src={ImgService} />
              </div>
            </div>
            {/* End Img-Layanan */}

            {/* card-OpenTrip */}
            <div className="items col-lg-4 col-12">
              <div className="h-100 text-lg-start text-center">
                <img className="mx-lg-0 mx-auto"
                  src="https://tinyurl.com/yk62flek" />
                <h5 className="caption-title">Tegalmas Trip</h5>
                <p className="leading-relaxed text-sm mb-6 caption-text">
                  Berlibur, dengan pribadi baru,<br />
                  dan Dapatkan kesan pertama.
                </p>
                <button className="btn btn-learn-more text-white" onClick={saveFileTegalmas}>Cari tahu</button>
              </div>
            </div>
            {/* End card-OpenTrip */}

            {/* Card-PrivateTrip */}
            <div className="items col-lg-4 col-12">
              <div className="h-100 text-lg-start text-center">
                <img className="mx-lg-0 mx-auto"
                  src="https://tinyurl.com/yk62flek" />
                <h5 className="caption-title">Pahawang Trip</h5>
                <p className="leading-relaxed text-sm mb-6 caption-text">
                  Eksekusi Rencana Berlibur mu<br />
                  dan Buatlah sejarah bersama kami.
                </p>
                <button className="btn btn-learn-more text-white" onClick={saveFilePahawang}>Cari tahu</button>
              </div>
            </div>
            {/* Card-PrivateTrip */}
          </div>
          {/* End Wrapper-card-layanan */}
        </div>
        {/* End Container */}
      </section>
  )
}
