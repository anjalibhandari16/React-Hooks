import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  console.log(state);
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return initialState;
    case 'default': return state;
  }

}

function ClickCounter() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default ClickCounter