import React, {useState} from 'react'

function Addlist() {
    const[list, setList] = useState([])
    const[item,setItem] = useState('')

    const handleChange = (e) =>{
        e.preventDefault();
        setList([...list,{
            id:list.length,
            value:item
        }])
        setItem('')
    }

  return (
    <div>
        <h2>Add New list Functionality</h2>
        <div>
            <form onSubmit={handleChange}>
                <input value={item} onChange={e=>setItem(e.target.value)}></input>
                <button type='submit'>Save</button>
            </form>
        </div>
        <div>
            <ul>
                The List of lists are :
                {list.map(i=><li key={i.id} style={{"listStyleType":"none"}}>{i.value}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default Addlist