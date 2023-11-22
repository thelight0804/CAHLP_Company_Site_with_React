import React from "react";
import Slider from "react-slick";
import useCustomInView from './../hooks/useCustomInView';

import styles from './main.module.scss'
import {slideImages, supportImages} from './../../public/img/index'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  // useInView hook 설정
  const {ref: ref1, inView: inView1, entry: entry1} = useCustomInView();
  const {ref: ref2, inView: inView2, entry: entry2} = useCustomInView();
  const {ref: ref3, inView: inView3, entry: entry3} = useCustomInView();
  const {ref: ref4, inView: inView4, entry: entry4} = useCustomInView();
  const {ref: ref5, inView: inView5, entry: entry5} = useCustomInView();
  const {ref: ref6, inView: inView6, entry: entry6} = useCustomInView();
  const {ref: ref7, inView: inView7, entry: entry7} = useCustomInView();
  const {ref: ref8, inView: inView8, entry: entry8} = useCustomInView();
  const {ref: ref9, inView: inView9, entry: entry9} = useCustomInView();
  const {ref: ref10, inView: inView10, entry: entry10} = useCustomInView();
  const {ref: ref11, inView: inView11, entry: entry11} = useCustomInView();


  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <video muted autoPlay loop>
          <source src={"./../../public/video/via.mp4"} type="video/mp4" />
        </video>
        <div className={styles.mainText}>
          {/* TODO: [회의] 글자 색 가독성으로 인한 변경 */}
          <h2>" 누구나 마음 편히 이색반려동물을 키울수 있는 그날까지."</h2>
          <h3>
            누구나, 언제, 어디서든, 관상어, 육상생물들도 안전하고, <br/>
            편리하게 키울수 있는 세상을 만들고 싶습니다.
          </h3>
        </div>
      </div>

      <div className={styles.content}>
        <div ref={ref1} className={`${styles.contentBox} ${inView1 ? styles.inViewBox : styles.outViewBox}`}>
          <SlideImage styles={styles}/>
          <h2>
            "우리는 이런 고민을 했습니다." <br/>
          </h2>
          <h3>
            왜? 고양이, 강아지를 위한 반려동물제품은 많지만, <br/>
            이색반려동물을 위한 제품과 서비스는 없을까?
          </h3>
        </div>

        <div ref={ref2} className={`${styles.contentBox} ${inView2 ? styles.inViewBox : styles.outViewBox}`}>
          <img src="./../../public/img/cahlp-dark.png" />
          <h3>
            우리는 이색반려동물을 키움에 있어 <br/>
            정보와 데이터가 발목을 잡아서는 안된다고 생각합니다.
          </h3>
        </div>
        
        <div ref={ref3} className={`${styles.contentBox} ${inView3 ? styles.inViewBox : styles.outViewBox}`}>
          <h2>CAHLP(캘프) 컴퍼니는</h2>
          <h3>이색반려동물을 직접키우고,</h3>
          <h3>겪었던 문제를 해결하기 위해 모였고,</h3>
          <h3>그 과정에서 정말 큰 기회를 발견했습니다.</h3>
        </div>

        <h1 className={styles.paragraph}>미션, 비전 & 핵심 가치</h1>
        <div className={styles.bottomBorder}/>
        <div ref={ref4} 
          className={`${styles.contentBox} ${inView4 ? styles.inViewBox : styles.outViewBox}`}
          style={{marginTop: '2rem'}}
        >
          <h1 className={styles.highlight}>[ 미션 MISSION ]</h1>
          <p>우리의 조직이 왜 존재하는가</p>
          <h3 style={{marginTop: '2rem'}}>
            “누구나 마음 편히 이색반려동물을 <br/>
            키울수 있는 그날까지 만들어 가는것”
          </h3>
        </div>

        <div ref={ref5}
          className={`${styles.contentBox} ${styles.mission} ${inView5 ? styles.inViewBox : styles.outViewBox}`}
          style={{marginTop: '2rem'}}
        >
          <h1 className={styles.highlight}>[ 비전 VISION ]</h1>
          <p>우리는 어떤 미래를 그리고 있는가</p>
          <h3 style={{marginTop: '2rem'}}>
            “전세계에 있는 누구나 이색반려동물을 키울때 <br/>
            가장 먼저 떠올리고 찾는 존재가 되는것”
          </h3>
        </div>

        <div ref={ref6} className={`${styles.contentBox} ${inView6 ? styles.inViewBox : styles.outViewBox}`}>
          <h2>CAHLP(캘프) 컴퍼니는</h2>
          <h3>
            100년 이상 동안의 만들어진 문제를 <br/>
            3년안에 창의적이고, 도전적인 솔루션과 <br/>
            혁신적인 기술로 혁신하고, 10년 뒤는 <br/>
          </h3>
          <h2>
            우리가 만든 세상이 더 나은 미래
          </h2>
          <h3>
            로 나아갈 수 있도록 전진 할것입니다.
          </h3>
        </div>

        <h1 className={styles.paragraph}>우리가 걸어온 길은</h1>
        <div className={styles.bottomBorder}/>
        <div 
          ref={ref7}
          className={`${styles.contentBox} ${inView7 ? styles.inViewBox : styles.outViewBox}`}
          style={{marginTop: '2rem', marginBottom: '2rem'}}
        >
          <ul className={styles.applyList}>
            <li className={styles.project}>
              <h3 className={styles.projectName}>특허 출원</h3>
              <h3 className={styles.projectCount}>2</h3>
            </li>
            <li className={styles.project}>
              <h3 className={styles.projectName}>디자인 출원</h3>
              <h3 className={styles.projectCount}>2</h3>
            </li>
            <li className={styles.project}>
              <h3 className={styles.projectName}>상표 출원</h3>
              <h3 className={styles.projectCount}>2</h3>
            </li>
          </ul>
        </div>
        <p style={{
          textAlign: 'right',
          margin: '1rem 2rem',
          color: '#ccc'
        }}>(2023.10.20일 기준)</p>
        <History2023 />
        <History2022 />

        <div ref={ref8} className={`${styles.contentBox} ${inView8 ? styles.inViewBox : styles.outViewBox}`}>
          <h1 className={styles.highlight} style={{fontSize: '3.5rem'}}>Team CAHLP</h1>
          <p>우리는 팀이기에 불가능이란 없습니다</p>
        </div>
        <h1 className={styles.paragraph}>CAHLP 컴퍼니의 조직문화</h1>
        <div className={styles.bottomBorder}/>
        <div ref={ref9} 
          className={`${styles.contentBox} ${inView9 ? styles.inViewBox : styles.outViewBox}`}
          style={{marginTop: '2rem'}}
        >
          <h1 className={styles.highlight}> &lt; 언제나 강조되는 핵심 키워드 &gt;</h1>
          <h2>#팀 #소통 # 책임과 존중</h2>
        </div>
        <div ref={ref10} 
          className={`${styles.contentBox} ${inView10 ? styles.inViewBox : styles.outViewBox}`}
          style={{marginTop: '2rem'}}
        >
          <h1 className={styles.highlight}> &lt; 주요문화 &gt;</h1>
          <h2>
            끊임없는 소통 <br/>
            책임과 존중 <br/>
            수평적인 조직문화 <br/>
            자발적 동기부여 <br/>
            빠른 실행력 <br/>
          </h2>
        </div>

        <h1 className={styles.paragraph}>미디어 속 CAHLP 컴퍼니</h1>
        <div className={styles.bottomBorder}/>
        <Media />

        <div ref={ref11} className={`${styles.contentBox} ${inView11 ? styles.inViewBox : styles.outViewBox}`}>
          <h1 className={styles.highlight} style={{fontSize: '3.5rem'}}>Supports</h1>

        </div>
      </div>


      <div className={styles.footer}>
        
      </div>
    </div>
  )
}


