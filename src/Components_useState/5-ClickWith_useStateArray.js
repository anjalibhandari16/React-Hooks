import React, {useState} from 'react'

function ClickWith_useStateArray() {

    const[item, setItem] = useState([])

    const updateItem = () =>{
        setItem([...item,{
            id:item.length,
            val:Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
    <div>
        <div>
            <button onClick={()=>updateItem()}>Add Another Item</button>
        </div>
        <div>
            <ul>The items are : 
                {item.map(i=><li key={i.id}>{i.val}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default ClickWith_useStateArray