import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.main}>
      <div className={styles.container}>
        
          <div className={styles.rightPanel}>
            <h2 className={styles.heading}>About Us</h2>
            <h3 className={styles.subHeading}>
            Once upon a time in the digital realm... ! 🤪
            </h3>
            <p className={styles.paragraph}>
            The Troll Face meme, also known as &quot;cool face&quot; or &quot;problem?&quot; meme, is a popular internet meme face often associated with the Rage Comic character format, 
            The Troll Face character feature a wide grin or sarcastic expression, typically used to indicate a sense of funny trolling or sarcasm on the internet for amusement.
            </p>
            <p className={styles.paragraph}>
            In a land filled with pixels and code, we embarked on a quest to bring laughter and joy to the internet.
            We chose the Troll Face as a starting point to evolve and take memes to the next era level by redesigning the meme character to a 3D version,
            adding depth, dimension, and a greater sense of movement to get a fresh-looking 3D Troll Face version that looks modern to be released 
             and merged into web3 using blockchain technology<br></br><br></br>In this new era, the decentralized and secure nature of Web3 offers new opportunities for memes and online content, that allows meme creators to have greater control and ownership over their content and the ability to monetize it.<br></br> This potentially provides a new source of income for meme creators and helps support the growth of online memes culture and preserve memes as an important part of online culture and history



            </p>
          </div>
        
          <div className={styles.imgContainer}>
        
            <Image className={styles.img}
              src="/assets/images/about-image-1.jpg"
              alt="Discord"
              width={1000}
              height={1000}
            />
          
        </div>
      </div>
    </section>
  );
};

export default About;
