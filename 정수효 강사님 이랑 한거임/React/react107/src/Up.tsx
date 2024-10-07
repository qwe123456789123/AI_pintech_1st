import { useState } from "react";

const Up = () => {
  const [num1, setnum1] = useState(0);

  const num2 = () => {
    setnum1((perv) => {
      return perv + 1;
    });
  };

  return <button onClick={num2}>{num1}</button>;
};

export default Up;
