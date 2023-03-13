import React, { forwardRef, useRef, useState } from 'react';
import ChildComponent from './ChildComponent';

const Test = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} a={1} />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default Test;

ChildComponent = (props, ref) => {
  return <input ref={ref} />;
};

forwardRef(ChildComponent);
