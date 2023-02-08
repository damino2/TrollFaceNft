import Image from "next/image";
import styles from "./Story.module.css";

const Story = () => {
    return (
      <section id="story" className={styles.main}>
        
          <div className={styles.container}>
            <div className={styles.leftHolder}>
              
                <Image className={styles.img}
                    src="/assets/images/gif.gif"
                    alt="Discord"
                    width={800}
                    height={800}
                />
              
            </div>
  
            <div className={styles.rightHolder}>
             
                <div className={`${styles.teamCard} ${styles.topCard}`}>
                  <div className={styles.topCardContent}>
                    <p className={styles.heading}>Our collection</p>
                    <h3 className={styles.subHeading}>
                      3D version meme Troll Face NFT for web3 !
                    </h3>
                    <p className={styles.paragraph}>
                    Based on our 3D Troll Face, we designed compatible 3D layers for the 3D Troll Face character, which used to create a 3D NFT collection consist of 6969 unique NFT meme characters, making it the perfect truly modern meme symbol NFT that could be collected, traded, and earn benefits with the utility behind holding the NFT in the long term. 
                    </p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://discord.com"
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
                </div>
              
            </div>
          </div>
        

                </section>
  );
};

export default Story;
