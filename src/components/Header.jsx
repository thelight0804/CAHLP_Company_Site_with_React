import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './header.module.scss'
import logoSrc from './../../public/img/cahlp-dark.png' // 로고 이미지 경로

function Header() {
  var [isModalOpen, setIsModalOpen] = useState(false); // modal open 여부
  var navigate = useNavigate(); // react router의 navigate 함수
  var [scroll, setScroll] = useState(false); // 스크롤 상태 여부
  var [initialLoad, setInitialLoad] = useState(true); // 페이지 로드 상태 여부

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => { // clean up
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    setInitialLoad(false); // 스크롤 이벤트가 발생하면 초기 로드 상태를 false로 설정
    // 스크롤이 아래로 내려갈 때 scroll 값 변경
    if (window.scrollY > 0) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
  }

  return (
      <>
        <div className={`${styles.header} ${isModalOpen && styles.headerModalOpen}`}>
          <div className={`${styles.background} ${initialLoad ? '' : (scroll ? styles.inBox : styles.outBox)}`}></div>
              <img src={logoSrc}
                className={styles.logo}
                onClick={() => {
                  setIsModalOpen(false);
                  navigate("/");
                }} />
            <button
                className={styles.toggleButton}
                onClick={() => {isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);}}
            >
                <span className={styles.dot}></span>
                <span className={`${styles.dot} ${styles.dotCenter}`}></span>
                <span className={styles.dot}></span>
            </button>
            <button 
              className={`${styles.headerButton} ${scroll && styles.headerButtonBlack}`} 
              onClick={()=>{
                alert("준비중입니다.");
                // TODO: UmiBrand 페이지 개발 할 때 아래 주석을 해제하세요.
                // navigate("UmiBrand");
              }}>
              우미 브랜드 (준비중)
            </button>
            <button 
              className={`${styles.headerButton} ${scroll && styles.headerButtonBlack}`}
              onClick={()=> window.location.href = "https://login.office.hiworks.com/cahlp.kr" }>
              E-Service
            </button>
          </div>
        {/* {isModalOpen && <NavMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} navigate={navigate}/>} */}
        <NavMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} navigate={navigate} />
      </>
  );
}

/**
 * 메뉴 버튼 클릭 시 다른 경로로 안내하는 모달 컴포넌트
 */
function NavMenu(props){
  return(
    <div className={`${styles.nav} ${props.isModalOpen && styles.modalOpen}`}>
      <button className={`${styles.navButton} ${props.isModalOpen && styles.showButton}`}
        onClick={()=>{
          props.setIsModalOpen(false);
          alert("준비중입니다.");
          // UmiBrand 페이지 개발 할 때 아래 주석을 해제하세요.
          // props.navigate("UmiBrand");
        }}
      >우미 브랜드 (준비중)</button>
      <button className={`${styles.navButton} ${props.isModalOpen && styles.showButton}`}
        onClick={()=> window.location.href = "https://login.office.hiworks.com/cahlp.kr" }
      >E-Service</button>
    </div>
  );
}

export default Header;