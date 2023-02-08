import React from 'react';
import Head from "next/head";
import {
  Hero,
  About,
  Story,
  Team,
  Faqs,
  Footer,
  Copyright,
  Roadmap,
} from "../components/Home";
import { Navbar } from "../components";
import styles from "../styles/Home.module.css";
import banner from '../public/assets/images/hero-bg.png';

const Home = () => {
  return (
    <>
      <Head>
      <title>Web3.D Troll Face NFT</title>
        <meta name="description" content="Fresh-looking redesigned 3D Troll Face meme NFT with a greater sense of movement to be released and merged into web3 to offer new opportunities for memes and online content using blockchain technology
        
" />
<meta property="og:title" content="Web3.D Troll Face NFT" />
        <meta property="og:description" content="Fresh-looking redesigned 3D Troll Face meme NFT with a greater sense of movement to be released and merged into web3 to offer new opportunities for memes and online content using blockchain technology" />
        <meta property="og:image" content={`${process.env.BASE_URL}${banner}`} />

  

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Hero />
        <About />
        <Story />
        <Roadmap />
        <Team />
        <Faqs />
        <Footer />
        <Copyright />
      </main>
    </>
  );
};

export default Home;
