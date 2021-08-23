import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'assets/css/Form-order.css';
import wayangIsland from 'assets/images/img-formOrder/WayangIsland.jpg';
import CustomerDataService from 'services/customerService';


export default function FormOrderpage() {
  const initialCustomerState = {
    id: null,
    name: "",
    email: "",
    phone: "",
    capacity: "",
    destination: "",
    packages: "",
    departure_date: ""
  };
  const [customer, setCustomer] = useState(initialCustomerState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const saveCustomer= () => {
    var data = {
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      capacity: customer.capacity,
      destination: customer.destination,
      packages: customer.packages,
      departure_date: customer.departure_date
    };
    CustomerDataService.create(data)
      .then(response => {
        setCustomer({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          capacity: response.data.capacity,
          destination: response.data.destination,
          packages: response.data.packages,
          departure_date: response.data.departure_date
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const newCustomer = () => {
  //   setCustomer(initialCustomerState);
  //   setSubmitted(false);
  // };
  
  return (
    <section className="h-100 w-100">
    {/* Wrapper content */}
    <div className="content-3-5 d-flex flex-column align-items-center h-100 flex-lg-row">
      {/* Img side left */}
      <div className="position-relative d-none d-lg-block h-100 width-left">
        <img className="position-absolute img-fluid centered"
          src={wayangIsland}
          alt="WayangIsland" />
      </div>
      {/* End Img side left */}

      {/* Form input side right */}
      <div className="d-flex mx-auto align-items-left justify-content-left width-right mx-lg-0">
        <div className="right mx-lg-0 mx-auto">
          {/* img version mobile responsive */}
          <div className="align-items-center justify-content-center d-lg-none d-flex">
            <img className="img-fluid"
              src={wayangIsland}
              alt="WayangIsland" />
          </div>
          {/* End img version mobile responsive */}
          
          
          {/* Label head of form*/}
          <h3 className="title-text">Place Your Order</h3>
          <p className="caption-text">
            Hallo kyai, Pastikan <br/> kamu telah membaca dan memahami<br />
            File Panduan Liburan ke <a href="https://drive.google.com/file/d/1o8YCVJLjynciuhz26XpZIO0S2aefxobC/view?usp=sharing">Tegalmas</a> dan <br/>
            File Panduan Liburan ke <a href="https://drive.google.com/file/d/1zTmsYvB-KI9JjY11Qcqf81t0-yw6dpH0/view?usp=sharing">Pahawang</a> <br/>
            Setelah Yakin, Segerakan Isi Form dan Amankan Tiket Liburanmu

          </p>
          {/* End Label head of form*/}

          {/* Form */}
          <div className="submit-form">
            {/* confirm after success create data */}
            {submitted ? (
              <div>
              <h4>Berhasil Membuat Pesanan</h4>
              <p>Langkah Selanjutnya,<br/>
                Transfer Dp sebesar 30% dan 
                Kirim Bukti transfer ke admin
              </p>
              <p>
                Bank Rakyat Indonesia (BRI)<br/>
                CV. SINAR SIGER<br/>
                0098-xx-xxxxxx-xx-x<br/>
                Informasi Lebih lanjut<br/>
                IG Official : @sinars_travindo<br/>
                Phone dan Wa : +62 821xxxxxxxx
              </p>
              <button className="btn btn-success">
                <Link to="/checkout" className="btn btn-view d-inline-flex text-white">Konfirmasi Pembayaran</Link>
              </button>
            </div>
            ) : (
            <div>
              {/* Input name */}
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  placeholder="Nama Sesuai KTP"
                  type="text"
                  className="form-control "
                  id="name"
                  required
                  value={customer.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
              {/* Input Email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="contoh@mail.com"
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  value={customer.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </div>
              {/* Input Phone */}
              <div className="form-group">
                <label htmlFor="phone">No Handphone</label>
                <input
                  placeholder="No WA Kamu"
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                  value={customer.phone}
                  onChange={handleInputChange}
                  name="phone"
                />
              </div>
              {/* Input capacity */}
              <div className="form-group">
                <label htmlFor="capacity">Kapasitas</label>
                <input
                  placeholder="Jumlah anggota kelompok"
                  type="text"
                  className="form-control"
                  id="capacity"
                  required
                  value={customer.capacity}
                  onChange={handleInputChange}
                  name="capacity"
                />
              </div>
              {/* Input destination */}
              <div className="form-group">
                <label htmlFor="destination">Tujuan</label>
                <input
                  placeholder="Pahawang atau Tegalmas"
                  type="text"
                  className="form-control"
                  id="destination"
                  required
                  value={customer.destination}
                  onChange={handleInputChange}
                  name="destination"
                />
              </div>
              {/* Input packages */}
              <div className="form-group">
                <label htmlFor="packages">Paket</label>
                <input
                  placeholder="Open Trip atau Private Trip"
                  type="text"
                  className="form-control"
                  id="packages"
                  required
                  value={customer.packages}
                  onChange={handleInputChange}
                  name="packages"
                />
              </div>
              {/* Inpur departure_date */}
              <div className="form-group">
                <label htmlFor="departure_date">Tanggal Keberangkatan</label>
                <input
                  type="date"
                  className="form-control"
                  id="departure_date"
                  required
                  value={customer.departure_date}
                  onChange={handleInputChange}
                  name="departure_date"
                />
              </div>
              <p>Note:<br/>Pastikan data kamu sudah benar</p> <hr/>
              
              <button onClick={saveCustomer} className="btn btn-fill text-white d-block w-100">
                Simpan Pesanan
              </button>
            </div>
            )}
          </div>
          {/* End Form */}

          {/* link back to menu */}
          <p className="text-center bottom-caption">
            Ingin Kenal kami lagi ?
            <Link to="/" className="green-bottom-caption">Lihat Beranda</Link>
          </p>
          {/* End link */}
        </div>
      </div>
      {/* End Form input side right */}
    </div>
    {/* End Wrapper content */}
  </section>
 )
}
