import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_34bo5lj', 'template_gzn4r1v', event.target, 'mLX94O2UcYEFQ9oDw')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again later.");
      });

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Nom*"
                name="name"
                required="required"
                data-error="Name is required."
                value={formData.name}
                onChange={handleChange}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                placeholder="Email*"
                name="email"
                required="required"
                data-error="Valid email is required."
                value={formData.email}
                onChange={handleChange}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="message*"
                name="message"
                required="required"
                data-error="Please, leave us a message."
                value={formData.message}
                onChange={handleChange}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-12">
            <button className="btn-twentyOne fw-500 tran3s d-block">
              Envoyer Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
