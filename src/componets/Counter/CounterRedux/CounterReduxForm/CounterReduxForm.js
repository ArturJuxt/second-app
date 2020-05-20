import React from "react";
import { useDispatch } from 'react-redux';
import { inc, dec } from '../Actions/Actions';
import "./CounterReduxForm.css";
import { useSelector } from 'react-redux';

const getFirstUser = (store) => store.counter.count;

const CounterReduxForm = () => {
    const dispatch = useDispatch();
    const state = useSelector(getFirstUser);

    return (
    <div className="counter_redux_form">
        <h2>CounterRedux</h2>
        <button className="class_btn" onClick={() => dispatch(dec())}>
        -
        </button>
        <span className="class_span">{state}</span>
        <button className="class_btn" onClick={() => dispatch(inc())}>
        +
        </button>
    </div>
    );
};

export default CounterReduxForm;
