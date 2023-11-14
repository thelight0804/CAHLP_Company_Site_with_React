import React from "react";

import styles from './header.module.scss'
import { useNavigate } from "react-router-dom";

function Header(){
  var [isModalOpen, setIsModalOpen] = React.useState(false); // modal open 여부
  var navigate = useNavigate(); // react router의 navigate 함수

  return (
      <>
        <div className={`${styles.header} ${isModalOpen && styles.modalOpen}`}>
          {isModalOpen ? (
            <img src={"public/img/cahlp-white.png"}
              className={styles.logo}
              onClick={() => { navigate("/"); }} />
          ) : (
            <img src={"public/img/cahlp-dark.png"}
              className={styles.logo}
              onClick={() => { navigate("/"); }} />
          )}
          <button
              className={styles.toggleButton}
              onClick={() => {isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);}}
          >
              <span className={styles.dot}></span>
              <span className={`${styles.dot} ${styles.dotCenter}`}></span>
              <span className={styles.dot}></span>
          </button>
        </div>
        {isModalOpen && <NavMenu isModalOpen={isModalOpen}/>}
      </>
  );
}

/**
 * 메뉴 버튼 클릭 시 다른 경로로 안내하는 모달 컴포넌트
 */
function NavMenu(props){
  return(
    <div className={`${styles.nav} ${props.isModalOpen && styles.modalOpen}`}>
      <button className={styles.navButton}
        onClick={console.log("우미 브랜드 (준비중)")}
      >우미 브랜드 (준비중)</button>
      <button className={styles.navButton}
        onClick={console.log("E-Service")}
      >E-Service</button>
    </div>
  );
}

export default Header;