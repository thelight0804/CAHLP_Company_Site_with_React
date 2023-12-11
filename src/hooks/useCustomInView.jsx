// useInView 코드 반복을 줄이기 위한 커스텀 훅

import { useInView } from 'react-intersection-observer';

const useCustomInView = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.7, // 화면의 70%가 보일 때 실행
    triggerOnce: true, // 한번만 실행
  });

  return { ref, inView, entry };
};

export default useCustomInView;