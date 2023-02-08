import React, { useState } from "react";
import {Link} from 'react-scroll';
import Image from "next/image";
import styles from "./MobileMenu.module.css";
import {CgMenuRound} from 'react-icons/cg'
import { CgCloseO } from "react-icons/cg";

const MobileMenu = () => {

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };


  const hamburgerIcon = <CgMenuRound className={styles.Hamburger} size={54} color='white' onClick={() => setNavbarOpen(!isNavbarOpen)}/>
  const closeIcon = <CgCloseO className={styles.Hamburger} size={54} color='white' onClick={() => setNavbarOpen(!isNavbarOpen)}/>

  

  return (
    <nav role="navigation" >
      
      
      <div className={styles.menuToggle} >
      
      
      {isNavbarOpen && (
           <ul className={styles.menu} >
         
           <li  >
                   <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar} > About us </Link>
                 </li>
                 <li  >
                   <Link to="roadmap" spy={true} smooth={true} offset={-31} duration={500} onClick={closeNavbar} > Roadmap </Link>
                 </li>
                 <li  >
                   <Link to="team" spy={true} smooth={true} offset={-110} duration={500} onClick={closeNavbar} > Team </Link>
                 </li>
                 <li >
                   <Link to="faqs" spy={true} smooth={true} offset={-33} duration={500} onClick={closeNavbar} > Faqs </Link>
                 </li>
                 
                 <li  >
                 <a style={{marginRight: '10px'}}
              href="https://twitter.com/Internetmemes3"
              title="Follow us on Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Follow us on Twitter"
                src="/assets/images/twitter-icon.png"
                height={60}
                width={60}
              />
            </a>
            
            
            <a
              href="https://www.reddit.com/r/TrollFaceNFT/"
              title="Join Reddit"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Join Reddit"
                src="/assets/images/boat-icon.png"
                height={60}
                width={60}
              />
            </a>
            </li>
                 
                 <li>
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
              width={40}
              height={22}
            />
           <p> Join Discord </p>
          </a>
                 </li>
             </ul>)}
           
      </div>
      {isNavbarOpen ? closeIcon : hamburgerIcon }
    </nav>
  );
};

export default MobileMenu;
