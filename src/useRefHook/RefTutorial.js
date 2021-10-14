import React, { useRef } from 'react'

function RefTutorial() {

  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
    // inputRef.current.value = "";
    // console.log(inputRef.current.value);
  }


  return (
    <div>
      <h1>Joseph</h1>
      <input type="text" placeholder="example..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial
