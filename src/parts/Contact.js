import React, { useState } from 'react';
import 'assets/css/Contact.css';
import ContactDataService from 'services/contactService';

export default function Contact() {
  
  const initialContactState = {
    to: "aryandh.a.w@gmail.com",
    subject: "",
    text: ""
  };
  const [contact, setContact] = useState(initialContactState);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };
  const saveContact= () => {
    var data = {
      to: contact.to,
      subject: contact.subject,
      text: contact.text,
    };
    ContactDataService.create(data)
      .then(response => {
        setContact({
          to: response.data.to,
          subject: response.data.subject,
          text: response.data.text
        });
        setSubmitted(true);
        console.log(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMail = () => {
    setContact(initialContactState);
    setSubmitted(false);
  };

  return(
    <section id="contact" className="h-100 w-100 bg-white">
      {/* wrapper */}
      <div className="content-7-6">
        {/* Container */}
        <div className="container-xxl main mx-auto row">
          {/* Left column */}
          <div className="col-lg-6 col-12 p-xxl-0 d-flex flex-column align-items-start justify-content-center text-start mb-5 lg:mb-lg-0">
            <h1 className="title-font">Contact</h1>
            <p className="caption-text"><br/><br/><br/> Tim kami akan senang hati<br/>
              Mendengarkan, Apa yang anda butuhkan <br/> 
              dan akan membantu anda merencanakan sebuah perjalanan
            </p>
          </div>
          {/* End of left column */}
          
          {/* Right column */}
          <div className="col-lg-6 col-12 p-xxl-0">
            {/* Form */}
            <div className=" submit-form card-item d-flex flex-column ">
              {/* confirm after success sending data */}
              {submitted ? (
              <div>
                <h4>Terimakasih</h4>
                <p>Pesan Terkirim</p>
                <button className="btn btn-success" onClick={newMail}>
                  Buat Pesan baru
                </button>
              </div>
              ) : (
              <div>
                {/* Input to */}
                <div className="form-group">
                <label htmlFor="to"></label>
                <input
                  type="hidden"
                  className="form-control "
                  id="to"
                  required
                  value={contact.to}
                  onChange={handleInputChange}
                  name="to"
                />
                </div>
                {/* End of Input to */}

                {/* Input subject */}
                <div className="form-group">
                <label htmlFor="subject">Subjek</label>
                <input
                  placeholder="Subjek Email"
                  type="text"
                  className="form-control "
                  id="subject"
                  required
                  value={contact.subject}
                  onChange={handleInputChange}
                  name="subject"
                />
                </div>
                {/* End of Input subject */}

                {/* Input subject */}
                <div className="form-group">
                <label htmlFor="text">Pesan</label>
                <textarea
                  placeholder="Pesanmu sangat berguna bagi kami"
                  type="text"
                  className="form-control "
                  id="text"
                  required
                  value={contact.text}
                  onChange={handleInputChange}
                  name="text"
                />
                </div>
                {/* End of Input subject */}
                <button onClick={saveContact} type="submit" className="btn btn-send ms-auto text-white">
                  Kirim
                </button>
              </div>
              )}
            </div>
            {/* End of Form */}
          </div>
          {/* End of Right column */}
        </div>
        {/* End of Container */}
      </div>
      {/* End of wrapper */}
    </section>
  )
}