/**
 * 슬라이더 이미지 컴포넌트
 */
function SlideImage({styles}) {
    // 슬라이더 속성 설정
    var SliderSettings = {
      dots: false, // 점 표시
      infinite: true, // 무한 반복
      speed: 800, // 이미지 넘기는 속도
      slidesToShow: 1, // 한번에 보여줄 이미지 개수
      slidesToScroll: 1, // 한번에 넘길 이미지 개수
      autoplay: true, // 자동 넘김
      autoplaySpeed: 4000, // 자동 넘김 속도
    };
  return (
    <Slider {...SliderSettings}>
      {slideImages.map((image, i)=>{
          return (
            <div key = {i} >
              <img src={image} alt="slideImage" className={styles.slideImage}/>
            </div>
          )
        })
      }
    </Slider>
  );
}

/**
 * 2023 약사 컴포넌트
 */
function History2023() {
  return (
    <div className={styles.history}>
      <div className={styles.historyYear}>
        <h3>2023</h3>
        <p>사업 시작</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.09</h3>
        <p>부.울.경 지방 중소벤처기업청- 2023 부스타락셀 엑셀러레이팅 지원사업 선정</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.08</h3>
        <p>부산경제진흥원 - 부산시 기술창업 인큐베이팅 지원사업 우수기업 선정</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.07</h3>
        <p>SCI평가정보 - 우수기술기업인증 (T6-)</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.07</h3>
        <p>학생 창업유망팀 300 (2023) - 성장 트랙 최종 선정</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.06</h3>
        <p>자체 온프레미스 서버 아키텍쳐 구축</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.06</h3>
        <p>동의대학교 창업교육센터 소속 - 창업빌리지 입주</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.05</h3>
        <p>창업진흥원 - 창업중심대학 예비 선정</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.04</h3>
        <p>부산경제진흥원 - 부산시 기술창업 인큐베이팅 지원사업 선정</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.03</h3>
        <p>K-Global 창업멘토링 프로그램 21기 멘티 선정</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.03</h3>
        <p>2023 동남권 예비 창업자를 위한 네트워킹 데이 (동의대학교 Linc3.0) 공동 행사 개최</p>
      </div>
  </div>
  );
}

