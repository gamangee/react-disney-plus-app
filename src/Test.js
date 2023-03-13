import React, { useEffect, useRef, useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVariable = 0;

  const renderCountRef = useRef(0);
  const [value, setValue] = useState('');

  // 종속성 배열이 없으면 어떤 state든 변경되면 useEffect가 실행
  useEffect(() => {
    renderCountRef.current++;
  });

  const increaseState = () => {
    setCount((prev) => prev + 1);
  };

  const increaseRef = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  const increaseVariable = () => {
    countVariable++;
    console.log('countVariable', countVariable);
  };

  return (
    <div>
      <p>Ref {countRef.current}</p>
      <p>State {count}</p>
      <p>Variable {countVariable}</p>
      <p> I rendered {renderCountRef.current} times</p>

      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <div>
        <button onClick={increaseVariable}>Variable +</button>
        <button onClick={increaseRef}>Ref +</button>
        <button onClick={increaseState}>State + </button>
      </div>
    </div>
  );
};

export default Test;
