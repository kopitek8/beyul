import React, { useState, useEffect, useMemo } from 'react';
import styles from '../../styles/Journey.module.css';
import Image from 'next/image';

import journey from '../../public/assets/itinerary.jpg';
import responsiveJourney from '../../public/assets/itinerary-mobile.jpg';

import useDeviceSize from '../../utilities/useDeviceSize';
import Head from 'next/head';

const Journey: React.FC = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [name, setName] = useState('');

  const [width] = useDeviceSize();


  // useMemo(() => myCurrentLocation(xStart, xEnd, yStart, yEnd));

  // const myCurrentLocation = (xStart, xEnd, yStart, yEnd) => {
  //   while (
  //     position.x >= xStart &&
  //     position.x <= xEnd &&
  //     position.y >= yStart &&
  //     position.y <= yEnd
  //   ) {
  //     setName('Kalinchowk');
  //   }
  // };

  //Function to find the mouse coordinates when hovering over the journey image

  // ------------------ COMMENTED OUT FOR MVP. NEED TO FIGURE OUT MOUSE COORDINATE BELOW. UNCOMMENT AND WORK FROM HERE TO
  // interface MouseInterface {
  //   clientX: number;
  //   clientY: number;
  // }

  // const handleMe = (e: MouseInterface) => {
  //   var a = e.clientX;
  //   var b = e.clientY;

  //   document.getElementById('journey')?.innerHTML
  //     ? setPosition({ x: a, y: b })
  //     : setPosition({ x: 0, y: 0 });
  // };


  // return (
  //   <>
  //     <div id={'journey'} className={styles.itinerary} onMouseMove={handleMe}>
  //       <p>
  //         Mouse coordinates: x = {position.x} and y = {position.y}
  //       </p>
  //       <h1>{name}</h1>
  //     </div>
  //   </>
  // );

  // ---------------------- HERE

  const renderResponsiveView = () => {
    return (
      <Image src={responsiveJourney} alt={'The journey responsive mobile view'} />
    );
  }

  const renderMainView = () => {
    return (
      <Image src={journey} alt={'The journey'} />
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
    </>
  )
};

export default Journey;