/**
 * 2022 약사 컴포넌트
 */
function History2022() {
  return (
    <div className={styles.history}>
      <div className={styles.historyYear}>
        <h3>2022</h3>
        <p>MVP 검증</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2022.12</h3>
        <p>부산경제진흥원 - 부산창업카페 대학생 IR 데모데이 최우수상 수상</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2022.11</h3>
        <p>산학협력 EXPO 제품전시회 참가</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2023.07</h3>
        <p>SCI평가정보 - 우수기술기업인증 (T6-)</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2022.08</h3>
        <p>학생 창업유망팀 300 (2022)- 성장 트랙 최종 선정</p>
      </div>
      <div className={styles.historyContent}>
        <h3>2022.03</h3>
        <p>이색반려동물을 위한 스마트 IOT 관리 키트 프로젝트 시작</p>
      </div>
  </div>
  );
}

/**
 * 미디어&뉴스 컴포넌트
 */
function Media() {
  // 미디어 아이템
  const mediaItems = [
    {
      title: '인도네시아 통신원 연결',
      detail: '[개천절 LIVEㅣ부산시 기술창업 인큐베이팅 지원사업ㅣ최인수 캘프대표]',
      date: '2023-10-03 | 부산영어방송 BeFM',
      link: 'https://www.youtube.com/watch?v=XqSDOBbvzQE&t=1534s'
    },
    {
      title: '캘프 “성장하는 관상어 시장, 기술로 사로잡고 싶어요”',
      detail: '[2023 부산 기술창업기업]',
      date: '2023-09-10 | 부산일보',
      link: 'https://www.busan.com/view/busan/view.php?code=2023091018103185349'
    },
    {
      title: '부기 드디어 글로벌 기업에 입사..?😲 부기의 [구글 스타트업 스쿨] 입학기!',
      detail: '[부기가간다]',
      date: '2023-06-08 | 부기튜브',
      link: 'https://www.youtube.com/watch?v=hhqS0FubHSA&t=237s'
    },
    {
      title: '“서울 안 가도 돼”…구글한테 직접 배운다',
      detail: '[부산MBC 뉴스]',
      date: '2023-04-25 | 부산MBC 뉴스',
      link: 'https://www.youtube.com/watch?v=9u5lybcYZ-k'
    },
    {
      title: '동의대, ‘2022 학생 창업유망팀 300 경진대회’ 7개 팀 선정',
      detail: '[아시아경제]',
      date: '2022-10-20 | 아시아경제',
      link: 'https://view.asiae.co.kr/article/2022102012070270164'
    }
  ]
  return (
    <>
      {mediaItems.map((item, i) => { // 배열을 반복하면서 JSX를 생성합니다.
        return (
          <section className={styles.media} key={i}>
            <a 
              className={styles.mediaItem}
              onClick={() => window.open(`${item.link}`, '_blank')}
            >
              <h2 className={styles.mediaTitle}>{item.title}</h2>
              <h3 className={styles.mediaDetail}>{item.detail}</h3>
              <p className={styles.mediaDate}>{item.date}</p>
            </a>
          </section>
        )
      })}
    </>
  );
}

export default Main;