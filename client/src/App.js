import Title from "./components/Title";
import Example from "./components/Example";

function App({name}) {
  const cars= ["BMW",'Ferrari', 'Mercedes'];
  return (
    <>
      <Title name = "TODO App" />
      {/* <Example isGoal = {true}/> */}
      <Example cars={cars}/>
    </>
  );
};


export default App;
