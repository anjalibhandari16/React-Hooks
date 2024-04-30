import React, {useState} from 'react'

function ClickWith_useStateObject() {

  const[name,setName] = useState({firstName:'',lastName:''})

  return (
    <div>
      <div>
        <input value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
        <input value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
      </div>
      <div>
        <h2>First Name is : {name.firstName}</h2>
        <h2>Last Name is : {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </div>
    </div>
  )
}

export default ClickWith_useStateObject