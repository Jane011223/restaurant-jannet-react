import React, { useState } from "react";
import { decrement, increment, selectCount } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";

export default function Counter(props) {
  const menus = useSelector((state) => state.counter.menu);
  // console.log("props.id1", props.id1);
  // console.log("props.id2", props.id2);
  const count = menus[props.id1].products[props.id2].count;
  // console.log("count123", count);
  const dispatch = useDispatch();
  return (
    <div className="countBtn">
      <button
        className="plus-miusBtn"
        aria-label="Increment value"
        onClick={() =>
          dispatch(increment({ idx: props.id1, subIdx: props.id2 }))
        }
      >
        +
      </button>
      <p style={{ marginTop: "auto", marginBottom: "auto" }}>{count}</p>
      <button
        className="plus-miusBtn"
        aria-label="Dcrement value"
        onClick={() =>
          dispatch(decrement({ idx: props.id1, subIdx: props.id2 }))
        }
      >
        -
      </button>
    </div>
  );
}
