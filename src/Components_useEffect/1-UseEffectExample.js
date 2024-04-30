import React, {useState, useEffect} from 'react'

function UseEffectExample() {

  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title=`Clicked ${count} Times`
  })

  return (
    <button onClick={()=>setCount(prevState=>prevState+1)}>Clicked {count} Times</button>
  )
}

export default UseEffectExample