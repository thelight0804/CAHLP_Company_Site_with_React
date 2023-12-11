// footer 컴포넌트
import styles from './footer.module.scss'
import instagram from '../../public/img/instagram_logo.svg' // 인스타그램 로고  이미지 경로
import kakao from '../../public/img/kakao-cahnel.png' // 카카오 로고 이미지 경로

function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.footerContent}>대표: 최인수 | 상호명: 캘프(CAHLP)</p>
      <p className={styles.footerContent}>사업자등록번호: 857-20-02004</p>
      <p className={styles.footerContent}>주소: 부산광역시 부산진구 엄광로 176 정보공학관 3층 창업빌리지</p>
      <p className={styles.footerContent}>채팅 : 카카오톡 채널 (아이디 cahlp) 홈페이지 하단 오른쪽 카카오채널 버튼</p>
      <p className={styles.footerContent}>이메일 : support@cahlp.kr</p>
      <div className={styles.snsContainer}>
        <img 
          className={styles.snsImage}
          src={instagram} 
          onClick={()=>window.open('https://www.instagram.com/official_cahlp_team', '_blank')}
        />
        <img 
          className={styles.snsImage}
          src={kakao} 
          onClick={()=>window.open('http://pf.kakao.com/_xnkytb', '_blank')}
        />
      </div>
      <p className={`${styles.footerContent} ${styles.copyright}`}>Copyright © 2023. CAHLP Company. All rights reserved</p>
    </div>
  );
}

export default Footer;