import React, { HTMLAttributes, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Head from 'next/head';
import { useTransition, animated } from 'react-spring';
import styles from '../../styles/Landing.module.css';

import logo from '../../public/assets/Parallax/logo.png';
import top from '../../public/assets/Parallax/top.png';
import middle from '../../public/assets/Parallax/middle.png';
import bottom from '../../public/assets/Parallax/bottom.png';
import post from '../../public/assets/Parallax/post.png';

import responsiveBanner from '../../public/assets/banner-mobile.jpg';
import banner from '../../public/assets/banner.jpg';

import useDeviceSize from '../../utilities/useDeviceSize';
import useCustomParallax from '../../utilities/useCustomParallax';

const Landing: React.FC = () => {
  const [width] = useDeviceSize();
  const [offsetY] = useCustomParallax();

  // const renderMaxView = () => {
  //   return (
  //     <div>
  //       <div style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
  //         <Image src={top} alt={'Sky and stars'} />
  //       </div>
  //       <div
  //         className={styles.village}
  //         style={{ transform: `translateY(-${offsetY * 0.15}px)` }}
  //       >
  //         <Image src={middle} alt={'Village'} />
  //       </div>
  //       <div
  //         className={styles.biguCloud}
  //         style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
  //       >
  //         <Image src={logo} alt={'Bugy Life Festival'} />
  //       </div>
  //       <div
  //         className={styles.yetiPost}
  //         style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
  //       >
  //         <Image src={post} alt={'Beware of yeti'} />
  //       </div>
  //       <div
  //         className={styles.stepstones}
  //         style={{ transform: `translateY(-${offsetY * 0.16}px)` }}
  //       >
  //         <Image src={bottom} alt={'Steps and stone'} />
  //       </div>
  //     </div>
  //   );
  // };

  const renderMaxView = () => {
    return (
      <Image src={banner} alt={'Beyül banner'} />
    )
  }

  const renderResponsiveView = () => {
    return (
      <Image src={responsiveBanner} alt={'Beyül mobile responsive banner'} />
    );
  }

  return (
    <>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className={styles.wrapper}>{width >= 764 && renderMaxView()}</div>
      <div className={styles.wrapper}>{width <= 763 && renderResponsiveView()}</div>
    </>
  );
};

export default Landing;
