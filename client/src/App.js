import Title from "./components/Title";
import Example from "./components/Example";
import Color from "./components/Color"

function App({name}) {
  // const cars= ["BMW",'Ferrari', 'Mercedes'];
  return (
    <>
      <Title name = "TODO App" />
      {/* <Example isGoal = {true}/> */}
      {/* <Example cars={cars}/> */}
      {/* <Example isGoal={false} /> */}
      <Color />
    </>
  );
};


export default App;
