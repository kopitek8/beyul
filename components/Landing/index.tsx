import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../../styles/Landing.module.css';

import cloud from '../../public/assets/Clouds/cloud.png';
import cloud1 from '../../public/assets/Clouds/cloud1.png';

import logo from '../../public/assets/Parallax/logo.png';

// const dimension = Dimension.get(window);
// console.log('di ', dimension);

const Landing: React.FC = () => {
  // const [position, setPosition] = useState(30);

  // useEffect(() => {
  //   setPosition(0);
  // }, []);

  const logoRef = useParallax<HTMLDivElement>({
    speed: 10,
  });

  return (
    <div className={styles.banner}>
      <div className={styles.festivalLogoContainer} ref={logoRef.ref}>
        <Image
          src={logo}
          alt={'Parallax Cloud'}
          layout={'fill'}
          className={styles.festivalLogo}
        />
      </div>

      {/* <Parallax pages={2}>
        <ParallaxLayer offset={1} speed={200}>
          <div className={styles.beyulLogoContainer}>
            <Image
              src={cloud}
              alt={'Parallax Cloud'}
              layout={'fill'}
              className={styles.beyulImage}
            />
          </div>
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
};

export default Landing;
