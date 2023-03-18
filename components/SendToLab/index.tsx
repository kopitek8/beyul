import React, { useState } from 'react';
import styles from '../../styles/SendToLab.module.css';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { IoCloseOutline } from "react-icons/io5";

interface SendEmail {
  name: string,
  email: string,
}

const SendToLab = (props: SendEmail) => {

  const [isClicked, setClicked] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', text: 'Send' })

  const sendMail = async (e) => {
    e.preventDefault();
    setValues({ ...values, text: 'Sending...' })

    if (values.name === '' && values.email === '') {
      toast('You must enter your name and email',
        {
          hideProgressBar: true,
          autoClose: 2500,
          type: 'warning'
        })
    } else if (values.name === '') {
      toast('You must enter your name',
        {
          hideProgressBar: true,
          autoClose: 2500,
          type: 'warning'
        })
    } else if (values.email === '') {
      toast('You must enter your email',
        {
          hideProgressBar: true,
          autoClose: 2500,
          type: 'warning'
        })
    } else {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
        .then(() => {
          toast('We appreciate your interest. We will get back to you shortly.',
            {
              hideProgressBar: true,
              autoClose: 5000,
              type: 'success'
            })
          handleCloseClick();
        }, () => {
          toast('We could not receive your interest at the moment. Please try again.',
            {
              hideProgressBar: true,
              autoClose: 5000,
              type: 'error'
            })
        });
    }
  }

  const handleCloseClick = () => {
    setClicked(!isClicked);
    setValues({ name: '', email: '', text: 'Send' })
  };


  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setClicked(!isClicked);
        }}
        className={styles.button}>
        <p className={styles.content}>I&apos;m Interested</p>
      </button>
      {
        isClicked &&
        <div className={styles.topModalContainer}>
          <div className={styles.modalContainer}>
            <div className={styles.buttonContainer}>
              <p>Send to Lab</p>
              <IoCloseOutline onClick={handleCloseClick} className={styles.closeButton} />
            </div>
            <div className={styles.contentContainer}>
              <div>
                <div>
                  <form className={styles.form}>
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
                        (e) => setValues({ ...values, email: e.target.value })
                      }
                      className={styles.input}
                    />
                  </form>
                </div>
                <div className={styles.labButtonContainer}>
                  <button
                    onClick={sendMail}
                    className={
                      (values.name !== '' && values.email !== '')
                        ? styles.labButton
                        : styles.labButtonDisabled}
                  >
                    {values.text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div >
  );
};

export default SendToLab;
