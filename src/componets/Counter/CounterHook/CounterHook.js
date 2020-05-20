import React, { useState } from "react";
import "./CounterHook.css";

const CounterHook = () => {
  const [count, setCount] = useState(0);
  const dec = () => setCount(count - 1);
  const inc = () => setCount(count + 1);

  return (
    <div className="counterhook">
      <h2>CounterHook</h2>
      <button className="class_btn" onClick={dec}>
        -
      </button>
      <span className="class_span">{count}</span>
      <button className="class_btn" onClick={inc}>
        +
      </button>
    </div>
  );
};

export default CounterHook;
