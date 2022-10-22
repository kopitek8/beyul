import React from 'react';
import styles from '../../styles/SendToLab.module.css';

const SendToLab: React.FC = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => console.log('Clickd')} className={styles.button}>
        <p className={styles.content}>Subscribe</p>
      </button>
    </div>
  );
};

export default SendToLab;
