import styles from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.copyRightText}>
          Copyright 2023. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
