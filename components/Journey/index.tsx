import React, { useState, useEffect, useMemo } from 'react';
import styles from '../../styles/Journey.module.css';

const Journey: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [name, setName] = useState('');

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
  const handleMe = (e) => {
    var a = e.clientX;
    var b = e.clientY;

    document.getElementById('journey')?.innerHTML
      ? setPosition({ x: a, y: b })
      : setPosition({ x: 0, y: 0 });
  };

  return (
    <>
      <div id={'journey'} className={styles.itinerary} onMouseMove={handleMe}>
        <p>
          Mouse coordinates: x = {position.x} and y = {position.y}
        </p>
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default Journey;
