import React, {useEffect, useState} from 'react';
import MouseCoordinates2 from './5-MouseCoordinates2';

function CleanUp() {

  const [show,setShow] = useState(true);

  return (
    <div>
      <button onClick={()=>setShow(false)}>Toggle</button>
      <div>
        {show && <MouseCoordinates2 />}
      </div>
    </div>
  )
}

export default CleanUp