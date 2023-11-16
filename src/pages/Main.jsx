import React from "react";

import styles from './main.module.scss'
import slideImages from './../../public/img/index'

function Main(){


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <video muted autoPlay loop>
          <source src={"./../../public/video/via.mp4"} type="video/mp4" />
        </video>
        <div className={styles.mainText}>
          <h2>" 누구나 마음 편히 이색반려동물을 키울수 있는 그날까지."</h2>
          <h3>누구나, 언제, 어디서든, 관상어, 육상생물들도 안전하고, <br/>편리하게 키울수 있는 세상을 만들고 싶습니다.</h3>
        </div>
      </div>
      <div className={styles.content}>
        <img src={slideImages[0]} />
        <h2>"우리는 이런 고민을 했습니다."</h2>

      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}

export default Main;