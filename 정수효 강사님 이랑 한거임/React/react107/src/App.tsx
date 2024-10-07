import Button from "./Button";
import Up from "./Up";
import Counter from "./Counter";
import Ably from "./Ably";
import { useState } from "react";
import Test from "./Test";
import Coffee from "./Coffee";

function App() {
  return (
    <div>
      <Button></Button>
      <Up></Up>
      <Counter></Counter>
      <Ably name={"이름"} price={2000}></Ably>
      <Ably name={"이름"} price={3000}></Ably>
      <Test></Test>
      <Coffee></Coffee>
    </div>
  );
}

export default App;
