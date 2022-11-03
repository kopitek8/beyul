import React, { HTMLAttributes, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTransition, animated } from 'react-spring';
import styles from '../../styles/Cloud.module.css';

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

//Separate arrays for images later on
const cloudTopLeftArray = [
  {
    src: cloud,
    alt: 'Cloud',
  },
  {
    src: cloud1,
    alt: 'Cloud',
  },
  // {
  //   src: cloud4,
  //   alt: 'Cloud',
  // },
  // {
  //   src: cloud5,
  //   alt: 'Cloud',
  // },
  // {
  //   src: cloud6,
  //   alt: 'Cloud',
  // },
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

const Cloud: React.FC = () => {
  const [items, setItems] = useState([]);

  const animateClouds = () => {
    setItems((v) =>
      v.length
        ? []
        : [
            { x: 1000, opacity: 0.2, delay: 20 },
            { x: 1400, opacity: 0.2, delay: 40 },
            { x: 1800, opacity: 0.2, delay: 60 },
          ]
    );
  };

  const transition = useTransition(items, {
    // from: { x: 0, y: 0, opacity: 1 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: (item) => async (next) => {
      await next({ x: item.x, y: 0, opacity: item.opacity, delay: item.delay });
      //   await next({ width: 100, height: 100 });
    },
    config: { duration: 500 },
    // leave: { x: 10000, y: 0, opacity: 1, delay: 200 },
  });

  //   useEffect(() => {
  //     animateClouds();
  //   }, []);

  //Make the following a utility function later on
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
      {/* {width >= 764 && renderMaxView()}
      {cloudTopLeftArray.map((arr, key) =>
        renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
      )} */}
      <button
        onClick={() => {
          animateClouds();
        }}
        style={{ height: 50, zIndex: 1, marginBottom: '15%' }}
      >
        {items.length ? 'Un-mount' : 'Mount'}
      </button>
      <div
        style={{
          backgroundColor: 'red',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '-15%',
          //   paddingTop: '10%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10%',
            marginLeft: '-14%',
            zIndex: 1,
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-14%',
            marginLeft: '-23%',
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-2%',
            marginLeft: '-21%',
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-4%',
            marginLeft: '-20%',
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10%',
            marginLeft: '-24%',
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-10%',
            marginLeft: '-23%',
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10%',
            marginLeft: '-20%',
          }}
        >
          {transition((style, item) =>
            item ? (
              <animated.div style={style} className={styles.container}>
                {/* {cloudTopLeftArray.map((arr, key) =>
              renderCloudArray(key, arr.src, arr.alt, styles.cloudTopLeft)
            )} */}
                <div className={styles.cloudContainer}>
                  <div
                    className={styles.cloudTopLeft}
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      src={cloud15}
                      alt={'alt'}
                      style={{ overflow: 'hidden' }}
                    />
                  </div>
                </div>
              </animated.div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Cloud;
