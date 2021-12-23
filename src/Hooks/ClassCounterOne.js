import React,{useState,useEffect} from "react";

const Hookcounter1 = () =>{

  const [elementsList, setelementsList] = useState([])
  const [inputData, setInputData] = useState('')
  const [counter,setCounter] = useState(0)

  useEffect(() => {
      setelementsList([...elementsList, <h1>{inputData}</h1>])
  }, [counter])



  return (
    <>
        <button onClick={ () => setCounter(counter+1) }> Add </button>

        <input type='text' value={inputData} onChange={ (e)=>setInputData(e.target.value) } />

        {elementsList}

    </>
  )
}
    
export default Hookcounter1 