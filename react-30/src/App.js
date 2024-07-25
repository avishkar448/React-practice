import "./App.css";
//import Eighteen from "./components/Eighteen";
import Nineteen from "./components/Nineteen";
import NineteenComp from "./components/NineteenComp";
import { ThemeProvider } from "./context/ThemeContext";
// import Seventeen from "./components/Seventeen";
// import Sixteen from "./components/Sixteen";
// import Fifteen from "./components/Fifteen";
//import Fourteen from "./components/Fourteen";
//import Thirteen from "./components/Thirteen";
// import Eleven from "./components/Eleven";
// import Twelve from "./components/Twelve";
//import Ten from "./components/Ten";
// import Nine from "./components/Nine";
// import Eight from "./components/Eight";
// import Seven from "./components/Seven";
// import Six from "./components/Six";
// import Five from "./components/Five";
// import Four from "./components/Four";
// import Three from "./components/Three";
// import One from "./components/One";
// import Two from "./components/Two";

function App() {
  return (
    <div className="App">
      {/* <One/> */}
      {/* <Two/> */}
      {/* <Three/> */}
      {/* <Four/> */}
      {/* <Five/> */}
      {/* <Six/> */}
      {/* <Seven/> */}
      {/* <Eight/> */}
      {/* <Nine/> */}
      {/* <Ten/> */}
      {/* <Eleven/> */}
      {/* <Twelve/> */}
      {/* <Thirteen/> */}
      {/* <Fourteen /> */}
      {/* <Fifteen /> */}
      {/* <Sixteen/> */}
      {/* <Seventeen/> */}
      {/* <Eighteen/> */}

      <ThemeProvider>
        <Nineteen />
        <NineteenComp />
      </ThemeProvider>
    </div>
  );
}

export default App;
