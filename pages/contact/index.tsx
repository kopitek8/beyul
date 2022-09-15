import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Contact.module.css';

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name='contact' content='Contact us page for Next' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Beyul</h1>
      </main>
    </div>
  );
};

export default Contact;
