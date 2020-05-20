import React from "react";
import './Counter.css';
import CounterClass from './CounterClass/CounterClass';
import CounterConect from './CounterConect/CounterConect';
import CounterContext from './CounterContext/CounterContext';
import CounterHook from './CounterHook/CounterHook';
import CounterRedux from './CounterRedux/CounterRedux';
import CounterSelector from './CounterSelector/CounterSelector';

const Counter = () => {
  return (
    <div className="counter">
      <CounterClass />
      <CounterConect />
      <CounterContext />
      <CounterHook />
      <CounterRedux />
      <CounterSelector />
    </div>
  );
};

export default Counter;
