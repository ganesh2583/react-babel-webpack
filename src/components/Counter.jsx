// @flow

import React, {useState} from "react";

const Counter = () => {
  const [count: number, incrementCountByOne] = useState<number>(0);
  return (
    <div id="counterId">
      Counter = {count}
      <button
        onClick={() => {
          incrementCountByOne(count + 1);
        }}
        id="incrementBtn"
      >
        Click to increment
      </button>
    </div>
  );
};

export default Counter;
