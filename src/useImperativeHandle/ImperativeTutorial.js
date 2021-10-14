import React, { useRef } from 'react'
import Button from './Button';

function ImperativeTutorial() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={() => { buttonRef.current.alterToggle(); }}>Button from parent</button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default ImperativeTutorial
