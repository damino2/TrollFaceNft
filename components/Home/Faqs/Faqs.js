import React, { useState } from "react";
import Image from "next/image";
import styles from "./Faqs.module.css";

const faqs = [
  {
    title: "What is Internet Memes ?",
    content:
      "An Internet memes is one of the biggest internet phenomena of all time , they are a form of internet culture and are a powerful way for people to share ideas and content with others, It's a concept , image , gif or a video and can contain a message , story or scenario that are created and shared by users via the internet , They can be anything from a humorous image with a caption to a scenario that becomes a sensation , These memes are often created with the intent of being shared and spread among a large online community and can be used to express ideas, opinions, or just to make people laugh for fun. ",
  },
  {
    title: "What is Rage Comics Memes ?",
    content:
      "Rage Comics are a specific type of internet meme that originated on the Internet by online communities, The Comics feature cartoon-like character designs, each with their own distinct facial expressions and personalities, and are usually captioned with a humorous or relatable statement or scenario , They use a combination of drawings and text to tell a story or make a joke. Rage comics have been popular on the internet for many years and continue to be widely shared and enjoyed. As with other memes, Rage Comics characters are often used to express a particular emotion or point of view, and can be used to comment on social trends , any story or scenario.",
  },
  {
    title: "What is Troll Face and how is it related to Rage Comics Memes?",
    content:
      "The Troll Face meme, also known as 'cool face' or 'problem?' meme, is a popular internet meme image often associated with the Rage Comic character format, The Troll Face character feature a wide grin or sarcastic expression, typically used to indicate a sense of funny trolling or sarcasm on the internet for amusement",
  },
  {
    title: "What is a Non-Fungible token ?",
    content:
      "An NFT, a non-fungible token, is a digital certificate built on the blockchain that guarantees ownership of a unique digital asset, ,as the NFTs paradigm makes it impossible for one non-fungible token to be equal to another identification and metadata that distinguishes them from each other, making each token unique and irreplaceable, As they are digital representations of assets, each token contains a unique, non-transferable identity to distinguish it from other tokens. ",
  },
  
  {
    title: "What is the blockchain ?",
    content:
      "Blockchain technology is the very foundation of cryptocurrency development. A blockchain is similar to a digital book of records. it's a distributed ledger that is shared among various computers all over the world that stores transactions as they occur. Transactions have to be validated on the various computers before they are recorded. Also, as the records exist across several nodes, they cannot be tampered with and can be viewed by anyone.",
  },
  
];

const Faqs = () => {
  const [active, setActive] = useState(null);

  const onClickHandle = (value) => {
    if (value === active) {
      setActive(null);
    } else {
      setActive(value);
    }
  };

  return (
    <section id="faqs" className={styles.main}>
    
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h3 className={styles.heading}>
            FAQs
            
          </h3>
        </div>
        <div className={styles.faqsHolder}>
          {faqs.map((faq, index) => (
           
              <div className={styles.faq} key={index}>
                <div
                  className={styles.faqHeaderHolder}
                  onClick={() => onClickHandle(index)}
                >
                  <Image
                    src={`/assets/vectors/faq-smile-${
                      active === index ? "open" : "close"
                    }.svg`}
                    alt="Discord"
                    width={25}
                    height={25}
                  />

                  <div className={styles.faqHeader}>{faq?.title}</div>
                </div>

                <div
                  className={`${styles.faqContent}
                ${active === index ? styles.displayFaqContent : null}
                `}
                >
                  {faq?.content}
                </div>
              </div>
            
            
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Faqs;
