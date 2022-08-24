import React,{useState} from "react";
import "./search-panel.css";

const SearchPanel=(props)=>{
  const [term,setTerm]=useState('');

  const onSearchChange=(e)=>{
    const term1=e.target.value;
    setTerm(term1);
    props.onSearchChange(term1);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={term}
      onChange={onSearchChange}
    />
  );
  };

  export default SearchPanel;
