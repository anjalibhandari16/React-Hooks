import React, {useState} from 'react'

function HookCounter() {
    const initialCount = 0;
    const [count,setCount] =useState(initialCount)

    const incrementFive = () =>{
        for(let i=0;i<5;i++)
            setCount(prevCount=>prevCount+1);
    }

  return (
    <div>
        Count : {count}
        <div>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment Five</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
        </div>
    </div>
  )
}

export default HookCounter