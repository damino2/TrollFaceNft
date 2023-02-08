import Image from "next/image";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <section id="team" className={styles.main}>
      <div className={styles.teamContainer}>
        <div className={styles.headerContainer}>
          
            <h2 className={styles.teamHeader}>The Team</h2>
            <p className={styles.teamDescription}>
            
            </p>
          
          
        </div>
        
          <div className={styles.teamSection}>
            <div className={styles.teamCard}>
              <div>

              </div>

              <div style={{ paddingLeft: 22 }}>
                <h4 className={styles.cardHeading}></h4>
                <p className={styles.cardDescription}>
                Browsing Internet memes, particularly OG Rage Comics memes, are a huge passion for the founder, <br></br>Since 2016, he has been trading cryptocurrency and learning blockchain development <br></br>His participation in the NFT space began two years ago as a developer, artist and flipper 
              and with a community team of +20 members managing collaborations , moderators and marketing experts, they built and developed Web3.D Troll Face NFT deployed on solana blockchain
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default Team;
