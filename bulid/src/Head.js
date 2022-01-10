import React, { useState } from 'react';

function Head(){
  const[data, setData] = useState(0)
    function abc(){
        setData(data-1)
    }
    function add(){
         setData(data+1)
    }
    
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={abc}>Sub</button>
            <button onClick={add}>ADD</button>
        </div>
    )
}
export default Head