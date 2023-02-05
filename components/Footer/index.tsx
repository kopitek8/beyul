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
            <Link href="/">
              <span>
                21st Revolution Street <br /> London, England
              </span>
            </Link>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.logo} />
            <Link href="tel:+4733378901">
              <span>+1 7874-9921-21</span>
            </Link>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.logo} />
            <Link href="mailto:getintouch@beyul.com">
              <span>getintouch@beyul.com</span>
            </Link>
          </div>
        </div>
        <div className={styles.aboutUs}>
          <h3>About Beyül</h3>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            porro autem, nisi voluptate sunt numquam repellat iure veritatis
            sequi itaque earum optio similique alias, doloremque, esse impedit
            quod fuga maxime!
          </span>
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
