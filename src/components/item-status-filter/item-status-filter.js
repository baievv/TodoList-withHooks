import React, { useState } from "react";
import "./item-status-filter.css";

const ItemStatusFilter=(props)=> {
  const [button] = useState([
    { name: "All", label: "All" },
    { name: "Active", label: "Active" },
    { name: "Done", label: "Done" },
  ]);

    const { filter, onFilterChange } = props;

    const buttons = button.map(({ name, label }) => {
      const isActive = filter === name;
      const clasz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          key={name}
          className={`btn ${clasz}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }

export default ItemStatusFilter;
