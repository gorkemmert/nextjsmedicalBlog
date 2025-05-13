import React from "react";

const ContactForm2 = () => {
  return (
    <form action="https://formsubmit.co/info@pharmalect.com" method="POST">
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="http://pharmalect.com/thanks" /> 
  <div className="messages" />
  <div className="row controls">
    {/* Ad */}
    <div className="col-12">
      <div className="input-group-meta form-group mb-35">
        <label className="d-block">Ad*</label>
        <input type="text" name="name" placeholder="Mehmet" required />
      </div>
    </div>

    {/* Soyad */}
    <div className="col-12">
      <div className="input-group-meta form-group mb-35">
        <label className="d-block">Soyad*</label>
        <input type="text" name="surname" placeholder="Çelik" required />
      </div>
    </div>

    {/* E-posta */}
    <div className="col-12">
      <div className="input-group-meta form-group mb-40">
        <label className="d-block">E-posta Adresi*</label>
        <input type="email" name="email" placeholder="ornek@mail.com" required />
      </div>
    </div>

    {/* Mesaj */}
    <div className="col-12">
      <div className="input-group-meta form-group mb-30">
        <textarea name="message" placeholder="Mesajınız*" required />
      </div>
    </div>
    
    {/* Gönder Butonu */}
    <div className="col-12">
      <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">
        Mesaj Gönder
      </button>
    </div>
  </div>
</form>
  );
};

export default ContactForm2;
