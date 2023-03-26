import Head from 'next/head';
import React from 'react';
import styles from '../../styles/Plan.module.css';

const Plan: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={styles.contentContainer}>
        {/* <h1 className={styles.title}>the plan</h1> */}
        <h1 className={styles.title}>welcome to our secret MVP launch!</h1>
        <span className={styles.contentInnerContainer}>
          {/* We take you through a revolution where you are breaking through your
          physical struggle navigating the Gaurishankar Conservation Area
          crossing threshold after threshold, Kalinchowk to Seti, achieving
          inner and outer feats, submerged in earthly delights in a state of
          bliss, following myths (transcendence) on a 16th Century Salt Route,
          witnessing the creator&apos;s manifestation in the people, the
          culture, the silent ways of the ancient, ultimately, recognizing the
          divine in us and all around with a rapture of being alive. You will be
          a visiting deity in the Bigu village, and you will know with the way
          they treat you, it&apos;s hospitality, comes out of recognition, with
          Beyül you experience a festival of feelings within and around, with
          the ways of the modern and the ancient, in harmony. */}
          <span className={styles.content}>
            We are thrilled to introduce our startup - BEYÜL and its very first MVP experiment - BIGU LIFE FESTIVAL,
            a 7-day festival package that combines camping trek and village stay into one unforgettable experience in the Himalayas.
          </span>
          <span className={styles.content}>
            Join us on our journey to the mythical Bigu village in the heart of Gaurishankar Conservation Area, Nepal.
            The mountains over here have seen the birth of a civilization, ancient trade, war, sages meditating, and construction of the oldest buddhist nunnery in Nepal.
            We will be on a camping trek for 5 days carving our path through an ancient trade route,
            forgotten since the 1950&apos;s whilst being overlooked by the mighty Gaurishankhar (7134m) and surrounded by the natural
            treasures of this beautiful conservation area. We will then trek down to Bigu Village (2000m) where we will be welcomed by the villagers of
            Bigu for a 2-day celebratory stay and to revel in their way of life at the Bigu Life Festival.
          </span>
          <span className={styles.content}>
            Bigu Life Festival is a joint effort of Beyül, a destination development social enterprise and the local community of
            Gaurishankar Conservation Area to instill a sustainable tourism model in the heart of Himalayas.
            This is our first offering and our aim is to jumpstart a unique tourism product that compliments
            Bigu&apos;s indigenous way of life and creates opportunities for the locals.
            All the while we will be establishing a groundbreaking tourism startup that will revolutionize sustainable holidays here in the UK.
          </span>
          <span className={styles.content}>
            This is a secret launch as we aim to perfect our recipe before hitting the market.
            The spaces are limited to 25 clients only and the ticket price will be stripped down in exchange for your feedback and inputs.
          </span>

          <span className={styles.content}>
            Press “I&apos;m Interested” below to be one of the first to experience this unique adventure and
            to be part of our journey as we establish this one of a kind startup in the UK.
          </span>
          <span className={styles.content}>
            Beyül
          </span>
        </span>
      </div>
    </div>
  );
};

export default Plan;
