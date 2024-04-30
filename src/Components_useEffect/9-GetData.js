import axios from 'axios';
import React, { useState, useEffect} from 'react'

function GetData() {

    const[list, setList] = useState([]);

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setList(response.data))
        .catch(error=>console.log(error))
    },[])



  return (
    <div>
        <h2>The List is :</h2>
        <div>
            <ul>
                {list.map(i=><li key={i.id} style={{"listStyleType":"none"}}>{i.title}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default GetData