
import React from 'react'

import { useSelector} from "react-redux";

export default function Favorite() {
const state=useSelector((state)=>state)
   
  return (
    <div>
         {state.favorite.favorite.map((items, index) => {
        return (
          <div key={index}>
            <h2>{items.name}</h2>
          </div>
        );
      })}
    </div>
  )
}
