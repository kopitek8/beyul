import React, { useState } from 'react';
import styles from '../../styles/SendToLab.module.css';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

interface SendEmail {
  name: string,
  email: string,
}

const SendToLab = (props: SendEmail) => {

  const [isClicked, setClicked] = useState(false);
  const [values, setValues] = useState({ name: '', email: '' })

  const sendMail = async (e) => {
    e.preventDefault();
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      values,
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        toast('We appreciate your interest. We will get back to you shortly.',
          {
            hideProgressBar: true,
            autoClose: 5000,
            type: 'success'
          })
      }, function (error) {
        toast('We could not receive your interest at the moment. Please try again.',
          {
            hideProgressBar: true,
            autoClose: 5000,
            type: 'error'
          })
      });
  }


  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          console.log('Clicekd');
          setClicked(!isClicked);
        }}
        className={styles.button}>
        <p className={styles.content}>I&apos;m Interested</p>
      </button>
      {isClicked &&
        <div className={styles.modal}>
          <form>
            <input
              type="text"
              placeholder="What's your name?"
              required
              value={values.name}
              onChange={
                (e) => setValues({ ...values, name: e.target.value })
              }
              className={styles.input}
            />
            <input
              type="email"
              placeholder="What's your email?"
              required
              value={values.email}
              onChange={
                (e) => setValues({ ...values, email: e.target.value })}
            />
          </form>
          <button onClick={sendMail}>Send to Lab</button>
        </div>
      }
    </div >
  );
};

export default SendToLab;
