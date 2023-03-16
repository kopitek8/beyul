import React from 'react';
import Link from 'next/link';
import styles from '../../styles/SendToLab.module.css';

//Explore this : https://www.linkedin.com/pulse/how-send-email-next-js-app-module-zeel-prajapati/

const SendToLab: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <button onClick={() => console.log('Clickd')} className={styles.button}>
          <p className={styles.content}>I&apos;m Interested</p>
        </button>
      </Link>
    </div>
  );
};

export default SendToLab;
