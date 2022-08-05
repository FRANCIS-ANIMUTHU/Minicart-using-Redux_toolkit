
import { useSelector, useDispatch } from "react-redux";
import { addCart,addfav } from "./Slice";
// import Button from '@mui/material/Button';
import Product from "./product.json";
import Button from '@mui/material/Button';
import React from "react";

function App() {
  
  


  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  
  const add = (items) => {
    dispatch(addCart([...state.cartbox.cartbox, items]
      ))
  };
  const fav=(items)=>{
    dispatch(addfav([...state.favorite.favorite,items]))
  }
 
  return (
    <div>
      {Product.map((items, index) => {
        return (
          <div key={index}>
            <h2>{items.name}</h2>
            <Button variant="contained" onClick={() => add(items)}>Add to cart</Button>
            <Button variant="outlined"  onClick={()=> fav(items)}>Add to favorite</Button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// // import logo from "./logo.svg";
// import "./App.css";
// import product from "./product.json";
// // import Cart from './Cart';
// import React, { Component, useState } from "react";

//console.log(product);
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Francis",
//       cartitems: [],
//     };
//   }

//   addcart(product) {
//     //console.log(prod);
//     var check = this.state.cartitems;
//     // console.log(check);
//     this.setState({ cartitems: [...check, product] });
//     console.log(product);

//   }

//   // removeelement(v){
//   //   product.find((o)=>{
//   //    if(o==v){
//   //     this.removeelement(this.cartitems);

//   //    }

//   //   })

//   // }
//   render() {
//     return (
//       <div>
//         {product.map((tools, index) => {
//           return (
//             <div key={index}>
//               <h1>{tools.name}</h1>
//               <button onClick={() => this.addcart(tools)}>Add to cart</button>
//             </div>
//           );
//         })}
//         <h1>Addcart items</h1>

//         {this.state.cartitems.map((product, index) => {
//           return (
//             <div key={index}>
//               <div
//                 style={{
//                   color: "red",
//                   border: "solid black 2px",
//                   width: "20%",
//                   textAlign: "center",
//                   backgroundColor: "yellow",
//                   listStyle: "none",
//                 }}
//               >
//                 <li>
//                   <h3>{product.name}</h3>
//                 </li>
//                 <li style={{ color: "green" }}>{product.price}</li>
//                 <li style={{ color: "blue" }}>{product.qty}</li>
//                 {/* <button onClick={() => this.removeelement(product)}>
//                   remove
//                 </button> */}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
