import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from '../../styles/Landing.module.css';

const Landing: React.FC = () => {
  return (
    <div className={styles.banner}>
      <Parallax speed={30}>
        <div className={styles.cloud}></div>
      </Parallax>
      <Parallax speed={80}>
        <div className={styles.person}></div>
      </Parallax>
    </div>
  );
};

export default Landing;
