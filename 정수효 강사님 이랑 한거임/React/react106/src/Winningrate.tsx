import { CSSProperties } from "react";

export type winningrateprops = {
  text: string;
};

const Winningrate = (props: winningrateprops) => {
  const winningratstyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
  };
  return <div style={winningratstyle}>{props.text}</div>;
};

export default Winningrate;
