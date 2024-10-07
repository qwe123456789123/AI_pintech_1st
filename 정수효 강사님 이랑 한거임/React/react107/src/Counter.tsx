import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const count2 = () => {
    setcount((perv) => perv + 1);
  };

  const count3 = () => {
    setcount((perv) => (perv == 0 ? 0 : perv - 1));
  };

  return (
    <div>
      <button onClick={count2}>+</button>
      <div style={{ backgroundColor: count >= 10 ? "skyblue" : "white" }}>
        {count}
      </div>
      <button onClick={count3}>-</button>
    </div>
  );
};

export default Counter;
