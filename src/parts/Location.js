import React from 'react'

export default function Location() {
  return (
    <section id="location" className="h-100 w-100 bg-white">
      <div className="content-7-5">
        <div className="container-xxl main mx-auto row">
          {/* Left Column */}
          <div className="left-col p-xxl-0 col-lg-8 col-12 text-center justify-content-start d-flex">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.092171211084!2d105.2610970140953!3d-5.402928155488379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dbb12d3501b3%3A0x3c74354d616edaef!2sSinars%20Travindo!5e0!3m2!1sid!2sid!4v1628259851767!5m2!1sid!2sid" width="800" height="300" allowFullScreen="" loading="lazy"></iframe>
          </div>
          {/* End Left Column */}

          {/* Rigth Column */}
          <div className="right-col p-xl-0 col-lg-4 col-12 d-flex justify-content-lg-end justify-content-start my-lg-auto mb-5 mb-lg-auto">
            <div className="d-block">
              <h1 className="title-font">Location</h1>
              <p className="caption-text"> Jl. Hanoman, No.1 Jagabaya, Bandar Lampung, 35123</p>
              <p>No. Tlp : <a href="https://api.whatsapp.com/send?phone=6282269059273&text=Halo%20Mas%20Admin,%20Saya%20minta%20Info%20Biaya%20Perjalanan">+62 821-3388-3536</a></p>
              <p> Email : sinarsiger@gmail.com</p>
              <p>"Kami menyadari petualangan adalah cara Terbaik untuk Belajar."</p>
              <p>Maka, Lekas Temukan Tempat Impian Anda !</p>
            </div>
          </div>
          {/* Right Column */}
        </div>
      </div>
    </section>
  )
}
