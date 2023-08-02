// import React, {useState} from 'react';

// export default function FavouriteColor() {
//     const [color, setColor] = useState("red");

//   return (
//     <>
//         <h1>My favourite color is {color}!</h1>
//         <button type = "button" onClick = {() => setColor("blue")}>
//             blue
//         </button>
//         <button type = "button" onClick = {() => setColor("red")}>
//             Red
//         </button>
//     </>
//   );
// }


import {useState} from "react";
export default function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model : "Mustang",
    year : "1969",
    color : "black",
  });

  const updateColor = () => {
    setCar((previousState)=> {
      return { ...previousState, color: "red"};
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type = "button" onClick = {updateColor}>
        Red
      </button>
    </>
  );
}
