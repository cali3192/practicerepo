import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("count", count);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      count: {count}
    </div>
  );
};

export default Counter;
