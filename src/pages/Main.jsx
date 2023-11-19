import React from "react";
import Slider from "react-slick";
import useCustomInView from './../hooks/useCustomInView';

import styles from './main.module.scss'
import slideImages from './../../public/img/index'
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

  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <video muted autoPlay loop>
          <source src={"./../../public/video/via.mp4"} type="video/mp4" />
        </video>
        <div className={styles.mainText}>
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

        <h1 style={{textAlign: 'center'}}>미션, 비전 & 핵심 가치</h1>
        <div className={styles.bottomBorder}/>
        <div ref={ref4} 
          className={`${styles.contentBox} ${inView4 ? styles.inViewBox : styles.outViewBox}`}
          style={{marginTop: '2rem'}}
        >
          <h1 className={styles.missionHeader}>[ 미션 MISSION ]</h1>
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
          <h1 className={styles.missionHeader}>[ 비전 VISION ]</h1>
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
      </div>

      <h1 style={{textAlign: 'center'}}>우리가 걸어온 길은</h1>
      <div className={styles.bottomBorder}/>
      <div 
        ref={ref7}
        className={`${styles.contentBox} ${inView7 ? styles.inViewBox : styles.outViewBox}`}
        style={{marginTop: '2rem'}}
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
        <p style={{
          textAlign: 'right',
          margin: '1rem 2rem',
          color: '#ccc'
        }}>(2023.10.20일 기준)</p>
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

export default Main;