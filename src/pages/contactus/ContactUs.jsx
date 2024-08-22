import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WOW from 'wowjs';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields!');
      return;
    }
    toast.success('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className={`${styles.contactForm} wow fadeIn`} data-wow-duration="1s">
      <h2 className={`${styles.heading} wow fadeInUp`}>Contact Us</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`${styles.input} wow fadeInLeft`}
            data-wow-duration="1s"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className={`${styles.input} wow fadeInRight`}
            data-wow-duration="1s"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className={`${styles.textarea} wow fadeInUp`}
            data-wow-duration="1s"
            required
          ></textarea>
        </div>
        <button type="submit" className={`${styles.submitBtn} wow fadeInUp`} data-wow-duration="1s">
          Send Message
        </button>
      </form>
      <ToastContainer
        position="top-center"  // Center horizontally
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactUs;
