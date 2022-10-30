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

const Landing: React.FC = () => {
  const [width, height] = useDeviceSize();

  // const renderParallaxView = () => {
  //   return (
  //     <Parallax pages={5}>
  //       <ParallaxLayer speed={1}>
  //         <div className={styles.sky}>
  //           <Image src={top} alt={'Sky and stars'} />
  //         </div>
  //       </ParallaxLayer>
  //       <ParallaxLayer speed={1}>
  //         <div className={styles.village}>
  //           <Image src={middle} alt={'Village'} />
  //         </div>
  //       </ParallaxLayer>
  //       <ParallaxLayer speed={3}>
  //         <div className={styles.biguCloud}>
  //           <Image src={logo} alt={'Bugy Life Festival'} />
  //         </div>
  //       </ParallaxLayer>
  //       <ParallaxLayer speed={1}>
  //         <div className={styles.yetiPost}>
  //           <Image src={post} alt={'Beware of yeti'} />
  //         </div>
  //       </ParallaxLayer>
  //       <ParallaxLayer speed={1}>
  //         <div className={styles.stepstones}>
  //           <Image src={bottom} alt={'Steps and stone'} />
  //         </div>
  //       </ParallaxLayer>
  //     </Parallax>
  //   );
  // };

  const renderMaxView = () => {
    return (
      <>
        <div className={styles.sky}>
          <Image src={top} alt={'Sky and stars'} />
        </div>
        <div className={styles.village}>
          <Image src={middle} alt={'Village'} />
        </div>
        <div className={styles.biguCloud}>
          <Image src={logo} alt={'Bugy Life Festival'} />
        </div>
        <div className={styles.yetiPost}>
          <Image src={post} alt={'Beware of yeti'} />
        </div>
        <div className={styles.stepstones}>
          <Image src={bottom} alt={'Steps and stone'} />
        </div>
      </>
    );
  };

  return <div className={styles.wrapper}>{width > 980 && renderMaxView()}</div>;
};

export default Landing;
