import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

const ClassCounterOne = () => {


  const [elementList,setElementList] = useState([])
  const [inputData, setInputData] = useState('')
  const [counter,setCounter] = useState(0)

  useEffect(()=>{
    setElementList( [ ...elementList ,<h1>{inputData}</h1> ] )
  },[counter])

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Add Kro</button>
      <input type='text' value={inputData} onChange={(e)=>setInputData(e.target.value)} />
      {elementList}
    </div>
  )
}

export default ClassCounterOne


// [100]

// [100,200]

// [100,200 , 300]