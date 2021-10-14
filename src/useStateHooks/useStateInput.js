import React, { useState } from 'react';

const StateTutorialInput = () => {
  const [inputValue, setInputValue] = useState("");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter Something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorialInput;