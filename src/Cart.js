import React from 'react'
import { useSelector } from "react-redux";


export default function Cart() {
  const state=useSelector((state)=>state);
  console.log(state);

  return (
    <div>
      {
        state?.cartbox.cartbox.map((datas,index)=>{
          return(
            <div key={index}>
              <h1>{datas.name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
