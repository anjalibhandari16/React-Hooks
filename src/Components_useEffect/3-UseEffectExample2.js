import React, {useState, useEffect} from 'react'

function UseEffectExample2() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(0)

  useEffect(()=>{
    console.log('Changes Made');
    document.title=`Clicked ${count} Times`
  },[count])

  return (
    <div>
      <div>
        <input value={item} onChange={(e)=>setItem(e.target.value)}></input>
      </div>
    <button onClick={()=>setCount(prevState=>prevState+1)}>Clicked {count} Times</button>
    </div>
  )
}

export default UseEffectExample2