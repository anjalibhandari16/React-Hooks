import React, {useEffect, useState} from 'react'

function MouseCoordinates2() {

    const[value,setValue] = useState({x:0,y:0})

    const handleMousePlaces=(e)=>{
        console.log('Mouse Event');
        setValue(prevState=>({
            ...prevState,
            x:e.clientX,
            y:e.clientY
        }))
    }

    useEffect(()=>{
        console.log('useEffect Called');
        window.addEventListener('mouseover',handleMousePlaces)

        return () =>{
            console.log('Unmounted Event Listeners');
            window.removeEventListener('mousemove',handleMousePlaces)
        }
    },[])

  return (
    <div>
        <h1>Mouse Coordinates :</h1>
        <h2> X - {value.x}</h2>
        <h2> Y - {value.y}</h2>
        <h2>{JSON.stringify(value)}</h2>
    </div>
  )
}

export default MouseCoordinates2