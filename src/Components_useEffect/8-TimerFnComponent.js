import React,{ useState, useEffect} from 'react'

function TimerFnComponent() {

    const [count, setCount] = useState (0);

    useEffect(()=>{
        const timer = setInterval(()=>setCount(count + 1),1000);
        return () => clearInterval(timer)
    },[count])

    useEffect(()=>{
        const timer = setInterval(()=>setCount(prevCount => prevCount + 1),1000);
        return () => clearInterval(timer)
    },[])

  return (
    <h2>{count}</h2>
  )
}

export default TimerFnComponent