import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.main}>
      <div className={styles.container}>
       
          <h1 className={styles.heading}>
          </h1>
        
        
          <a
            href="https://discord.gg/bpwWendMr6"
            target="_blank"
            rel="noreferrer"
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

export default Hero;
