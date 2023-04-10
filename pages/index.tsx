import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Landing from '../components/Landing';
import Expect from '../components/Expect';
import Plan from '../components/Plan';
import Journey from '../components/Journey';
import SendToLab from '../components/SendToLab';
import JoinUs from '../components/JoinUs';
import Cloud from '../components/Cloud';
import CloudLoader from '../components/CloudLoader';

import banner from '../public/assets/banner.jpg';

import CircleLoader from "react-spinners/CircleLoader";

const Home: NextPage = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => {
          img.onload = img.onerror = resolve;
        })))
      .then(() => {
        console.log('images finished loading');
        setIsLoading(!isLoading);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Beyul</title>
        <meta
          name='description'
          content='Beyül is a destination development social enterprise based in London, UK.
            It is a start-up in its early stages of development. Employing guerrilla tactics,
            Beyül wants to dive into the market headfirst with bare minimal viable product available.
            This is in expectation of executing its first pilot project - Bigu Life Festival in Nepal within the summer of 2023.'
        />
        <meta
          name='vision'
          content='Beyül is a social enterprise initiated to realize this wonderfully rich country through tourism.
          Beyül has begun with a team of seekers hoping to find more in a quest to channelize the rising consciousness to uplift,
          preserve, sustain and conserve our country and the beauty in our people.'
        />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property="og:description"
          content="Beyül is a destination development social enterprise based in London, UK.
            It is a start-up in its early stages of development. Employing guerrilla tactics,
            Beyül wants to dive into the market headfirst with bare minimal viable product available.
            This is in expectation of executing its first pilot project- Bigu Life Festival in Nepal within the summer of 2023."
        />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Bigu Life Festival" />
        <meta property="og:description" content="Beyül is a destination development social enterprise based in London, UK.
            It is a start-up in its early stages of development. Employing guerrilla tactics,
            Beyül wants to dive into the market headfirst with bare minimal viable product available.
            This is in expectation of executing its first pilot project- Bigu Life Festival in Nepal within the summer of 2023."/>
        <meta property="og:url" content="https://bigulifefestival.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/diy4muhie/image/upload/v1681140573/Beyul%20%7C%20Bigu%20Life%20Festival/banner_cbvpi4.jpg" />
        <meta property="og:image:alt" content="Bigu Life Festival" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/diy4muhie/image/upload/v1681140573/Beyul%20%7C%20Bigu%20Life%20Festival/banner_cbvpi4.jpg" />
        <meta property="og:image:type" content="img/jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:site_name" content="Beyul" />
        <link rel="canonical" href="https://bigulifefestival.com" />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:title" content="Bigu Life Festival" />

        <meta name="twitter:description" content="Beyül is a destination development social enterprise based in London, UK.
            It is a start-up in its early stages of development. Employing guerrilla tactics,
            Beyül wants to dive into the market headfirst with bare minimal viable product available.
            This is in expectation of executing its first pilot project- Bigu Life Festival in Nepal within the summer of 2023." />
        <meta name="twitter:image" content="https://res.cloudinary.com/diy4muhie/image/upload/v1681140573/Beyul%20%7C%20Bigu%20Life%20Festival/banner_cbvpi4.jpg" />
        <meta name="twitter:site" content="@kopitek8" />
        <meta name="twitter:creator" content="@kopitek8" />
      </Head>
      {isLoading ? (
        <div>
          <div className={styles.loaderContainer}>
            <CircleLoader
              color={'maroon'}
              loading={isLoading}
              size={200}
            />
          </div>
          {/* <CloudLoader /> */}
        </div>) : (
        <div>
          <Landing />
          <Expect />
          <Plan />
          <Journey />
          <SendToLab />
          {/* <JoinUs /> */}
          <Cloud />
        </div>
      )}
    </div>
  );
};

export default Home;
