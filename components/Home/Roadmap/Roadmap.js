import Image from "next/image";
import styles from "./Roadmap.module.css";
const Roadmap = () => {
  return (
    <div id="roadmap" className={styles.main}>
      <div className={styles.headingHolder}>
        <h1 className={styles.heading}>
          ROADMAP
        </h1>
      </div>
      
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.top}></h2>

            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.leftAlign}`}>
                <div>
                  <h3>Phase 2: Marketing promotion to spread the news</h3>
                  <p>
                    The quality of
                    the art and the large strong community consisting of collaboration managers, promoters and marketing experts are ready to spread the news of the memes bridge web3 NFT and grow the project
                  </p>
                </div>

                
              </div>
            </div>

            <h2 className={styles.leftSpacer}></h2>

            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.leftAlign}`}>
                <div>
                  <h3>Phase 4: Let&apos;s Visit Meta</h3>

                  <p>
                  Through professional graphic design tools, we will develop the design of Troll Face 3D NFT to be compatible with Augmented Reality which will be deployed via Metafilters, and allow to showcase the Troll Face NFT on internet spreading the web3 memes
<br></br><br></br>
                  Following this Phase, we will enable community suggestions and votes for further development of the collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.right}>
            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.rightAlign}`}>
                <div>
                  
                </div>

                <div>
                  <h3>Phase 1: Launch initiated</h3>
                  <p>
                    
Our number one priority is to deliver the highest quality NFTs possible. 
<br></br>Each TrollFace design undergoes into creative process and quality control to bring us incredible 3D art.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.rightSpacer}></div>

            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.rightAlign}`}>
                <div>
                  
                </div>

                <div>
                  <h3>Phase 3: Let&apos;s conquer the web3</h3>
                  <p>
                  Our NFTs will be more than just a digital image, they&apos;re special type of memes NFT
                    of high quality 3D design that will gives you the
                    
                  ability to showcase the favorite memes NFT the way we want on web3, and to ensure owning these NFT , We are enabled to join the whitelist to guarantee Minting spot that will take place in two phases: the first phase will be for Whitelist presale, which will be 50% cheaper than the second phase for public sale
                  <br></br>
                  
           
                  </p>
                  
                  
          <a
            href="https://heymint.xyz/web3d-trollface-nft"
            target="_blank"
            rel="noreferrer"
            title="Go to Premint dashboard"
            className={styles.mintButton}
          >
           Join whitelist
          </a>
         
          
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Roadmap;
