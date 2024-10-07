import { useState } from "react";

const Button = () => {
  const [food, setfood] = useState("마라탕");

  const abc = () => {
    setfood((prev) => {
      return prev + "마라탕후루 사주세요";
    });
  };

  return <button onClick={abc}>{food}</button>;
};

export default Button;
