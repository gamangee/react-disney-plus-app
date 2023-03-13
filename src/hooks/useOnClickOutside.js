import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  // ref 요소 외부를 클릭하면 handler 함수를 호출해서 모달을 닫기
  const listener = (e) => {
    // ref가 아예 등록되어 있지 않을 때
    // 클릭하는 곳이 modal class를 가진 요소 안(in)인지 밖(out)인지 확인
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    handler();
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
