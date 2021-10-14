import React, { useReducer } from 'react';

const reducer = (bubble, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: bubble.count + 1, showText: bubble.showText }
    case "toggleShowText":
      return { count: bubble.count, showText: !bubble.showText }
    default:
      return bubble;
  }
};

const ReducerTutorialCounter = () => {
  const [bubble, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div>
      <h1>{bubble.count}</h1>
      <button onClick={() => {
        dispatch({ type: "INCREMENT" })
        dispatch({ type: "toggleShowText" })
      }}
      >Click Here</button>
      {bubble.showText && <p>This is some Text</p>}
    </div>
  );
};

export default ReducerTutorialCounter;