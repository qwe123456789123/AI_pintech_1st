import { CSSProperties } from "react";

export type pickrateprops = {
  text: string;
};

const Pickrate = (props: pickrateprops) => {
  const pickratestyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
  };
  return <div style={pickratestyle}>{props.text}</div>;
};

export default Pickrate;
