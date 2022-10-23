import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoLogoGoogle } from 'react-icons/io5';

import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Footer.module.css';
import beyulLogo from '../../public/assets/beyul-logo.png';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContentContainer}>
        <div className={styles.getInTouch}>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.logo} />
            <p>
              21st Revolution Street <br /> London, England
            </p>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.logo} />
            <p>+1 7874-9921-21</p>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.logo} />
            <p>getintouch@beyul.com</p>
          </div>
        </div>
        <div className={styles.aboutUs}>
          <h3>About Beyül</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            porro autem, nisi voluptate sunt numquam repellat iure veritatis
            sequi itaque earum optio similique alias, doloremque, esse impedit
            quod fuga maxime!
          </p>
          <div className={styles.socialLinks}>
            <Link href='/'>
              <IoLogoFacebook className={styles.logo} />
            </Link>
            <Link href='/'>
              <IoLogoInstagram className={styles.logo} />
            </Link>
            <Link href='/'>
              <IoLogoTwitter className={styles.logo} />
            </Link>
            <Link href='/'>
              <IoLogoYoutube className={styles.logo} />
            </Link>
            <Link href='/'>
              <IoLogoGoogle className={styles.logo} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.beyulLogoContainer}>
        <Image
          src={beyulLogo}
          alt={'Beyul Logo'}
          layout={'fill'}
          className={styles.beyulImage}
        />
      </div>
    </div>
  );
};

export default Footer;
