import React from "react";
import styles from './header.module.scss'

function Header(){
  return (
    <div>
      <img src={"public/img/cahlp-dark.png"} width="50%"/>
      <button className={styles.toggleButton}>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.dotCenter}`}></span>
        <span className={styles.dot}></span>
      </button>
    </div>
  );
}

export default Header;