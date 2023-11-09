import React from "react";

import styles from './header.module.scss'
import OpenMenu from "./OpenMenu";

function Header(){
  return (
      <div className={styles.container}>
          <img
              src={"public/img/cahlp-dark.png"}
              className={styles.logo}
              onClick={console.log("clicked logo")}
          />
          <button className={styles.toggleButton}>
              <span className={styles.dot}></span>
              <span className={`${styles.dot} ${styles.dotCenter}`}></span>
              <span className={styles.dot}></span>
          </button>
      </div>
  );
}

export default Header;