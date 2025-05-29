import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1odjfoo', 'template_m3csym8', form.current, 'rx9NPuRjzJiDEh98p')
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.heading}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}></label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}></label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}></label>
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
      {/* Toastify container to show notifications */}
      <ToastContainer
        position="top-center"
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
