import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Home() {
    const dispatch= useDispatch();
    const {c}=useSelector(state=>state.customer)

    const addbtn=()=>{
        dispatch({
            type:"increment"
        })

    }
    const subbtn=()=>{
        dispatch({
            type:"decrement"
        })
    }
    const addbtnn=()=>{
        dispatch({
            type:"incrementByAmount",
            payload:10,
        })

    }
  return (
    <div>
        <h1>{c}</h1>
      <button onClick={addbtn}>increment</button>

      <button onClick={subbtn} disabled={c===0}>decrement</button>

      <button onClick={addbtnn}>increment by 10 value</button>
    </div>
  )
}
