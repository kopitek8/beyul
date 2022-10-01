import React, { useRef, useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../../styles/Landing.module.css';

const Landing: React.FC = () => {
  // const target = useRef(null);
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // console.log('value off set Y ', offsetY);

  return (
    // <div ref={target} className={styles.banner}>
    //   <div
    //     className={styles.person}
    //     style={{
    //       backgroundColor: 'red',
    //       // transform: `transformY(${offsetY * 5}px)`,
    //       transform: `transformY(${offsetY * 5000}px)`,
    //     }}
    //   ></div>
    //   {/* <div
    //     className={styles.cloud}
    //     style={{ transform: `transformY(${offsetY * 0.5}px)` }}
    //   >
    //     <p>Other inner components</p>
    //   </div> */}
    // </div>

    <div>
      <Parallax pages={2} className={styles.banner}>
        <ParallaxLayer speed={0.5} className={styles.cloud}>
          <h1>Welcome to Beyul</h1>
          <ParallaxLayer offset={1} speed={0.5} className={styles.person}>
            <h3>Body content ...</h3>
          </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Landing;
