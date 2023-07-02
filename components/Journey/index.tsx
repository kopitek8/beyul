import React, { useState, useEffect, useMemo } from 'react';
import styles from '../../styles/Journey.module.css';
import Image from 'next/image';

import journey from '../../public/assets/itinerary.jpg';
import responsiveJourney from '../../public/assets/itinerary-mobile.jpg';

import day1 from '../../public/assets/Journey/day1.png'
import day2 from '../../public/assets/Journey/day2.png'
import day3 from '../../public/assets/Journey/day3.png'
import day4 from '../../public/assets/Journey/day4.png'

import useDeviceSize from '../../utilities/useDeviceSize';
import Head from 'next/head';

import { IoCloseOutline } from "react-icons/io5";


const Journey: React.FC = () => {
  const [showDay1, setShowDay1] = useState(false);
  const [showDay2, setShowDay2] = useState(false);
  const [showDay3, setShowDay3] = useState(false);
  const [showDay4, setShowDay4] = useState(false);

  const [width] = useDeviceSize();

  const handleCloseClick = () => {
    setShowDay1(false)
    setShowDay2(false)
    setShowDay3(false)
    setShowDay4(false)
  };

  const renderModal = (title: String, imageSrc) => {

    return (
      <div className={styles.topModalContainer}>
        <div className={styles.modalContainer}>
          <div className={styles.buttonContainer}>
            <h4>{title}</h4>
            <IoCloseOutline onClick={handleCloseClick} className={styles.closeButton} />
          </div>
          <div className={styles.contentContainer}>
            <Image
              src={imageSrc}
              alt={'Day 1'}
              className={styles.itinerary}
            />
          </div>
        </div>
      </div>
    )
  }

  const renderResponsiveView = () => {
    return (
      <div className={styles.imgContainer}>
        <Image src={responsiveJourney}
          alt={'The journey mobile version'}
          className={styles.img}
        // placeholder="blur"
        />
        {/* DAY 1 */}
        <div
          className={styles.responsiveWalk1}
          onClick={() => { setShowDay1(!showDay1) }}
        />
        <div
          className={styles.responsiveWalk2}
          onClick={() => { setShowDay1(!showDay1) }}
        />
        <div
          className={styles.responsiveWalk3}
          onClick={() => { setShowDay1(!showDay1) }}
        />
        <div
          className={styles.responsiveWalk4}
          onClick={() => { setShowDay1(!showDay1) }}
        />

        {/* DAY 2 */}
        <div
          className={styles.responsiveWalk5}
          onClick={() => { setShowDay2(!showDay2) }}
        />
        <div
          className={styles.responsiveWalk6}
          onClick={() => { setShowDay2(!showDay2) }}
        />
        <div
          className={styles.responsiveWalk7}
          onClick={() => { setShowDay2(!showDay2) }}
        />
        <div
          className={styles.responsiveWalk8}
          onClick={() => { setShowDay2(!showDay2) }}
        />

        {/* DAY 3 */}
        <div
          className={styles.responsiveWalk9}
          onClick={() => { setShowDay3(!showDay3) }}
        />

        {/* DAY 4 */}
        <div
          className={styles.responsiveWalk10}
          onClick={() => { setShowDay4(!showDay4) }}
        />
        <div
          className={styles.responsiveWalk11}
          onClick={() => { setShowDay4(!showDay4) }}
        />
        <div
          className={styles.responsiveWalk12}
          onClick={() => { setShowDay4(!showDay4) }}
        />

        {/* DAY 5 */}
        <div
          className={styles.responsiveWalk13}
          onClick={() => { setShowDay2(!showDay2) }}
        />
      </div>
    );
  }

  const renderMainView = () => {
    return (
      <div className={styles.imgContainer}>
        <Image src={journey}
          alt={'The journey'}
          className={styles.img}
        // placeholder="blur"
        />
        {/* DAY 1 */}
        <div
          className={styles.walk1}
          onClick={() => { setShowDay1(!showDay1) }}
        />
        <div
          className={styles.walk2}
          onClick={() => { setShowDay1(!showDay1) }}
        />
        <div
          className={styles.walk3}
          onClick={() => { setShowDay1(!showDay1) }}
        />
        {/* DAY 2 */}
        <div
          className={styles.walk4}
          onClick={() => { setShowDay2(!showDay2) }}
        />
        <div
          className={styles.walk5}
          onClick={() => { setShowDay2(!showDay2) }}
        />
        <div
          className={styles.walk6}
          onClick={() => { setShowDay2(!showDay2) }}
        />
        <div
          className={styles.walk7}
          onClick={() => { setShowDay2(!showDay2) }}
        />
        {/* DAY 3 */}
        <div
          className={styles.walk8}
          onClick={() => { setShowDay3(!showDay3) }}
        />
        {/* DAY 4 */}
        <div
          className={styles.walk9}
          onClick={() => { setShowDay4(!showDay4) }}
        />
        <div
          className={styles.walk10}
          onClick={() => { setShowDay4(!showDay4) }}
        />
        {/* DAY 5 */}
        <div
          className={styles.walk11}
        />
      </div >
    )
  }

  return (
    <>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={styles.wrapper}>{width >= 764 && renderMainView()}</div>
      <div className={styles.wrapper}>{width <= 763 && renderResponsiveView()}</div>

      {showDay1 && renderModal("Day 1 - Itinerary", day1)}
      {showDay2 && renderModal("Day 2 - Itinerary", day2)}
      {showDay3 && renderModal("Day 3 - Itinerary", day3)}
      {showDay4 && renderModal("Day 4 - Itinerary", day4)}
    </>
  )
};

export default Journey;
