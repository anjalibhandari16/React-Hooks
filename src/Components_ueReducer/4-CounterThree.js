import React, {useReducer} from 'react'

const initialState =0 ;
const reducer = (state,action) =>{
    switch(action){
        case 'increment' :
            return state+1;
        case 'decrement' :
            return state-1;
        case 'reset' :
            return initialState;
        case 'default' :
            return state;
    }
}


function CounterThree() {
    const[count,dispatch]=useReducer(reducer,initialState)
    const[countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <div>
        <h2> Count - {count}</h2>
        <h2> CountTwo - {countTwo}</h2>
        <div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
        <div>
            <button onClick={()=>dispatchTwo('increment')}>Increment</button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default React.memo(CounterThree)