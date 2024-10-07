import { CSSProperties, useState } from "react";

export type ablyprops = {
  name: string;
  price: number;
};

const Ably = (props: ablyprops) => {
  const box: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid grey",
    width: "500px",
  };
  const [num, setnum] = useState(1);
  const plusclick = () => {
    setnum((prev) => prev + 1);
  };

  const minusclick = () => {
    setnum((prev) => (prev == 0 ? 0 : prev - 1));
  };
  return (
    <div style={box}>
      <div>
        <button onClick={minusclick}>-</button>
        <span>{num}</span>
        <button onClick={plusclick}>+</button>
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span>{props.price * num}</span>
      </div>
    </div>
  );
};

export default Ably;
