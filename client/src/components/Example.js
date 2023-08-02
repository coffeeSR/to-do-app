//rfce

//Adding Events to Component
// export default function Example() {
//     const shoot = () => {
//         alert("goal");
//     }
//   return (
//     <>
//         <button onClick = {shoot}>Take the shot!</button>
//     </>
//   );
// }

// export default function Football() {
//     const shoot = (a) => { 
//         alert(a); 
//     }
//     return (
//         <>
//             <button Onclick = {() => shoot("Goal!")}>Take the Shot!</button>
//         </>
//     );
// }

// export default function Goal(props) {
//     const isGoal = props.isGoal;
//     if(isGoal){
//         return <MadeGoal/>;
//         }
//         return <MissedGoal/>;
//     }

// function MissedGoal(){
//     return <h1>MISSED!</h1>
// }

// function MadeGoal(){
//     return <h1>Goal!</h1>
// }

// const cars = ['Ford', 'BMW', 'Audi'];

// <Garage cars = {cars}/>
//  export default function Garage(props) {
//     const cars = props.cars;
//     return (
//         <>
//             <h1> Garage</h1>
//             {cars.length > 0 &&
//             <h2>
//                 You have {cars.length} cars in your garage.
//             </h2>
//             }
//         </>
//     )
// }

// export default function Goal(props) {
//     const isGoal = props.isGoal;
//     return (
//         <>
//             {isGoal ? <MadeGoal/>: <MissedGoal/>}
//         </>
//     );
// }

// function MissedGoal(){
//     return <h1>MISSED!</h1>
// }
// function MadeGoal(){
//      return <h1>Goal!</h1>
//  }
    
function Car(props) {    
    return <li>I am a { props.brand } </li>
}

export default function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car brand = {car} />)}
            </ul>
        </>
    );
}