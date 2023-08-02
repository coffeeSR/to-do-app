// import React, {useState} from 'react';

// const FavouriteColor = () => {
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
// export default FavouriteColor;


import {useState} from "react";
import Button from "react-bootstrap/Button";

const Car = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model : "Mustang",
    year : "1969",
    color : "black",
  });

  const updateColor = (newColor) => {
    setCar((previousState)=> {
      return { ...previousState, color: newColor};
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <Button variant = "danger" onClick = {() => updateColor("blue")}>
        Blue
      </Button>
    </>
  );
}
export default Car;
