import React, {useReducer} from 'react'

const initialState ={
    firstCount :0,
    secondCount:10
} ;
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment' :
            return {...state, firstCount : state.firstCount+ action.changeValue}
        case 'decrement' :
            return {...state, firstCount : state.firstCount- action.changeValue}
        case 'increment2' :
            return {...state, secondCount : state.secondCount+ action.changeValue}
        case 'decrement2' :
            return {...state, secondCount : state.secondCount- action.changeValue}
        case 'reset' :
            return initialState;
        case 'default' :
            return state;
    }
}

function CounterTwo() {

    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h2>{count.firstCount}</h2>
        <h2>{count.secondCount}</h2>
        <div>
            <div>
            <button onClick={()=>dispatch({type:'increment', changeValue : 1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement', changeValue : 1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment', changeValue : 5})}>Increment by 5</button>
            <button onClick={()=>dispatch({type:'decrement', changeValue : 5})}>Decrement by 5</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'increment2', changeValue : 1})}>Increment Counter2</button>
            <button onClick={()=>dispatch({type:'decrement2', changeValue : 1})}>Decrement Counter2</button>
            </div>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    </div>
  )
}

export default CounterTwo