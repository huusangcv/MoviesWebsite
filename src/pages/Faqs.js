import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";
const FAQ = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h1>Counter {counter}</h1>
                <button onClick={() => dispatch(increment(5))}>
                    Increment
                </button>
                <button onClick={() => dispatch(decrement(5))}>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default FAQ;
