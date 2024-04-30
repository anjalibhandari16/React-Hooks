import React, {useEffect, useState} from 'react'

function MouseCoordinates() {
    const[x,setX] = useState(0);
    const[y,setY] = useState(0);

    const[value,setValue] = useState({x:0,y:0})

    const handleMousePlaces=(e)=>{
        console.log(e);
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect Called');
        window.addEventListener('mouseover',handleMousePlaces)
    },[])

  return (
    <div>
        <h1>Mouse Coordinates :</h1>
        <h2> X - {x}</h2>
        <h2> Y - {y}</h2>
    </div>
  )
}

export default MouseCoordinates