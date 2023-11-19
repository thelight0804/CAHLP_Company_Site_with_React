// useInView 코드 반복을 줄이기 위한 커스텀 훅

import { useInView } from 'react-intersection-observer';

const useCustomInView = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.7, // 화면의 70%가 보일 때 실행
    // TODO: [회의] trigger를 한번만 실행할건지, 여러번 실행할건지
    triggerOnce: false, // 화면에 나가면 false, 다시 들어오면 true
  });

  return { ref, inView, entry };
};

export default useCustomInView;