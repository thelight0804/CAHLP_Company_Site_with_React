import React from "react";
import Slider from "react-slick";

import styles from './main.module.scss'
import slideImages from './../../public/img/index'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
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
        <div className={styles.contentBox}>
          <SlideImage styles={styles}/>
          <h2>
            "우리는 이런 고민을 했습니다." <br/>
            왜? 고양이, 강아지를 위한 반려동물제품은 많지만, <br/>
            이색반려동물을 위한 제품과 서비스는 없을까?
          </h2>
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
      autoplaySpeed: 5000, // 자동 넘김 속도
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