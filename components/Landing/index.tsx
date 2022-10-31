import React, { HTMLAttributes, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../../styles/Landing.module.css';

import cloud from '../../public/assets/Clouds/cloud.png';
import cloud1 from '../../public/assets/Clouds/cloud1.png';
import cloud2 from '../../public/assets/Clouds/cloud2.png';
import cloud3 from '../../public/assets/Clouds/cloud3.png';
import cloud4 from '../../public/assets/Clouds/cloud4.png';
import cloud5 from '../../public/assets/Clouds/cloud5.png';
import cloud6 from '../../public/assets/Clouds/cloud6.png';
import cloud7 from '../../public/assets/Clouds/cloud7.png';
import cloud8 from '../../public/assets/Clouds/cloud8.png';
import cloud9 from '../../public/assets/Clouds/cloud9.png';
import cloud10 from '../../public/assets/Clouds/cloud10.png';
import cloud11 from '../../public/assets/Clouds/cloud11.png';
import cloud12 from '../../public/assets/Clouds/cloud12.png';
import cloud13 from '../../public/assets/Clouds/cloud13.png';
import cloud14 from '../../public/assets/Clouds/cloud14.png';
import cloud15 from '../../public/assets/Clouds/cloud15.png';
import cloud16 from '../../public/assets/Clouds/cloud16.png';
import cloud17 from '../../public/assets/Clouds/cloud17.png';

import logo from '../../public/assets/Parallax/logo.png';
import top from '../../public/assets/Parallax/top.png';
import middle from '../../public/assets/Parallax/middle.png';
import bottom from '../../public/assets/Parallax/bottom.png';
import post from '../../public/assets/Parallax/post.png';

import useDeviceSize from '../../utilities/useDeviceSize';
import useCustomParallax from '../../utilities/useCustomParallax';

const cloudTopLeftArray = [
  {
    src: cloud,
    alt: 'Cloud',
  },
  {
    src: cloud1,
    alt: 'Cloud',
  },
  {
    src: cloud4,
    alt: 'Cloud',
  },
  {
    src: cloud5,
    alt: 'Cloud',
  },
  {
    src: cloud6,
    alt: 'Cloud',
  },
];

const cloudBottomLeftArray = [
  {
    src: cloud7,
    alt: 'Cloud',
  },
  {
    src: cloud8,
    alt: 'Cloud',
  },
  {
    src: cloud9,
    alt: 'Cloud',
  },
  {
    src: cloud16,
    alt: 'Cloud',
  },
];

const cloudTopRightArray = [
  {
    src: cloud2,
    alt: 'Cloud',
  },
  {
    src: cloud3,
    alt: 'Cloud',
  },
  {
    src: cloud10,
    alt: 'Cloud',
  },
  {
    src: cloud11,
    alt: 'Cloud',
  },
];

const cloudBottomRightArray = [
  {
    src: cloud12,
    alt: 'Cloud',
  },
  {
    src: cloud13,
    alt: 'Cloud',
  },
  {
    src: cloud14,
    alt: 'Cloud',
  },
  {
    src: cloud15,
    alt: 'Cloud',
  },
  {
    src: cloud17,
    alt: 'Cloud',
  },
];

const Landing: React.FC = () => {
  const [width, height] = useDeviceSize();
  const [offsetY] = useCustomParallax();

  const renderMaxView = () => {
    return (
      <div>
        <div style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
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
          style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
        >
          <Image src={logo} alt={'Bugy Life Festival'} />
        </div>
        <div
          className={styles.yetiPost}
          style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        >
          <Image src={post} alt={'Beware of yeti'} />
        </div>
        <div
          className={styles.stepstones}
          style={{ transform: `translateY(-${offsetY * 0.16}px)` }}
        >
          <Image src={bottom} alt={'Steps and stone'} />
        </div>
      </div>
    );
  };

  const renderCloudArray = (
    key: number,
    src: StaticImageData,
    alt: string,
    style: any
  ) => {
    return (
      <div className={styles.cloudContainer} key={key}>
        <div className={style}>
          <Image src={src} alt={alt} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      {width >= 764 && renderMaxView()}
      {/* {cloudTopLeftArray.map((arr, key) =>
        renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
      )}
      {cloudBottomLeftArray.map((arr, key) =>
        renderCloudArray(key, arr.src, arr.alt, styles.cloudBottomLeft)
      )}
      {cloudTopRightArray.map((arr, key) =>
        renderCloudArray(key, arr.src, arr.alt, styles.cloudTopRight)
      )}
      {cloudBottomRightArray.map((arr, key) =>
        renderCloudArray(key, arr.src, arr.alt, styles.cloudBottomRight)
      )} */}
    </div>
  );
};

export default Landing;
