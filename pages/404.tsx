import React from 'react';
import { GiPirateFlag } from 'react-icons/gi';
import styles from '../styles/404.module.css';

const Unavailable: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Blimey! Page Not Available</h1>
      <GiPirateFlag size={234} />
    </div>
  );
};

export default Unavailable;
