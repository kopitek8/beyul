import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../../styles/Landing.module.css';

import cloud from '../../public/assets/Clouds/cloud.png';
import cloud1 from '../../public/assets/Clouds/cloud1.png';

import logo from '../../public/assets/Parallax/logo.png';
import top from '../../public/assets/Parallax/top.png';
import middle from '../../public/assets/Parallax/middle.png';
import bottom from '../../public/assets/Parallax/bottom.png';
import post from '../../public/assets/Parallax/post.png';

import useDeviceSize from '../../utilities/useDeviceSize';
import useCustomParallax from '../../utilities/useCustomParallax';

const Landing: React.FC = () => {
  const [width, height] = useDeviceSize();
  const [offsetY] = useCustomParallax();

  const renderMaxView = () => {
    return (
      <div>
        <div
        // style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        >
          <Image src={top} alt={'Sky and stars'} />
        </div>
        <div
          className={styles.village}
          style={{ transform: `translateY(-${offsetY * 0.15}px)` }}
        >
          <Image src={middle} alt={'Village'} />
        </div>
        <div
          className={styles.biguCloud}
          style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
        >
          <Image src={logo} alt={'Bugy Life Festival'} />
        </div>
        <div
          className={styles.yetiPost}
          style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        >
          <Image src={post} alt={'Beware of yeti'} />
        </div>
        <div
          className={styles.stepstones}
          style={{ transform: `translateY(-${offsetY * 0.31}px)` }}
        >
          <Image src={bottom} alt={'Steps and stone'} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>{width >= 764 && renderMaxView()}</div>
  );
};

export default Landing;
