import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
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
import Banners from './assets/images/hero-bg.png'
const Home = () => {
  return (
    
    <div className={styles.container}>
       <Navbar />
      

      <Helmet>
        <meta property="og:title" content="Web3.D Troll Face NFT" />
        <meta property="og:description" content="3D Fresh-looking redesigned Troll Face Meme NFT with a greater sense of movement that released and merged into web3 to offer new opportunities for Memes and online contents using blockchain technology" />
        <meta property="og:image" content={Banners} />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
     

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
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

export default Home;
