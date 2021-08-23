import React from 'react';
import 'assets/css/Checkout.css';
import {BrowserRouter as Router,Link} from "react-router-dom";

export default function Checkoutpage() {
  return (
    <section className="h-100 w-100">
      <div className="empty-4-1">    
        <div className="mx-auto d-flex align-items-center justify-content-center flex-column">
          <img className="img" src="https://tinyurl.com/yzf6gsc3" alt="" />                       
          <div className="text-center w-100">
            <h1 className="title-text">
              Terimakasih,<br/> Sekarang Kami siap mewujudkan Rencana Liburanmu
              </h1>
              <p className="caption-text">
                Segera Hubungi Admin Kami
                <p>Kamu dapat menyapa, dan mengirim Bukti transfer<br/>
                dengan klik tombol Nomor berikut</p>
                <p>WhatsApp: <a href="https://api.whatsapp.com/send?phone=6282269059273&text=Halo%20Mas%20Admin,%20Saya%20mau%20Konfirmasi%20Pembayaran">+62 821-xxxx-xxxx</a></p>
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-view d-inline-flex text-white">
                  <Link to="/" className="green-bottom-caption">Kembali Ke Beranda</Link>
                </button>
              </div>
              
          </div>
        </div>
    </div>
    </section>
  )
}