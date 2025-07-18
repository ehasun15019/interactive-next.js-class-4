"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const buttonHandle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>This is counter {count}</p>
      <button onClick={buttonHandle}>Increment by 1</button>
    </div>
  );
};

export default Counter;
