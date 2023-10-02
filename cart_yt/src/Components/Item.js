import React from "react";

export default function Item(props) {
  return (
    <div className="container row mt-3">
      <div className="col-5">
        <h4>
          {props.item.name}
          <span className="badge bg-secondary">₹{props.item.price}</span>
        </h4>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decreaseQty(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.item.qty}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementqty(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">{props.item.qty * props.item.price}</div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.remove(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
