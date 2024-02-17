import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increaseby1,decreaseby1,increaseby10,decreaseby10} from '../redux/Counterslice'

const Counter = () => {

  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increaseby1())} >Increseby1</button>
      <button  onClick={()=>dispatch(decreaseby1())}>decreseby1</button>
      <button  onClick={()=>dispatch(increaseby10())}>Increseby10</button>
      <button  onClick={()=>dispatch(decreaseby10())}>decreseby10</button>
    </div>
  )
}

export default Counter