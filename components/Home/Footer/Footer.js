import React, { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";



const Footer = () => {
  
  return (
    <section id="contact" className={styles.main}>
      <div className={styles.left}>

        
          
              <h3 className={styles.heading}>Wanna join the community ?</h3>
          
          
          
            
             
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.reddit.com/r/TrollFaceNFT/"
                title="Join us on reddit"
              >
                <Image
                  alt="Join us on reddit"
                  src="/assets/images/boat-icon.png"
                  height={60}
                  width={60}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Internetmemes3"
                title="Follow us on twitter"
              >
                <Image
                  alt="Follow us on Twitter"
                  src="/assets/images/twitter-icon.png"
                  height={60}
                  width={60}
                />
              </a>
            

           
          
          
            
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/9aKQTy2QqH"
              title="Join our Discord Channel"
              className={styles.button}
            >
              <Image
                src="/assets/vectors/discord.svg"
                alt="Discord"
                width={25}
                height={25}
              />
              <span>Join Discord</span>
            </a>
         
        </div>
      
    </section>
  );
};

export default Footer;
