import React from "react";

import styles from './main.module.scss'

function Main(){
  return (
    <div className="container">
      <div className="header">
        <video muted autoPlay loop>
          <source src={"./../../public/video/via.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="content">

      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default Main;