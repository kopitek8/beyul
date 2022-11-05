import React, { HTMLAttributes, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTransition, animated } from 'react-spring';
import styles from '../../styles/Cloud.module.css';

import cloud15 from '../../public/assets/Clouds/cloud15.png';

const Cloud: React.FC = () => {
  const [itemsRight, setItemsRight] = useState([
    { x: 800, opacity: 0, delay: 20 },
    { x: 1200, opacity: 0, delay: 100 },
    { x: 1000, opacity: 0, delay: 50 },
    { x: 800, opacity: 0, delay: 40 },
    { x: 1200, opacity: 0, delay: 80 },
    { x: 1000, opacity: 0, delay: 80 },
    { x: 1600, opacity: 0, delay: 80 },
    { x: 1000, opacity: 0, delay: 80 },
  ]);
  const [itemsLeft, setItemsLeft] = useState([
    { x: -1200, opacity: 0, delay: 100 },
    { x: -1400, opacity: 0, delay: 50 },
    { x: -800, opacity: 0, delay: 20 },
    { x: -1200, opacity: 0, delay: 140 },
    { x: -1400, opacity: 0, delay: 80 },
    { x: -800, opacity: 0, delay: 50 },
    { x: -1300, opacity: 0, delay: 80 },
    { x: -500, opacity: 0, delay: 50 },
  ]);

  const animateClouds = () => {
    setItemsRight([]);
    setItemsLeft([]);
  };

  const transitionRight = useTransition(itemsRight, {
    from: { x: -100, y: 0, opacity: 1 },
    enter: { x: 0, opacity: 1, delay: 20 },
    leave: (item) => async (next) => {
      await next({ x: item.x, y: 0, opacity: item.opacity, delay: item.delay });
    },
    config: { duration: 1000 },
  });

  const transitionLeft = useTransition(itemsLeft, {
    from: { x: 100, y: 0, opacity: 1 },
    enter: { x: 0, opacity: 1, delay: 20 },
    leave: (item) => async (next) => {
      await next({ x: item.x, y: 0, opacity: item.opacity, delay: item.delay });
    },
    config: { duration: 1000 },
  });

  useEffect(() => {
    setTimeout(() => {
      animateClouds();
    }, 2000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <div className={styles.animateRight1}>
          {transitionRight((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateRight2}>
          {transitionRight((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateRight3}>
          {transitionRight((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateRight4}>
          {transitionRight((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateRight5}>
          {transitionRight((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateRight6}>
          {transitionRight((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateLeft1}>
          {transitionLeft((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateLeft2}>
          {transitionLeft((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateLeft3}>
          {transitionLeft((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateLeft4}>
          {transitionLeft((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateLeft5}>
          {transitionLeft((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
        <div className={styles.animateLeft6}>
          {transitionLeft((style, item) =>
            item ? (
              <animated.div style={style}>
                <Image src={cloud15} alt={'Clouds'} />
              </animated.div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Cloud;
