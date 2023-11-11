import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './header.module.scss'
import Main from "../pages/Main";

function Header(){
  let navigate = useNavigate();

  return (
      <div className={styles.container}>
          <img
              src={"public/img/cahlp-dark.png"}
              className={styles.logo}
              onClick={()=>{navigate("/");}}
          />
          <button 
            className={styles.toggleButton}
            onClick={()=>{console.log('click!')}}
          >
              <span className={styles.dot}></span>
              <span className={`${styles.dot} ${styles.dotCenter}`}></span>
              <span className={styles.dot}></span>
          </button>
      </div>
  );
}

export default Header;