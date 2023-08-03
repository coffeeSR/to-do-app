import Title from "./components/Title";
// import Example from "./components/Example";
// import Color from "./components/Color"
// import Timer from "./components/Example";
// import Example from "./components/Example";
import CustomHook from "./components/CustomHook";

const App = (name) => {
  // const cars= ["BMW",'Ferrari', 'Mercedes'];
  return (
    <>
      <Title name = "TODO App" />
      {/* <Example isGoal = {true}/> */}
      {/* <Example cars={cars}/> */}
      {/* <Example isGoal={false} /> */}
      {/* <Example /> */}
      {/* <Color /> */}
      <CustomHook />
    </>
  );
};

export default App;
