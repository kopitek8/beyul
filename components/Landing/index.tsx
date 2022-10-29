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

// const dimension = Dimension.get(window);
// console.log('di ', dimension);

const Landing: React.FC = () => {
  // const [position, setPosition] = useState(30);

  // useEffect(() => {
  //   setPosition(0);
  // }, []);

  // const logoRef = useParallax<HTMLDivElement>({
  //   speed: 10,
  // });

  return (
    <div
    // className={styles.banner}
    >
      <div className={styles.topContainer}>
        <Image
          src={top}
          alt={'Parallax Cloud'}
          layout={'fill'}
          className={styles.top}
        />
      </div>
      <div className={styles.middleContainer}>
        <Image
          src={middle}
          alt={'Parallax Cloud'}
          layout={'fill'}
          className={styles.middle}
        />
      </div>

      {/* <div className={styles.festivalLogoContainer} ref={logoRef.ref}>
        <Image
          src={logo}
          alt={'Parallax Cloud'}
          layout={'fill'}
          className={styles.festivalLogo}
        />
      </div> */}
    </div>

    // <div>
    //   <Parallax pages={1} style={{ overflow: 'hidden' }}>
    //     <ParallaxLayer offset={0} speed={1}>
    //       <div className={styles.topContainer}>
    //         <Image
    //           src={top}
    //           alt={'Parallax Cloud'}
    //           layout={'fill'}
    //           className={styles.top}
    //         />
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={1} speed={0.5}>
    //       <div className={styles.middleContainer}>
    //         <Image
    //           src={middle}
    //           alt={'Parallax Cloud'}
    //           layout={'fill'}
    //           className={styles.middle}
    //         />
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer>
    //       <div className={styles.festivalLogoContainer}>
    //         <Image
    //           src={post}
    //           alt={'Parallax Cloud'}
    //           layout={'fill'}
    //           className={styles.festivalLogo}
    //         />
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer>
    //       <div className={styles.festivalLogoContainer}>
    //         <Image
    //           src={bottom}
    //           alt={'Parallax Cloud'}
    //           layout={'fill'}
    //           className={styles.festivalLogo}
    //         />
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer>
    //       <div className={styles.festivalLogoContainer}>
    //         <Image
    //           src={logo}
    //           alt={'Parallax Cloud'}
    //           layout={'fill'}
    //           className={styles.festivalLogo}
    //         />
    //       </div>
    //     </ParallaxLayer>
    //   </Parallax>
    // </div>
  );
};

export default Landing;
