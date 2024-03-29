import React, { useState } from 'react';
import styles from '../../styles/SendToLab.module.css';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { IoCloseOutline } from "react-icons/io5";
import Head from 'next/head';

import CircleLoader from "react-spinners/CircleLoader";

interface SendEmail {
  name: string,
  email: string,
}

const SendToLab = () => {

  const [isClicked, setClicked] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', isLoading: false })

  const sendMail = async (e: any) => {
    e.preventDefault();

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
      setValues({ ...values, isLoading: true })
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        values,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string)
        .then(() => {
          toast('Thank you. We have sent a welcome video to your inbox (Please check your spam folder as well).',
            {
              hideProgressBar: true,
              autoClose: 3500,
              type: 'success'
            })
          handleCloseClick();
        }, () => {
          toast('There seems to be a problem at the moment. Please try again later.',
            {
              hideProgressBar: true,
              autoClose: 3500,
              type: 'error'
            })
        });
    }
  }

  const handleCloseClick = () => {
    setClicked(!isClicked);
    setValues({ name: '', email: '', isLoading: false })
  };


  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
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
              <h4>Send to Lab</h4>
              <IoCloseOutline onClick={handleCloseClick} className={styles.closeButton} />
            </div>
            <div className={styles.contentContainer}>
              <div>
                <div>
                  <form className={styles.form}>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="What's your name?"
                      required
                      value={values.name}
                      onChange={
                        (e) => setValues({ ...values, name: e.target.value })
                      }
                      className={styles.input}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="What's your email?"
                      required
                      value={values.email}
                      onChange={
                        (e) => setValues({ ...values, email: e.target.value })
                      }
                      className={styles.input}
                    />
                    <br />
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
                    {values.isLoading ? <CircleLoader
                      color={'silver'}
                      loading={values.isLoading}
                      size={30}
                    /> : 'Send'}
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
