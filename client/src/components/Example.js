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
    
// function Car(props) {    
//     return <li>I am a { props.brand } </li>
// }

// export default function Garage() {
//     const cars = ['Ford', 'BMW', 'Audi'];
//     return (
//         <>
//             <h1>Who lives in my garage?</h1>
//             <ul>
//                 {cars.map((car) => <Car brand = {car} />)}
//             </ul>
//         </>
//     );
// }

// 
import { useState,useEffect } from "react";
import axios from "axios";
// const Timer = () => {
//     const [count, setcount] = useState(0);

//     useEffect(() => {
//         let timer = setTimeout(() => {
//             setcount((count) => count +1);
//         }, 1000);

//         return () => clearTimeout(timer);
//     },[]);
//     return <h1>I've rendered {count} times!</h1>
// }

// export default Timer;

const Example = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios("http://localhost:7000/api/v1/todos")
          
            setData(data.data);
            
        };
        fetchData();
    },[]);
    console.log(data);
    return (
        <>
            {data && data.length > 0 && (
                <>
                    <ul>
                        {data.map(todo => 
                            <li key={todo?._id}>
                            {todo?.title}
                            </li>

                        )}
                    </ul>
                </>
            )}
        </>
    );
}

export default Example;