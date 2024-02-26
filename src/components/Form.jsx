import React, { useState } from "react";

function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <div className="flex-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter username"
        />
        <button type="submit" className="btnSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
