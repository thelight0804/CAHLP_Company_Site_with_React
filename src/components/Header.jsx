import React from "react";

import styles from './header.module.scss'
import { useNavigate } from "react-router-dom";

function Header() {
  var [isModalOpen, setIsModalOpen] = React.useState(false); // modal open 여부
  var navigate = useNavigate(); // react router의 navigate 함수

  return (
      <>
        <div className={`${styles.header} ${isModalOpen && styles.modalOpen}`}>
          {isModalOpen ? (
            <img src={"public/img/cahlp-white.png"}
              className={styles.logo}
              onClick={() => {
                setIsModalOpen(false);
                navigate("/");
              }} />
          ) : (
            //TODO: [회의] 로고 흰색으로 고정
            <img src={"public/img/cahlp-dark.png"}
              className={styles.logo}
              onClick={() => {
                setIsModalOpen(false);
                navigate("/");
              }} />
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
        {isModalOpen && <NavMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} navigate={navigate}/>}
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
        onClick={()=>{
          props.setIsModalOpen(false);
          props.navigate("UmiBrand");
        }}
      >우미 브랜드 (준비중)</button>
      <button className={styles.navButton}
        onClick={()=> window.location.href = "https://login.office.hiworks.com/cahlp.kr" }
      >E-Service</button>
    </div>
  );
}

export default Header;