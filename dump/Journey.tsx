import React, { useState, useEffect, useMemo } from 'react';
import styles from '../../styles/Journey.module.css';
import Image from 'next/image';

import journey from '../../public/assets/itinerary.jpg';
import responsiveJourney from '../../public/assets/itinerary-mobile.jpg';

import useDeviceSize from '../../utilities/useDeviceSize';
import Head from 'next/head';

import Mapper from './Mapper';
import Tooltip from '../Tooltip';

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
      <>
        <Image src={journey} alt={'The journey'} useMap={'#itinerary'} />
        <map name='itinerary'>
          <area
            shape="poly"
            coords="291,723,520,689,619,638,679,567,691,471"
            title="DAY 1"
            onMouseOver={
              () => {
                console.log("Mouse overed")
                return (
                  <Tooltip content="Hello, I'm a tooltip" direction="right">
                    <button>I'm a button</button>
                  </Tooltip>
                )
              }
            }
            href=""
          />
          <area shape="poly" coords="643,507,688,434,527,434,551,265,628,244" title="DAY 2" href="" />
          <area shape="poly" coords="573,265,659,148,791,173" title="DAY 3" href="" />
          <area shape="poly" coords="813,136,872,181,780,318" title="DAY 4" href="" />
          <area shape="poly" coords="774,312,964,308,1060,413" title="DAY 5" href="" />
        </map>
      </>
    )
  }

  return (
    <>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      {/* <div className={styles.wrapper}>{width >= 764 && renderMainView()}</div>
      <div className={styles.wrapper}>{width <= 763 && renderResponsiveView()}</div>
      <Mapper /> */}
      <div className={styles.imgContainer}>
        <Image src={journey} alt={'The journey'} className={styles.img} />
        <a href="/link1">
          <div className={styles.item1}></div>
        </a>
        <a href="/link1">
          <div className={styles.item2}>DAY 2</div>
        </a>
        <a href="/link1">
          <div className={styles.item3}>DAY 3</div>
        </a>
        <a href="/link1">
          <div className={styles.item4}>DAY 4</div>
        </a>
        <a href="/link2">
          <div className={styles.item5}>DAY 5</div>
        </a>
      </div>
    </>
  )
};

export default Journey;
