import axios from 'axios';
import React, { useState, useEffect } from 'react'

function GetDataCustomized() {

    const [list, setList] = useState([]);
    const [val, setVal] = useState(1);
    const [buttonClickValue, setButtonClickValue] = useState();

    console.log(buttonClickValue,val,list);


    useEffect(() => {

        if (buttonClickValue) {
            console.log('its true');
            axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickValue}`)
                .then(response => {
                    console.log(response, val);
                    setList(response.data)
                })
                .catch(error => console.log(error))
        }

    }, [buttonClickValue])

    return (
        <div>
            <div>
                <input value={val} onChange={e => setVal(e.target.value)}></input>
                <button onClick={()=>setButtonClickValue(val)}>Search for the {val}th Post</button>
            </div>
            <h2>The List is : </h2>
            <ul>
                {list.title}
            </ul>
        </div>
    )
}

export default GetDataCustomized