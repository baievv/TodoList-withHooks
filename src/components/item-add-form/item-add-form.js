import React, { useState } from "react";
import "./item-add-form.css";

const ItemAddForm = (props) => {
  const [label, setLabel] = useState("");

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (label) {
      props.addItem(label);
      setLabel("");
    } else alert("Please add new task!");
  };

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        value={label}
      />
      <button className="btn btn-outline-secondary">Add item</button>
    </form>
  );
};

export default ItemAddForm;
