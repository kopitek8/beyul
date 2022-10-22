import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.getInTouch}>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt />
          <p>
            21st Revolution Street <br /> London, England
          </p>
        </div>
        <div className={styles.contactItem}>
          <FaPhoneAlt />
          <p>+1 7874-9921-21</p>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope />
          <p>getintouch@beyul.com</p>
        </div>
      </div>
      <div className={styles.aboutUs}>Helloo</div>
    </div>
  );
};

export default Footer;
