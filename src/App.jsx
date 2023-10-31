import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './App.css'
import Bai1 from "./Components/Bai1";
import Bai2 from "./Components/Bai2";
import Bai3 from "./Components/Bai3";
import MainBai4 from "./Components/Bài 4/MainBai4";
import MainBai5 from "./Components/Bài 5/MainBai5";
import MainBai6 from "./Components/Bài 6/MainBai6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Bai1></Bai1> */}
      {/* <Bai2></Bai2> */}
      {/* <Bai3></Bai3> */}
      {/* <MainBai4></MainBai4> */}
      {/* <MainBai5></MainBai5> */}
      <MainBai6></MainBai6>
    </>
  );
}

export default App;
