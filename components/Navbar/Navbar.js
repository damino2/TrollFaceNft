import React, {UseState} from "react";
import Image from "next/image";
import {Link} from 'react-scroll';
import RenderMobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.linksHolder}>
  <li>
    <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
      <span role="img" aria-label="Cool Guy">😎</span> About Us
    </Link>
  </li>
</ul>
<ul className={styles.linksHolder}>
  <li>
    <Link to="roadmap" spy={true} smooth={true} offset={-31} duration={500}>
      <span role="img" aria-label="Road">🛣️</span> Roadmap
    </Link>
  </li>
</ul>
<ul className={styles.linksHolder}>
  <li>
    <Link to="team" spy={true} smooth={true} offset={-110} duration={500}>
      <span role="img" aria-label="Team">👥</span> Team
    </Link>
  </li>
</ul>
<ul className={styles.linksHolder}>
  <li>
    <Link to="faqs" spy={true} smooth={true} offset={-33} duration={500}>
      <span role="img" aria-label="Question">❓</span> FAQs
    </Link>
  </li>
</ul>


        <div className={styles.rightContainer}>
          <a
            href="https://docs.trollfacenft.com/"
            target="_blank"
            rel="noreferrer"
            title="Go to Whitepaper"
            className={`${styles.mintButton} ${styles.funnyButton}`}
          >
            Read Whitepaper
          </a>

          <div className={styles.socialHolder}>
           

            <a
              href="https://www.reddit.com/r/TrollFaceNFT/"
              title="Join Reddit"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Join Reddit"
                src="/assets/images/boat-icon.png"
                height={40}
                width={40}
              />
            </a>

            <a
              href="https://twitter.com/Internetmemes3"
              title="Follow us on Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Follow us on Twitter"
                src="/assets/images/twitter-icon.png"
                height={40}
                width={40}
              />
            </a>
          </div>

          <a
            href="https://discord.gg/9aKQTy2QqH"
            title="Join our Discord Channel"
            className={styles.button}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/vectors/discord.svg"
              alt="Discord"
              width={20}
              height={20}
            />
            <span>Join Discord</span>
          </a>
        </div>
      </div>

      <div className={styles.mobileMenu}>
        <div className={styles.mobileMenuContent}>
          <RenderMobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
